'use strict';

import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import inject from 'gulp-inject';
import browserSync from 'browser-sync';
import history  from 'connect-history-api-fallback';
import express from 'express';
import runSequence from 'run-sequence';
import path from 'path';

gulp.task('server:dev', (done) => {
  let files = [].concat(config.path.src.sass.files, config.path.src.img.files);

  return browserSync.instance = browserSync.init(files, {
    open: false,
    port: config.port.dev,
    ghostMode: false,
    server: {
      startPath: '/',
      excludedFileTypes: ['woff2'],
      baseDir: config.path.dist.dir,
      index: config.path.dist.index,
      routes: {
        '/common': config.path.common.dir
      },
      middleware: [history(), function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }]
    }
  }, done);
});

gulp.task('server:release', (done) => {
  var app = express();
  var server = require('http').Server(app);
  var port = process.env.PORT || config.port.release;

  // Static file route
  app.use(express.static(path.resolve(config.path.dist.dir)));

  // Dynamic SPA route
  app.use('/*', (req, res) => {
    res.sendFile(path.resolve(config.path.dist.dir + '/' + config.path.dist.index));
  });

  // Run server on default port
  server
    .listen(port, function () {
      console.log('---------------------------------------');
      console.log('Local: http://localhost:%d', server.address().port);
      console.log('---------------------------------------');
      done();
    })
    .on('error', function (error) {
      console.log('Server error:', error.message);
    });
});