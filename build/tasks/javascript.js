var gulp = require('gulp');
var config = require('../config');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var assign = Object.assign || require('object.assign');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var strip = require('gulp-strip-comments');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('js:dev', function() {
  return gulp.src(config.path.src.js)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.dist.dir, {extension: '.js'}))
    .pipe(jshint({lookup:true}))
    .pipe(jshint.reporter(stylish))
    .pipe(sourcemaps.init())
    .pipe(babel(assign({}, config.babel, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.path.root }))
    .pipe(gulp.dest(config.path.dist.dir));
});

gulp.task('js:release', function() {
  return gulp.src(config.path.src.js)
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(jshint({lookup:true}))
    .pipe(jshint.reporter(stylish))
    .pipe(strip())
    .pipe(sourcemaps.init())
    .pipe(babel(assign({}, config.babel, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + config.path.root }))
    .pipe(gulp.dest(config.path.dist.dir));
});

// Copy config
gulp.task('config:copy', function() {
  return gulp.src([config.path.src.config])
    .pipe(plumber({errorHandler: config.onError}))
    .pipe(changed(config.path.dist.dir))
    .pipe(gulp.dest(config.path.dist.dir));
});
