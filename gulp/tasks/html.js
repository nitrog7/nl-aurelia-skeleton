'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import htmlhint from 'gulp-htmlhint';
import minify from 'gulp-htmlmin';

// HTML
gulp.task('html:dev', () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Save
    .pipe(gulp.dest(config.path.dev.templates));
});

gulp.task('html:watch', ['html:dev'], () => {
  gulp.watch(config.path.src.html.files, ['html:dev']);
});

gulp.task('html:release', () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Minify and strip comments
    .pipe(minify(config.htmlmin))
    // Save
    .pipe(gulp.dest(config.path.dist.templates));
});