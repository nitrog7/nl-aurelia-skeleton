var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');

// CSS
gulp.task('css:dev', function() {
  return gulp.src(config.path.src.less)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(less())
    .pipe(autoprefix([
      'last 5 Chrome versions',
      'last 5 Firefox versions',
      'last 2 Safari versions',
      'Explorer >= 11']))
    .pipe(gulp.dest(config.path.dist.css));
});

gulp.task('css:release', function() {
  return gulp.src(config.path.src.less)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(less({compress: true}))
    .pipe(autoprefix([
      'last 5 Chrome versions',
      'last 5 Firefox versions',
      'last 2 Safari versions',
      'Explorer >= 11']))
    .pipe(gulp.dest(config.path.dist.css));
});