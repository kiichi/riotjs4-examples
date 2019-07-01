class Service {
  constructor(store, http, config) {
    this.store = store;
    this.http = http;
    this.config = config;
  }

  goto(page,params) {
    this.store.update({
      page: page,
      params: params
    });
  }

  async login(username, password) {
    const payload = {
      Username: username,
      Password: password
    };
    const res = await this.http.get(this.config.baseUrl + 'login.json', payload);
    if (res.data.status === 'ok') {
      this.store.update({
        isLoggedIn: true,
        lastLoginError: '',
        user: {
          name: res.data.result.name,
          token: res.data.result.token,
          uname: res.data.result.uname
        }
      });
    } else {
      this.store.update({
        lastLoginError: res.data.Message
      });
    }
  }

  logout() {
    this.store.update({
      page: 'page-dashboard',
      isLoggedIn: false,
      lastLoginError: '',
      user: {
        name: '',
        token: '',
        uname: ''
      },
      data: {}
    });
  }

  async getList() {
    const res = await this.http.get(this.config.baseUrl + 'list.json');
    if (res.data.status === 'ok') {
      this.store.update({
        list: res.data.result
      });
    } else {
      console.warn('error');
    }
  }

  async getDetails(id) {
    const res = await this.http.get(this.config.baseUrl + 'details-'+id+'.json');
    if (res.data.status === 'ok') {
      this.store.update({
        details: res.data.result[0]
      });
    } else {
      console.warn('error');
    }
  }

  pushBreadcrumb(name,id){
    var item =  {name:name,id:id};
    this.store.update(state => ({ 
        breadcrumb:state.breadcrumb.concat(item) 
    }));
  }

  popBreadcrumb(popCount){
    popCount = (popCount || 0);
    this.store.update(state => ({ 
        breadcrumb:state.breadcrumb.slice(0, state.breadcrumb.length - popCount )
    }));
  }

  clearBreadcrumb(){
    this.store.update(state => ({ 
        breadcrumb:[]
    }));
  }
}
export default Service;