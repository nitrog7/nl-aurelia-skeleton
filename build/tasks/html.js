var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var htmlhint = require('gulp-htmlhint');
var minifyHTML = require('gulp-minify-html');

// HTML
// copies changed html files to the output directory
gulp.task('html:dev', function() {
  return gulp.src(config.path.src.html)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.src.html, {extension: '.html'}))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('html:release', function() {
  return gulp.src(config.path.src.html)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(minifyHTML({conditional: true}))
    .pipe(gulp.dest(config.path.dist.dir));
});