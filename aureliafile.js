var cli = require('aurelia-cli');

var config = {
  packagePath : '.',
  js: {
    "dist/app": {
      modules: [
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'main',
        'views/**/*'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  },

  template: {
    "dist/app": {
      pattern: 'dist/views/**/*.html',
      options: {
        inject: true
      }
    }
  }
};

cli.command('bundle', config);
cli.command('unbundle', config);
