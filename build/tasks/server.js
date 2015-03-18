var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
var modRewrite = require('connect-modrewrite');
var express = require('express');
var path = require('path');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:[port]
gulp.task('server:dev', ['build:dev'], function(done) {
  browserSync({
    open: false,
    port: config.port,
    server: {
      baseDir: config.path.dist.dir,
      index: config.index,
      routes: {
        '/common': config.path.common.dir
      },
      middleware: [
        function (req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        },
        modRewrite([
          '!\\.\\w+$ /' + config.index + ' [L]'
        ])
      ]
    }
  }, done);
});

// run express server
gulp.task('server:prod', ['build:prod'], function() {
  var app = express();
  var server = require('http').Server(app);

  app.use('/common', express.static(path.resolve(config.path.common.dir)));
  app.use(express.static(path.resolve(config.path.dist.dir)));

  app.use('/*', function(req, res){
    res.sendFile(path.resolve(config.path.dist.dir + '/' + config.index));
  });

  server.listen(config.port, function() {
    console.log('Listening on port %d', server.address().port);
  });
});