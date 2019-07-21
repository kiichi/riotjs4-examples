//Version: 1563721864266
// Auto-generated code. Do not touch.
riot.register('app',{
  'css': `app table,[is="app"] table{ table-layout: fixed; width: 100%; } app .fa-2x,[is="app"] .fa-2x{ font-size: 1em; margin-left: 5px; } app .clickable,[is="app"] .clickable{ cursor: pointer; } app sidebar,[is="app"] sidebar{ background-color: #224abe; } app login,[is="app"] login{ width: 100%; }`,

  'exports': {
    state: {
      isLoggedIn: false,
      page: 'page-dashboard'
    },

    onMounted(props, state) {
      this.query.select('isLoggedIn').subscribe(val => {
        this.update({ isLoggedIn: val });
      });
      this.query.select('page').subscribe(val => {
        this.update({ page: val });
      });
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<login expr44></login><div expr45 id="wrapper"></div><a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>',
      [{
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return !scope.state.isLoggedIn;
        },

        'redundantAttribute': 'expr44',
        'selector': '[expr44]',

        'template': template(null, [{
          'type': bindingTypes.TAG,
          'getComponent': getComponent,

          'evaluate': function(scope) {
            return 'login';
          },

          'slots': [],
          'attributes': []
        }])
      }, {
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.state.isLoggedIn;
        },

        'redundantAttribute': 'expr45',
        'selector': '[expr45]',

        'template': template(
          '<sidebar expr46></sidebar><div id="content-wrapper" class="d-flex flex-column"><div id="content"><top-section expr47></top-section><div expr48 class="container-fluid"></div></div><bottom-section expr49></bottom-section></div>',
          [{
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'sidebar';
            },

            'slots': [],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'page',

              'evaluate': function(scope) {
                return scope.state.page;
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'on-change',

              'evaluate': function(scope) {
                return scope.onPageChanged;
              }
            }],

            'redundantAttribute': 'expr46',
            'selector': '[expr46]'
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'top-section';
            },

            'slots': [],
            'attributes': [],
            'redundantAttribute': 'expr47',
            'selector': '[expr47]'
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return scope.state.page;
            },

            'slots': [],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'class',

              'evaluate': function() {
                return 'container-fluid';
              }
            }],

            'redundantAttribute': 'expr48',
            'selector': '[expr48]'
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'bottom-section';
            },

            'slots': [],
            'attributes': [],
            'redundantAttribute': 'expr49',
            'selector': '[expr49]'
          }]
        )
      }]
    );
  },

  'name': 'app'
});

riot.register('login',{
  'css': null,

  'exports': {
    state: {
        message: ''
    },

    onMounted(props, state) {
        this.query.select('lastLoginError').subscribe(val => {
            this.update({
                message: val
            });
        });
    },

    inputKeyup(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            this.doLogin();
        }
    },

    loginClicked(e) {
        e.preventDefault();
        this.doLogin();
    },

    doLogin() {
        // ref and two way binding is dead. this is good thing
        let username = this.$('#username').value;
        let password = this.$('#password').value;
        if (username && password) {
            this.service.login(username, password);
            this.router.navigate('/dashboard');
        } else {
            this.update({
                message: 'Enter Username and Password'
            });
        }
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="container"><div class="row justify-content-center"><div class="col-xl-10 col-lg-12 col-md-9"><div class="card o-hidden border-0 shadow-lg my-5"><div class="card-body p-0"><div class="row"><div class="col-lg-12"><div class="p-5"><div class="text-center"><h1 class="h4 text-gray-900 mb-2">Admin App Example</h1><h5>Riot + Akita + Navigo + Axios</h5><br/></div><form class="user"><div class="form-group"><input expr59 type="email" id="username" class="form-control form-control-user" placeholder="Enter Username (Type Anything)"/></div><div class="form-group"><input expr60 type="password" id="password" class="form-control form-control-user" placeholder="Enter Password (Type Anything)"/></div><div class="form-group"><div class="custom-control custom-checkbox small"><input type="checkbox" class="custom-control-input" id="customCheck"/><label class="custom-control-label" for="customCheck">Remember\n                                                    Me</label></div></div><button expr61 class="btn btn-primary btn-user btn-block">\n                                            Login\n                                        </button></form><hr/><label expr62 class="text-xs font-weight-bold text-danger text-uppercase mb-1"><!----></label></div></div></div></div></div></div></div></div>',
      [{
        'redundantAttribute': 'expr59',
        'selector': '[expr59]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onkeyup',

          'evaluate': function(scope) {
            return scope.inputKeyup;
          }
        }]
      }, {
        'redundantAttribute': 'expr60',
        'selector': '[expr60]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onkeyup',

          'evaluate': function(scope) {
            return scope.inputKeyup;
          }
        }]
      }, {
        'redundantAttribute': 'expr61',
        'selector': '[expr61]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.loginClicked;
          }
        }]
      }, {
        'redundantAttribute': 'expr62',
        'selector': '[expr62]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.state.message;
          }
        }]
      }]
    );
  },

  'name': 'login'
});

riot.register('sidebar',{
  'css': `sidebar .nav-item a,[is="sidebar"] .nav-item a{ cursor:pointer; }`,

  'exports': {
    state : {
        page: 'dashboard'
    },

    onBeforeMount(props, state) {
        this.state.page = props.page;
    },

    onMounted(props, state) {
    },

    menuClicked(pageName){
        this.router.navigate('/'+pageName);
    },

    logoutClicked(){
        if (confirm('Are you sure to logout?')){
            this.router.navigate('/logout');
        }
    },

    toggleClicked(){
        // Example of mixing legacy like jQuery
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"><a class="sidebar-brand d-flex align-items-center justify-content-center" href="#/dashboard"><div class="sidebar-brand-icon"><i class="fa fa-user"></i></div><div class="sidebar-brand-text mx-3">Admin</div></a><div class="sidebar-heading">\n            Menu\n        </div><hr class="sidebar-divider my-0"/><li expr50 class="nav-item"><a class="nav-link"><i class="fa fa-tachometer-alt"></i><span>Dashboard</span></a></li><li expr51 class="nav-item"><a class="nav-link"><i class="fa fa-database"></i><span>List</span></a></li><li expr52 class="nav-item"><a class="nav-link"><i class="fa fa-cog"></i><span>Settings</span></a></li><hr class="sidebar-divider"/><li expr53 class="nav-item"><a class="nav-link" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fas fa-sign-out-alt"></i><span>Logout</span></a></li><hr class="sidebar-divider d-none d-md-block"/><div expr54 class="text-center d-none d-md-inline"><button class="rounded-circle border-0" id="sidebarToggle"></button></div></ul>',
      [{
        'redundantAttribute': 'expr50',
        'selector': '[expr50]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return ()=>scope.menuClicked('dashboard');
          }
        }]
      }, {
        'redundantAttribute': 'expr51',
        'selector': '[expr51]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return ()=>scope.menuClicked('list');
          }
        }]
      }, {
        'redundantAttribute': 'expr52',
        'selector': '[expr52]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return ()=>scope.menuClicked('settings');
          }
        }]
      }, {
        'redundantAttribute': 'expr53',
        'selector': '[expr53]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.logoutClicked;
          }
        }]
      }, {
        'redundantAttribute': 'expr54',
        'selector': '[expr54]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.toggleClicked;
          }
        }]
      }]
    );
  },

  'name': 'sidebar'
});

riot.register('top-section',{
  'css': null,

  'exports': {
    state: {
      count: 0,
      user: {}
    },

    onMounted(props, state) {
      this.query.select('user').subscribe(user => {
        this.update({
          user: user
        });
      });
    },

    profileClicked() {
      alert(this.state.user.name + ' (' + this.state.user.uname + ')');
    },

    logoutClicked() {
      if (confirm('Are you sure to logout?')) {
        this.router.navigate('/logout');
      }
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"><button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3"><i class="fa fa-bars"></i></button><form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"><div class="input-group"><input type="text" class="form-control bg-light border-0 small" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/><div class="input-group-append"><button class="btn btn-primary" type="button"><i class="fas fa-search fa-sm"></i></button></div></div></form><ul class="navbar-nav ml-auto"><li class="nav-item dropdown no-arrow d-sm-none"><a expr55 class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-search fa-fw"></i></a><div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown"><form class="form-inline mr-auto w-100 navbar-search"><div class="input-group"><input id="search" type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/><div class="input-group-append"><button id="btnSearch" class="btn btn-primary" type="button"><i class="fas fa-search fa-sm"></i></button></div></div></form></div></li><li class="nav-item dropdown no-arrow"><a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span expr56 class="mr-2 d-none d-lg-inline text-gray-600 small"><!----></span></a><div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown"><a expr57 class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>\n            Profile\n          </a><div class="dropdown-divider"></div><a expr58 class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>\n            Logout\n          </a></div></li></ul></nav>',
      [{
        'redundantAttribute': 'expr55',
        'selector': '[expr55]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return ()=>alert('Not implemented');
          }
        }]
      }, {
        'redundantAttribute': 'expr56',
        'selector': '[expr56]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return ['Welcome,\n            ', scope.state.user.name].join('');
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'title',

          'evaluate': function(scope) {
            return scope.state.user.uname;
          }
        }]
      }, {
        'redundantAttribute': 'expr57',
        'selector': '[expr57]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.profileClicked;
          }
        }]
      }, {
        'redundantAttribute': 'expr58',
        'selector': '[expr58]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.logoutClicked;
          }
        }]
      }]
    );
  },

  'name': 'top-section'
});

riot.register('bottom-section',{
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<footer class="sticky-footer bg-white"><div class="container my-auto"><div class="copyright text-center my-auto"><span>&copy; 2019 Admin App Example: Riot + Akita + Navigo + Axios</span></div></div></footer>',
      []
    );
  },

  'name': 'bottom-section'
});

riot.register('breadcrumb',{
  'css': null,

  'exports': {
    state:{
        breadcrumb:[]
    },

    onMounted(props,state){
        this.query.select('breadcrumb').subscribe(data => this.update({breadcrumb:data}));
    },

    goBack(popCount){
        this.service.popBreadcrumb(popCount);
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="d-sm-flex mb-4"><a expr63 href="/#/list/"></a><a expr64></a><span expr65></span></div>',
      [{
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.state.breadcrumb.length > 0;
        },

        'redundantAttribute': 'expr63',
        'selector': '[expr63]',

        'template': template('List Page', [{
          'expressions': [{
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return ()=>scope.goBack(scope.state.breadcrumb.length);
            }
          }]
        }])
      }, {
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.state.breadcrumb.length == 0;
        },

        'redundantAttribute': 'expr64',
        'selector': '[expr64]',
        'template': template('List Page', [])
      }, {
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,

        'template': template('<span class="ml-1 mr-1">&gt;</span><a expr66></a><a expr67></a>', [{
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return scope.index < scope.state.breadcrumb.length-1;
          },

          'redundantAttribute': 'expr66',
          'selector': '[expr66]',

          'template': template('<!---->', [{
            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.name;
              }
            }, {
              'type': expressionTypes.ATTRIBUTE,
              'name': 'href',

              'evaluate': function(scope) {
                return ['/#/list/', scope.item.id].join('');
              }
            }, {
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return ()=>scope.goBack(scope.state.breadcrumb.length-1-scope.index);
              }
            }]
          }])
        }, {
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return scope.index == scope.state.breadcrumb.length-1;
          },

          'redundantAttribute': 'expr67',
          'selector': '[expr67]',

          'template': template('<!---->', [{
            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.name;
              }
            }]
          }])
        }]),

        'redundantAttribute': 'expr65',
        'selector': '[expr65]',
        'itemName': 'item',
        'indexName': 'index',

        'evaluate': function(scope) {
          return scope.state.breadcrumb;
        }
      }]
    );
  },

  'name': 'breadcrumb'
});

riot.register('page-dashboard',{
  'css': null,
  'exports': {},

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Dashboard</h1></div><div class="row"><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div><div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-success shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div><div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div></div><div class="col-auto"><i class="fas fa-dollar-sign fa-2x text-gray-300"></i></div></div></div></div></div><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-info shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div><div class="row no-gutters align-items-center"><div class="col-auto"><div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div></div><div class="col"><div class="progress progress-sm mr-2"><div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div><div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div></div></div></div></div><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-warning shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div><div class="h5 mb-0 font-weight-bold text-gray-800">18</div></div><div class="col-auto"><i class="fas fa-comments fa-2x text-gray-300"></i></div></div></div></div></div></div>',
      []
    );
  },

  'name': 'page-dashboard'
});

riot.register('page-list',{
  'css': null,

  'exports': {
    async onMounted(props,state){
        await this.service.getList();
        this.query.select('list').subscribe(list => this.update({list:list}));
        this.service.clearBreadcrumb();
    },

    itemClicked(item){
        this.service.pushBreadcrumb(item.name,item.id);
        this.router.navigate('/list/' + item.id);
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="d-sm-flex align-items-center justify-content-between mb-2"><breadcrumb expr68></breadcrumb></div><div class="row"><div class="col-lg-12 mb-4"><div class="card shadow mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">List</h6></div><div class="card-body"><table class="table table-hover"><thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Phone</th><th scope="col">Balance</th></tr></thead><tbody><tr expr69 class="clickable"></tr></tbody></table></div></div></div></div>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'breadcrumb';
        },

        'slots': [],
        'attributes': [],
        'redundantAttribute': 'expr68',
        'selector': '[expr68]'
      }, {
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,

        'template': template(
          '<th expr70 scope="row"><!----></th><td expr71><!----></td><td expr72><!----></td><td expr73><!----></td>',
          [{
            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return ()=>scope.itemClicked(scope.item);
              }
            }]
          }, {
            'redundantAttribute': 'expr70',
            'selector': '[expr70]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.id;
              }
            }]
          }, {
            'redundantAttribute': 'expr71',
            'selector': '[expr71]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.name;
              }
            }]
          }, {
            'redundantAttribute': 'expr72',
            'selector': '[expr72]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.phone;
              }
            }]
          }, {
            'redundantAttribute': 'expr73',
            'selector': '[expr73]',

            'expressions': [{
              'type': expressionTypes.TEXT,
              'childNodeIndex': 0,

              'evaluate': function(scope) {
                return scope.item.balance;
              }
            }]
          }]
        ),

        'redundantAttribute': 'expr69',
        'selector': '[expr69]',
        'itemName': 'item',
        'indexName': null,

        'evaluate': function(scope) {
          return scope.state.list;
        }
      }]
    );
  },

  'name': 'page-list'
});

riot.register('page-details',{
  'css': null,

  'exports': {
    state: {
        item:{}
    },

    onMounted(props,state){
        this.query.select('details').subscribe(details=> {
            if (details){
                this.update({item:details});
            }
        });
        this.query.select('params').subscribe(params=>{
            if (params){
                this.service.getDetails(params.id);
            }
        });
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="d-sm-flex align-items-center justify-content-between mb-2"><breadcrumb expr74></breadcrumb><a expr75 href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i expr76></i> Acitive</a></div><div class="row"><div class="col-lg-12 mb-4"><div class="card shadow mb-4"><div class="card-header py-3"><h6 expr77 class="m-0 font-weight-bold text-primary"><!----></h6></div><div expr78 class="card-body"><!----><br/><!----><br/><!----><br/><!----><br/><!----><br/><!----><br/>\n                    Friends: \n                    <span expr79></span><br/><hr/><span expr82 each="tag in state.item.tags" class="badge badge-primary mr-2"></span></div></div></div></div>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'breadcrumb';
        },

        'slots': [],
        'attributes': [],
        'redundantAttribute': 'expr74',
        'selector': '[expr74]'
      }, {
        'redundantAttribute': 'expr75',
        'selector': '[expr75]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return ()=>alert('not implemented yet');
          }
        }]
      }, {
        'redundantAttribute': 'expr76',
        'selector': '[expr76]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',

          'evaluate': function(scope) {
            return ['fas fa-star fa-sm ', scope.state.item.isActive ? 'text-white-50' : ''].join('');
          }
        }]
      }, {
        'redundantAttribute': 'expr77',
        'selector': '[expr77]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.state.item.name;
          }
        }]
      }, {
        'redundantAttribute': 'expr78',
        'selector': '[expr78]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return ['\n                    Age: ', scope.state.item.age, ' years old'].join('');
          }
        }, {
          'type': expressionTypes.TEXT,
          'childNodeIndex': 2,

          'evaluate': function(scope) {
            return ['\n                    Gender: ', scope.state.item.gender].join('');
          }
        }, {
          'type': expressionTypes.TEXT,
          'childNodeIndex': 4,

          'evaluate': function(scope) {
            return ['\n                    Email: ', scope.state.item.email].join('');
          }
        }, {
          'type': expressionTypes.TEXT,
          'childNodeIndex': 6,

          'evaluate': function(scope) {
            return ['\n                    Phone: ', scope.state.item.phone].join('');
          }
        }, {
          'type': expressionTypes.TEXT,
          'childNodeIndex': 8,

          'evaluate': function(scope) {
            return ['\n                    Address: ', scope.state.item.address].join('');
          }
        }, {
          'type': expressionTypes.TEXT,
          'childNodeIndex': 10,

          'evaluate': function(scope) {
            return ['\n                    Balance: ', scope.state.item.balance].join('');
          }
        }]
      }, {
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,

        'template': template('<a expr80 class="ml-1"><!----></a><span expr81></span>', [{
          'redundantAttribute': 'expr80',
          'selector': '[expr80]',

          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,

            'evaluate': function(scope) {
              return scope.friend.name;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'href',

            'evaluate': function(scope) {
              return ['/#/list/', scope.friend.id].join('');
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return ()=>scope.service.pushBreadcrumb(scope.friend.name,scope.friend.id);
            }
          }]
        }, {
          'type': bindingTypes.IF,

          'evaluate': function(scope) {
            return scope.state.item.friends.length-1 != scope.index;
          },

          'redundantAttribute': 'expr81',
          'selector': '[expr81]',
          'template': template(',', [])
        }]),

        'redundantAttribute': 'expr79',
        'selector': '[expr79]',
        'itemName': 'friend',
        'indexName': 'index',

        'evaluate': function(scope) {
          return scope.state.item.friends;
        }
      }, {
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,

        'template': template('<!---->', [{
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,

            'evaluate': function(scope) {
              return scope.tag;
            }
          }]
        }]),

        'redundantAttribute': 'expr82',
        'selector': '[expr82]',
        'itemName': 'tag',
        'indexName': null,

        'evaluate': function(scope) {
          return scope.state.item.tags;
        }
      }]
    );
  },

  'name': 'page-details'
});

riot.register('page-settings',{
  'css': null,
  'exports': {},

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Settings</h1></div><div class="row"><div class="col-lg-6 mb-4"><div class="card shadow mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">Score</h6></div><div class="card-body"><h4 class="small font-weight-bold">Criteria A <span class="float-right">20%</span></h4><div class="progress mb-4"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div><h4 class="small font-weight-bold">Criteria B <span class="float-right">40%</span></h4><div class="progress mb-4"><div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div><h4 class="small font-weight-bold">Criteria C <span class="float-right">60%</span></h4><div class="progress mb-4"><div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div></div><h4 class="small font-weight-bold">Criteria D <span class="float-right">80%</span></h4><div class="progress mb-4"><div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div><h4 class="small font-weight-bold">Criteria E <span class="float-right">100%</span></h4><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div><div class="col-lg-6 mb-4"><div class="card shadow mb-4"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">About</h6></div><div class="card-body"><div class="text-center"><img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="https://picsum.photos/300/180" alt/></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus ipsum sed magna suscipit,\n                        sit amet malesuada arcu pulvinar. Nullam euismod egestas felis, at tincidunt ligula. Praesent\n                        commodo sem non orci molestie laoreet eget sit amet ante. Mauris eget erat varius, pretium purus\n                        eu, ultricies neque. Integer vel viverra mi, eget elementum diam. Aliquam blandit tempor\n                        eleifend. </p><a target="_blank" rel="nofollow" href="http://riot.js.org">More Details →</a></div></div></div></div>',
      []
    );
  },

  'name': 'page-settings'
});