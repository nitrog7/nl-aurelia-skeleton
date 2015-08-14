'use strict';

import gulp from 'gulp';
import config from '../config';
import tools from 'aurelia-tools';
import yuidoc from 'gulp-yuidoc';

// takes output of doc-generate task
// and cleans it up for use with aurelia
// documentation app
gulp.task('doc', ['doc-generate'], () => {
  tools.transformAPIModel(config.path.doc);
});

// uses yui to generate documentation to doc/api.json
gulp.task('doc-generate', () => {
  return gulp.src(config.path.src.js)
    .pipe(yuidoc.parser(config.yuidoc.parser, 'api.json'))
    .pipe(yuidoc.reporter())
    .pipe(yuidoc.generator(config.yuidoc.render))
    .pipe(gulp.dest(config.path.doc));
});
