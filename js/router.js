class Router extends Navigo {
    constructor(service){
      super(null,true);
      this.service = service;
      this.on('/dashboard', () => {
          this.service.goto('page-dashboard');
        })
        .on('/list', () => {
          this.service.goto('page-list');
        })
        .on('/list/:id', (params) => {
          this.service.goto('page-details',params);
        })
        .on('/settings', () => {
          this.service.goto('page-settings');
        })
        .on('/logout', () => {
          this.service.logout();
          this.navigate('/');
        })
        .resolve();
    }
}
export default Router;