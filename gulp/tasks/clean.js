'use strict';

import gulp from 'gulp';
import config from '../config';
import del from 'del';
import vinylPaths from 'vinyl-paths';

// Deletes all files in the output path
gulp.task('clean:dist', () => {
  return gulp.src([
    config.path.dist.dir+'/*',
    '!'+config.path.dist.config
  ], { dot: true })
    .pipe(vinylPaths(del));
});

gulp.task('clean:tmp', () => {
  return gulp.src(config.path.clean)
    .pipe(vinylPaths(del));
});