'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import flatten from 'gulp-flatten';

gulp.task('css:dev', ['fonts:dev'], () => {
  return gulp.src(config.path.src.sass.main)
    .pipe(plumber())
    .pipe(newer(config.path.dev.css))
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: config.path.src.sass.includes
    }))
    .on('error', function (err) {
      sass.logError(err);
      this.emit('end');
    })
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.path.dev.css));
});

gulp.task('fonts:dev', () => {
  return gulp.src(config.path.src.fonts.files)
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(config.path.dev.fonts));
});

gulp.task('css:watch', ['css:dev'], () => {
  return gulp.watch(config.path.src.sass.files, ['css:dev']);
});

gulp.task('css:release', ['fonts:release'], () => {
  return gulp.src(config.path.src.sass.main)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: config.path.src.sass.includes
    }))
    .on('error', function (err) {
      sass.logError(err);
      this.emit('end');
    })
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.path.dist.css));
});

gulp.task('fonts:release', () => {
  return gulp.src(config.path.src.fonts.files)
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(config.path.dist.fonts));
});