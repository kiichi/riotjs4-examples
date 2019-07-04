import Router from './router.js';
import Service from './service.js';

// Initializing App
const config = {
  baseUrl: '/api/'
};

// Main
(async function main() {
  await riot.compile()

  const store = datoramaAkita.createStore({ page: 'dashboard',
                                    params:{},
                                    breadcrumb:[],
                                    isLoggedIn: false,
                                    lastLoginError: '',
                                    user: { 'uname': '', 'name': '', 'token': '' },
                                    list:[],
                                    details:{}
                                  }, {
                                    name: 'repository'
                                  });
  const query = datoramaAkita.createQuery(store);
  const service = new Service(store, axios, config);
  const router = new Router(service);

  riot.install((component) => {
    component.store = store;
    component.query = query;
    component.service = service;
    component.router = router;
    component.config = config;
  });

  riot.mount('app');
}());