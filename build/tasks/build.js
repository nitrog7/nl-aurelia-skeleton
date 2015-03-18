var gulp = require('gulp');
var runSequence = require('run-sequence');

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence

// Development Build:
gulp.task('build:dev', function(callback) {
  return runSequence(
    'clean',
    [
      'config:copy',
      'js:dev',
      'css:dev',
      'html:dev'
    ],
    callback
  );
});

// Production Build:
gulp.task('build:prod', function(callback) {
  return runSequence(
    'clean',
    [
      'config:copy',
      'js:prod',
      'css:prod',
      'html:prod'
    ],
    callback
  );
});
