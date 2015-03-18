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
      'html:dev',
      'img:dev'
    ],
    callback
  );
});

// Release Build:
gulp.task('build:release', function(callback) {
  return runSequence(
    'clean',
    [
      'config:copy',
      'js:release',
      'css:release',
      'html:release',
      'img:release'
    ],
    callback
  );
});
