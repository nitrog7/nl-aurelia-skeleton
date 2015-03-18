var gulp = require('gulp');
var config = require('../config');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([config.path.dist.dir])
    .pipe(vinylPaths(del));
});
