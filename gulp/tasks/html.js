'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import htmlhint from 'gulp-htmlhint';
import minify from 'gulp-htmlmin';

// HTML
gulp.task('html:dev', ['template:dev'], () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(newer(config.path.dist.dir))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('template:dev', () => {
  return gulp.src(config.path.src.html.templates)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(config.path.dist.templates));
});

gulp.task('html:watch', ['html:dev'], () => {
  gulp.watch(config.path.src.html.files, ['html:dev']);
});

gulp.task('html:release', ['template:release'], () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(minify(config.htmlmin))
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('template:release', () => {
  return gulp.src(config.path.src.html.templates)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    .pipe(minify(config.htmlmin))
    .pipe(gulp.dest(config.path.dist.templates));
});