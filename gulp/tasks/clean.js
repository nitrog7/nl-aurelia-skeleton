'use strict';

import gulp from 'gulp';
import config from '../config';
import del from 'del';
import vinylPaths from 'vinyl-paths';

// Deletes all files in the output path
gulp.task('clean:dev', () => {
  return gulp.src([
    config.path.dev.dir+'/*',
    '!'+config.path.dev.img
  ], { dot: true, read: false })
    .pipe(vinylPaths(del));
});

gulp.task('clean:release', () => {
  return gulp.src([
    config.path.dist.dir+'/*'
  ], { dot: true, read: false })
    .pipe(vinylPaths(del));
});

gulp.task('clean:tmp', () => {
  return gulp.src(config.path.clean)
    .pipe(vinylPaths(del));
});