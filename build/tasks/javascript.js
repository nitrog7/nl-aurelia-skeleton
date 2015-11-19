import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import assign from 'object.assign';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';

gulp.task('js:release', function () {
  return gulp.src([
      config.path.src.js,
      '!' + config.relative(config.directories.src, config.filenames.config)
    ])
    .pipe(plumber({errorHandler: util.log}))
    .pipe(eslint(config.eslint))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel(assign({}, config.babel, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.path.root}))
    .pipe(uglify())
    .pipe(gulp.dest(config.directories.dist));
});

gulp.task('js:copy:release', ['js:copy:common'], () => {
  return gulp.src(config.absolute(config.directories.src, config.filenames.config))
    .pipe(plumber({errorHandler: util.log}))
    .pipe(gulp.dest(config.directories.dist));
});

gulp.task('js:copy:common', () => {
  return gulp.src(config.path.common.files, {base:'.'})
    .pipe(plumber({errorHandler: util.log}))
    .pipe(gulp.dest(config.directories.dist));
});
