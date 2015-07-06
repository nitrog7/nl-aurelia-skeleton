var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');

// CSS
gulp.task('css:dev', function() {
  return gulp.src(config.path.src.lessFiles)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(less())
    .pipe(autoprefix(config.autoprefixer))
    .pipe(gulp.dest(config.path.dist.css));
});

gulp.task('css:release', function() {
  return gulp.src(config.path.src.lessFiles)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(less({compress: true}))
    .pipe(autoprefix(config.autoprefixer))
    .pipe(gulp.dest(config.path.dist.css));
});