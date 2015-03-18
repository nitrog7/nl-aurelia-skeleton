var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Images

gulp.task('images:dev', function() {
  return gulp.src(config.path.src.img)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.img))
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('images:release', function() {
  return gulp.src(config.path.src.img)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.path.dist.dir));
});