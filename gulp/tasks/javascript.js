'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import assign from 'object.assign';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import symlink from 'gulp-symlink';

gulp.task('js:dev', () => {
  return gulp.src(config.path.src.js.files)
    .pipe(plumber())
    .pipe(eslint(config.eslint))
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel(assign({}, config.babel, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.path.root}))
    .pipe(gulp.dest(config.path.dev.dir));
});

gulp.task('js:copy:dev', ['js:copy:dev:base'], () => {
  return gulp.src(config.path.src.js.copy.misc, {base:'src/'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dev.dir));
});

gulp.task('js:copy:dev:base', () => {
  return gulp.src(config.path.src.js.copy.base, {base:'.'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dev.dir));
});

gulp.task('js:common', function () {
  return gulp.src('common')
    .pipe(symlink('dev/common'));
});

gulp.task('js:watch', ['js:dev'], () => {
  return gulp.watch(config.path.src.js.files, ['js:dev']);
});

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

gulp.task('js:copy:release', ['js:copy:release:base'], () => {
  return gulp.src(config.path.src.js.copy.misc, {base:'src/'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('js:copy:release:base', () => {
  return gulp.src(config.path.src.js.copy.base, {base:'.'})
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(gulp.dest(config.path.dist.dir));
});
