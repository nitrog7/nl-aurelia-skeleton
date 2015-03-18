'use strict';

import {Router} from 'aurelia-router';

export class ChildRouter{
  static inject() { return [Router]; }
  constructor(router){
    this.heading = 'Child Router';
    this.router = router;
    router.configure(config => {
      config.map([
        { route: ['','welcome'],  moduleId: 'index/welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'index/flickr',       nav: true },
        { route: 'child-router',  moduleId: 'index/child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}