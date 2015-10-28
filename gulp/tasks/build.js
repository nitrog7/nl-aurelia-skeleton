'use strict';

import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import runSequence from 'run-sequence';

// Start a server and run js/css build and test watchers

// Development Build:
gulp.task('default', (done) => {
  return runSequence('clean:dev',
    [
      'css:watch'
    ],
    'app:unbundle',
    'server:dev',
    done);
});

gulp.task('dev', ['default'], () => {});


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
    'server:release',
    done);
});

gulp.task('release:build', [], (done) => {
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
    done);
});

gulp.task('release:server', (done) => {
  return runSequence('server:production', done);
});
