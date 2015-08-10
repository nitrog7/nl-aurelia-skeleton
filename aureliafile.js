var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "dist/app-bundle": {
      modules: [
        'main',
        'views/**/*',
        'aurelia-bootstrapper',
        'aurelia-http-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding@0.13.2',
        'github:aurelia/templating-resources@0.13.4',
        'github:aurelia/templating-router@0.14.1',
        'github:aurelia/loader-default@0.9.3',
        'github:aurelia/history-browser@0.6.2'
      ],
      options: {
        inject: true,
        minify: false
      }
    }
  },

  template: {
    "dist/app-bundle": {
      pattern: 'views/**/*.html',
      options: {
        inject: true,
        minify: true
      }
    }
  }
});