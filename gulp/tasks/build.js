'use strict';

import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import runSequence from 'run-sequence';

const argv = util.env;

let ENV = !!argv.env ? argv.env : 'DEV';

// Start a server and run js/css build and test watchers
gulp.task('default', (done) => {
  return runDevelopment(done);
});

// Development Build:
gulp.task('dev', (done) => {
  return runDevelopment(done);
});

var runDevelopment = (done) => {
  return runSequence('clean:dev',
    [
      'html:watch',
      'js:watch',
      'js:common',
      'css:watch',
      'img:dev'
    ],
    'app:unbundle',
    'js:copy:dev',
    'app:config:dev',
    'server:dev',
    done);
};

// Release Build:
gulp.task('release', (done) => {
  return runSequence('clean:release',
    [
      'html:release',
      'js:release',
      'css:release',
      'img:release'
    ],
    'app:bundle',
    'js:copy:release',
    'clean:tmp',
    'app:config:release',
    'server:release',
    done);
});

gulp.task('release:build', (done) => {
  return runSequence('clean:release',
    [
      'html:release',
      'js:release',
      'css:release',
      'img:release'
    ],
    'app:bundle',
    'js:copy:release',
    'clean:tmp',
    'app:config:release',
    done);
});

gulp.task('release:server', (done) => {
  return runSequence('server:production', done);
});
