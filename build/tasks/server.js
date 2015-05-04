var gulp = require('gulp');
var config = require('../config');
var modRewrite = require('connect-modrewrite');
var express = require('express');
var path = require('path');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// This task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:[port]
//var url = require('url');
//var proxy = require('proxy-middleware');

gulp.task('browser-sync', ['build:dev'], function(done) {
  var files = [
    './public/index.html',
    './public/app.html',
    './public/app.js',
    './public/views/**/*.html',
    './public/views/**/*.js',
    './public/css/*.css',
    './public/img/**/*.jpg',
    './public/img/**/*.png',
    './public/img/**/*.gif'
  ];

  browserSync.instance = browserSync.init(files, {
    open: false,
    port: config.port.dev,
    server: {
      startPath: '/',
      baseDir: config.path.dist.dir,
      index: config.index,
      routes: {
        '/common': config.path.common.dir
      },
      middleware: [
        function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        },
        modRewrite([
          '^[^\\.]*$ /' + config.index + ' [L]'
        ])
      ]
    }
  }, done);
});

// Outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// This task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('default', ['browser-sync'], function() {
  gulp.watch(config.path.src.js, ['js:dev']).on('change', reportChange);
  gulp.watch(config.path.src.html, ['html:dev']).on('change', reportChange);
  gulp.watch(config.path.src.less, ['css:dev']).on('change', reportChange);
  gulp.watch(config.path.src.img, ['img:dev']).on('change', reportChange);
  gulp.watch(config.path.src.fonts, ['fonts:dev']).on('change', reportChange);
});

// Run express server
gulp.task('release', ['build:release'], function() {
  var app = express();
  var server = require('http').Server(app);

  app.use('/common', express.static(path.resolve(config.path.common.dir)));
  app.use(express.static(path.resolve(config.path.dist.dir)));

  app.use('/*', function(req, res) {
    res.sendFile(path.resolve(config.path.dist.dir + '/' + config.index));
  });

  server.listen(config.port.release, function() {
    console.log('---------------------------------------');
    console.log('Local: http://localhost:%d', server.address().port);
    console.log('---------------------------------------');
  });
});