'use strict';

import gulp from 'gulp';
import config from '../config';
import path from 'path';
import express from 'express';
import compiler from 'express-compile';

gulp.task('server:dev', (done) => {
  let app = express();
  let server = require('http').Server(app);
  let port = process.env.PORT || config.port.dev;

  // Aliases
  app.use('/' + config.path.common.dir, express.static(__dirname + '/../../' +  config.path.common.dir));

  // Static file route
  app.use(express.static(path.resolve(config.path.src.dir)));

  // Compile ES6 files
  app.use('*.js', compiler({
    root: config.path.src.dir,
    paths: [config.path.src.js.files],
    compilerOpts: {
      js: config.babel
    }
  }));

  // Dynamic SPA route
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(config.path.src.dir + '/' + config.path.src.html.index));
  });

  // Run server on default port
  server
    .listen(port, function () {
      console.info('---------------------------------------');
      console.info('Local: http://localhost:%d', server.address().port);
      console.info('---------------------------------------');
      done();
    })
    .on('error', function (error) {
      console.info('Server error:', error.message);
    });
});

gulp.task('server:release', (done) => {
  let app = express();
  let server = require('http').Server(app);
  let port = process.env.PORT || config.port.release;

  // Static file route
  app.use(express.static(path.resolve(config.path.dist.dir)));

  // Dynamic SPA route
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(config.path.dist.dir + '/' + config.path.src.html.index));
  });

  // Run server on default port
  server
    .listen(port, function () {
      console.info('---------------------------------------');
      console.info('Local: http://localhost:%d', server.address().port);
      console.info('---------------------------------------');
      done();
    })
    .on('error', function (error) {
      console.info('Server error:', error.message);
    });
});