'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import config from '../config';
import changelog from 'conventional-changelog';
import fs from 'fs';
import bump from 'gulp-bump';
import yargs from 'yargs';

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', function(){
  let argv = yargs.argv;
  let validBumpTypes = "major|minor|patch|prerelease".split("|");
  let bump = (argv.bump || 'patch').toLowerCase();

  if(validBumpTypes.indexOf(bump) === -1) {
    throw new Error('Unrecognized bump "' + bump + '".');
  }

  return gulp.src(['./package.json'])
    .pipe(bump({type:bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

// generates the CHANGELOG.md file based on commit
// from git commit messages
gulp.task('changelog', function(callback) {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: config.path.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(config.path.doc + '/CHANGELOG.md', log);
  });
});

// calls the listed sequence of tasks in order
gulp.task('prepare-release', function(callback){
  return runSequence(
    'build:prod',
    'js:lint',
    'bump-version',
    'doc',
    'changelog',
    callback
  );
});
