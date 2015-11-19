import gulp from 'gulp';
import util from 'gulp-util';
import config from '../config';
import appPackage from '../../package.json';

const version = appPackage.version;
const app = express();
const server = require('http').Server(app);

// Express
import express from 'express';
import compiler from 'express-compile';
import history from 'connect-history-api-fallback';
import bodyParser from 'body-parser';

// Falcor
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import router from '../../model/router';

gulp.task('server:dev', (done) => {
  let port = config.port.dev;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(history());

  console.log('common', config.absolute(config.directories.common));
  // Aliases
  app.use('/' + config.directories.common, express.static(config.absolute(config.directories.common)));

  // Static files
  app.use(express.static(config.absolute(config.directories.src)));

  // Falcor route
  app.use('/' + config.falcor.endpoint, falcorExpress.dataSourceRoute((req, res) => {
    return new router('FAKE_USER_SESSION_KEY');
  }));

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
  let port = config.port.release;

  // Static file route
  app.use(express.static(config.absolute(config.directories.dist)));

  // Falcor route
  app.use('/' + config.falcor.endpoint, falcorExpress.dataSourceRoute((req, res) => {
    return new router('FAKE_USER_SESSION_KEY');
  }));

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