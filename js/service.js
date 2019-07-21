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
          username: res.data.result.username
        }
      });
    }
    else {
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
        username: ''
      }
    });
  }

  async getList() {
    const res = await this.http.get(this.config.baseUrl + 'list.json');
    if (res.data.status === 'ok') {
      this.store.update({
        list: res.data.result
      });
    }
    else {
      console.warn('error');
    }
  }

  async getDetails(id) {
    const res = await this.http.get(this.config.baseUrl + 'details-'+id+'.json');
    if (res.data.status === 'ok') {
      this.store.update(state =>({
        list: datoramaAkita.arrayUpdate(state.list, item=>item.id === id, res.data.result[0])
      }));
      //console.log(this.store.store.getValue().list);
    }
    else {
      console.warn('error');
    }
  }

  async updateFavorite(id, favorite){
    // pretend the server process PUT request
    const res = await this.http.get(this.config.baseUrl + 'details-'+id+'.json');
    if (res.data.status === 'ok') {
      this.store.update(state =>({
        list: datoramaAkita.arrayUpdate(state.list, 
                                        item=>item.id === id, 
                                        {
                                        ...res.data.result[0],
                                        ...{favorite:favorite}
                                        })
      }));
    }
    else {
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