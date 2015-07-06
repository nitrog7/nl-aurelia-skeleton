var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Images

gulp.task('img:dev', function() {
  return gulp.src(config.path.src.img.dir)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.dist.dir))
    .pipe(gulp.dest(config.path.dist.img));
});

gulp.task('img:release', function() {
  return gulp.src(config.path.src.img.dir)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.path.dist.img));
});

// Copy images
gulp.task('img:copy', function() {
  return gulp.src(config.path.src.img.copy)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.dist.img))
    .pipe(gulp.dest(config.path.dist.img));
});