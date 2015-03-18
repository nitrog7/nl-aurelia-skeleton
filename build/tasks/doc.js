var gulp = require('gulp');
var config = require('../config');
var tools = require('aurelia-tools');
var yuidoc = require('gulp-yuidoc');

// uses yui to generate documentation to doc/api.json
gulp.task('doc-generate', function(){
  return gulp.src(config.path.src.js)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(gulp.dest(config.path.doc));
});

// takes output of doc-generate task
// and cleans it up for use with aurelia
// documentation app
gulp.task('doc', ['doc-generate'], function(){
  tools.transformAPIModel(config.path.doc);
});
