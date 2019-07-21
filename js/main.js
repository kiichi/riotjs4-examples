import Router from './router.js';
import Service from './service.js';

// Initializing App
const config = {
  baseUrl: '/api/'
};

// Alias
const http = axios;
const akita = datoramaAkita;

function hasRiotTags(){
   // Call compile if tag is used in script tag
   const riotScripts = document.querySelectorAll('script[type=riot]');
   if (riotScripts.length > 0){
     return true;
   }
   return false;
}

// Main
(async function main() {
  if (hasRiotTags()){
    await riot.compile()
    riot.mount('compile-me');
  }

  const store = datoramaAkita.createStore({ page: 'dashboard',
                                    params:{},
                                    breadcrumb:[],
                                    isLoggedIn: false,
                                    lastLoginError: '',
                                    user: { 'uname': '', 'name': '', 'token': '' },
                                    list:[]
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