'use strict';

import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.options.pushState = true;
      config.map([
        { route: ['','welcome'],  moduleId: 'index/welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'index/flickr',       nav: true, title:'Flickr'  },
        { route: 'child-router',  moduleId: 'index/child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}