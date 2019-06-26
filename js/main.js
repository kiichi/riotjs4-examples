import Router from './router.js';
import Service from './service.js';

// Initializing App
const config = {
  baseUrl: '/api/'
};

// Alias
const http = axios;
const akita = datoramaAkita;

// Main
(async function main() {
  await riot.compile()

  const store = akita.createStore({ page: 'dashboard',
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
  const query = akita.createQuery(store);
  const service = new Service(store, http, config);
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