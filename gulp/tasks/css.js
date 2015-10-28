'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import flatten from 'gulp-flatten';

gulp.task('css:dev', ['fonts:dev'], () => {
  return gulp.src(config.path.src.scss.main)
    .pipe(plumber())
    .pipe(newer(config.path.src.css))
    .pipe(sass(config.scss.dev))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.path.src.css));
});

gulp.task('fonts:dev', () => {
  return gulp.src(config.path.src.fonts.files)
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(config.path.src.fonts.dir));
});

gulp.task('css:watch', ['css:dev'], () => {
  return gulp.watch(config.path.src.scss.files, ['css:dev']);
});

gulp.task('css:release', ['fonts:release'], () => {
  return gulp.src(config.path.src.scss.main)
    .pipe(plumber())
    .pipe(sass(config.scss.release))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.path.dist.css));
});

gulp.task('fonts:release', () => {
  return gulp.src(config.path.src.fonts.files)
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(config.path.dist.fonts));
});