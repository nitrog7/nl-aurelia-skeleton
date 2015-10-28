'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import assign from 'object.assign';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';

gulp.task('js:release', function () {
  return gulp.src(config.path.src.js.files)
    .pipe(plumber())
    .pipe(eslint(config.eslint))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(sourcemaps.init())
    .pipe(babel(assign({}, config.babel, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.path.root}))
    .pipe(uglify())
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('js:copy:release', ['js:copy:common'], () => {
  return gulp.src(config.path.src.config)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('js:copy:common', () => {
  return gulp.src(config.path.common.files, {base:'.'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.dir));
});
