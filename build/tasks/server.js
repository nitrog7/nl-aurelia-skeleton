import gulp from 'gulp';
import util from 'gulp-util';
import config from '../config';
import express from 'express';
import compiler from 'express-compile';

gulp.task('server:dev', (done) => {
  let app = express();
  let server = require('http').Server(app);
  let port = process.env.PORT || config.port.dev;

  // Aliases
  app.use('/' + config.directories.common, express.static(__dirname + '/../../' + config.directories.common));

  // Static file route
  app.use(express.static(config.absolute(config.directories.src)));

  // Compile ES6 files
  app.use('*.js', compiler({
    root: config.directories.src,
    paths: [config.path.src.js.files],
    compilerOpts: {
      js: config.babel
    }
  }));

  // Dynamic SPA route
  app.use('*', (req, res) => {
    res.sendFile(config.absolute(config.directories.src, config.filenames.index));
  });

  // Run server on default port
  server
    .listen(port, function() {
      util.log('---------------------------------------');
      util.log('Local: http://localhost:%d', server.address().port);
      util.log('---------------------------------------');
      done();
    })
    .on('error', function(error) {
      util.log('[express]', error.message);
    });
});

gulp.task('server:release', (done) => {
  let app = express();
  let server = require('http').Server(app);
  let port = process.env.PORT || config.port.release;

  // Static file route
  app.use(express.static(config.absolute(config.directories.dist)));

  // Dynamic SPA route
  app.use('*', (req, res) => {
    res.sendFile(config.absolute(config.directories.dist, config.filenames.index));
  });

  // Run server on default port
  server
    .listen(port, function() {
      util.log('---------------------------------------');
      util.log('Local: http://localhost:%d', server.address().port);
      util.log('---------------------------------------');
      done();
    })
    .on('error', function(error) {
      util.log('[express]', error.message);
    });
});