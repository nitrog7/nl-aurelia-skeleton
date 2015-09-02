var cli = require('aurelia-cli');

var config = {
  packagePath : '.',
  js: {
    "dist/core": {
      modules: [
        'core-js',
        'polymer/mutationobservers',
        'webcomponentsjs',
        'github:webcomponents/webcomponentsjs@0.6.3/HTMLImports.min',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'fetch',
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
    "dist/core": {
      pattern: 'dist/views/**/*.html',
      options: {
        inject: false
      }
    }
  }
};

cli.command('bundle', config);
cli.command('unbundle', config);
