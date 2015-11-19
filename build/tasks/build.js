import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import runSequence from 'run-sequence';

// Start a server and run js/css build and test watchers

// Development Build:
gulp.task('default', (done) => {
  return runSequence(
    'clean:dev',
    [
      'css:watch'
    ],
    'server:dev',
    done);
});

gulp.task('dev', ['default']);

// Compile
gulp.task('compile', [], (done) => {
  return runSequence(
    'clean:release',
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

// Release Build:
gulp.task('release', (done) => {
  return runSequence(
    'compile',
    'server:release',
    done);
});

gulp.task('release:server', (done) => {
  return runSequence('server:production', done);
});
