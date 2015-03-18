var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['server:dev'], function() {
  gulp.watch(config.path.src.js, ['js:dev', browserSync.reload]).on('change', reportChange);
  gulp.watch(config.path.src.html, ['html:dev', browserSync.reload]).on('change', reportChange);
  gulp.watch(config.path.src.less, ['css:dev', browserSync.reload]).on('change', reportChange);
});
