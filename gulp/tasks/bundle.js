'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import {bundle, unbundle} from 'aurelia-bundler';
import replace from 'gulp-replace';

gulp.task('app:bundle', function() {
  return bundle(config.bundle);
});

gulp.task('app:unbundle', function() {
  return unbundle(config.bundle);
});

gulp.task('app:config:release', () => {
  return gulp.src(config.path.src.config)
    .pipe(plumber({errorHandler: config.onError}))
    // Remove dist
    .pipe(replace('"*": "dist/*",', ' '))
    // Save
    .pipe(gulp.dest(config.path.dist.dir));
});
