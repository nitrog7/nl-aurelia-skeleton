import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import htmlhint from 'gulp-htmlhint';
import minify from 'gulp-htmlmin';

// HTML
gulp.task('html:release', () => {
  return gulp.src(config.path.src.html)
    .pipe(plumber({errorHandler: util.log}))
    // HTML Hint
    .pipe(htmlhint(config.htmlhint))
    .pipe(htmlhint.reporter())
    // Minify and strip comments
    .pipe(minify(config.htmlmin))
    // Save
    .pipe(gulp.dest(config.directories.dist));
});