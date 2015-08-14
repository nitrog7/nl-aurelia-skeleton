'use strict';

import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import karma from 'karma';
import eslint from 'gulp-eslint';

// Tests
// Run all javascript tests
gulp.task('test', ['js:karma']);

gulp.task('js:karma', (done) => {
    let Server = karma.Server;
    new Server(config.karma, function(karmaExitStatus) {
        if(karmaExitStatus) {
            process.exit(1);
        }

        done();
    }).start();
});

// Verification
// Run all test/verification tasks
gulp.task('verify', ['js:karma', 'js:hint']);

gulp.task('js:hint', () => {
    return gulp.src(config.path.src.js.files)
      .pipe(plumber())
      .pipe(eslint.format());
});