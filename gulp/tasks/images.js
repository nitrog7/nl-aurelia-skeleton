'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';

gulp.task('img:release', () => {
  return gulp.src(config.path.src.img.files, {base:'src/'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.dir));
});