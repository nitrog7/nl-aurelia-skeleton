import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import {bundle, unbundle} from 'aurelia-bundler';
import replace from 'gulp-replace';

gulp.task('app:bundle', function() {
  return bundle(config.bundle);
});

gulp.task('app:unbundle', function() {
  return unbundle(config.bundle);
});

gulp.task('app:config:release', () => {
  return gulp.src(config.absolute(config.directories.src, config.filenames.config))
    .pipe(plumber({errorHandler: util.log}))
    // Remove dist
    .pipe(replace('"*": "dist/*",', ' '))
    // Save
    .pipe(gulp.dest(config.directories.dist));
});
