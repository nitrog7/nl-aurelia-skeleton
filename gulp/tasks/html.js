'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import htmlhint from 'gulp-htmlhint';
import minify from 'gulp-htmlmin';
import inject from 'gulp-inject';
import injectString from 'gulp-inject-string';

// HTML
gulp.task('html:dev', ['template:dev'], () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    // Only get newer files
    .pipe(newer(config.path.dist.dir))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Save
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('template:dev', () => {
  return gulp.src(config.path.src.html.templates)
    .pipe(plumber({errorHandler: config.onError}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Save
    .pipe(gulp.dest(config.path.dist.templates));
});

gulp.task('html:watch', ['html:dev'], () => {
  gulp.watch(config.path.src.html.files, ['html:dev']);
});

gulp.task('html:release', ['template:release'], () => {
  return gulp.src(config.path.src.html.files)
    .pipe(plumber({errorHandler: config.onError}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Inject bundle into index.html
    .pipe(injectString.after('<!-- inject:bundle -->', '<link aurelia-view-bundle rel="import" href="./' + config.bundle.name + '.html" />'))
    // Minify and strip comments
    .pipe(minify(config.htmlmin))
    // Save
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('template:release', () => {
  return gulp.src(config.path.src.html.templates)
    .pipe(plumber({errorHandler: config.onError}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Minify and strip comments
    .pipe(minify(config.htmlmin))
    // Save
    .pipe(gulp.dest(config.path.dist.templates));
});