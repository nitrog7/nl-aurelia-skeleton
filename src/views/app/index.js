'use strict';

import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'views/index/welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'views/index/users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'views/index/child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
