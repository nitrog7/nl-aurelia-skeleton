var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');

// Fonts
gulp.task('fonts:dev', function() {
  return gulp.src(config.path.src.fonts)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.dist.dir))
    .pipe(gulp.dest(config.path.dist.fonts));
});

gulp.task('fonts:release', function() {
  return gulp.src(config.path.src.fonts)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.fonts));
});