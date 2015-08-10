'use strict';

import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import runSequence from 'run-sequence';

const argv = util.env;

let ENV = !!argv.env ? argv.env : 'DEV';

// Start a server and run js/css build and test watchers
gulp.task('default', (done) => {
  switch (ENV) {
    case 'DEV':
    case 'dev':
    case 'TEST':
    case 'test':
      return runDevelopment(done);
      break;
    case 'PROD':
    case 'prod':
    case TEST_OPTIMIZE:
      return runRelease(done);
      break;
  }
});

// Development Build:
gulp.task('dev', (done) => {
  return runDevelopment(done);
});

var runDevelopment = (done) => {
  return runSequence('clean:dist',
    [
      'config',
      'html:watch',
      'img:dev',
      'js:watch',
      'css:watch'
    ],
    'js:bundle',
    'js:copy',
    'clean:tmp',
    'server',
    done);
};

// Release Build:
gulp.task('release', (done) => {
  return runRelease(done);
});

var runRelease = (done) => {
  return runSequence('clean:dist',
    [
      'config',
      'html:release',
      'img:release',
      'js:release',
      'css:release'
    ],
    'js:bundle',
    'js:copy',
    'clean:tmp',
    'server',
    done);
};