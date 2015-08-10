'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

// Images
gulp.task('img:dev', () => {
  return gulp.src(config.path.src.img.files)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(newer(config.path.dist.img))
    .pipe(gulp.dest(config.path.dist.img));
});

gulp.task('img:release', () => {
  return gulp.src(config.path.src.img.files)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.path.dist.img));
});