'use strict';

import gulp from 'gulp';
import config from '../config';
import shell from 'gulp-shell';

gulp.task('server:dev', shell.task([
  'node --harmony debug.js'
]));

gulp.task('server:release', shell.task([
  'node --harmony release.js'
]));

gulp.task('server:production', shell.task([
  'forever start -c "node --harmony" release.js'
]));