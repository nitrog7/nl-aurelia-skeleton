import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: 'views/index/welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',        moduleId: 'views/index/flickr',       nav: true, title:'Flickr' },
      { route: 'child-router',  moduleId: 'views/index/child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}