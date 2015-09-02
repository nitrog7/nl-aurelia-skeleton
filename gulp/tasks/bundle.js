'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import shell from 'gulp-shell';
import replace from 'gulp-replace';

gulp.task('app:bundle', shell.task([
  'aurelia bundle --force'
]));

gulp.task('app:unbundle', shell.task([
  'aurelia unbundle'
]));

gulp.task('app:config:dev', () => {
  return gulp.src(config.path.src.config)
    .pipe(plumber({errorHandler: config.onError}))
    // Remove dist
    .pipe(replace('"*": "dist/*",', ' '))
    // Save
    .pipe(gulp.dest(config.path.dev.dir));
});


gulp.task('app:config:release', () => {
  return gulp.src(config.path.src.config)
    .pipe(plumber({errorHandler: config.onError}))
    // Remove dist
    .pipe(replace('"*": "dist/*",', ' '))
    // Save
    .pipe(gulp.dest(config.path.dist.dir));
});
