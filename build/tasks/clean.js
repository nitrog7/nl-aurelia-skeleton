import gulp from 'gulp';
import config from '../config';
import del from 'del';
import vinylPaths from 'vinyl-paths';

// Deletes all files in the output path
gulp.task('clean:dev', ['app:unbundle'], () => {
  return gulp.src(config.path.src.clean, { dot: true, read: false })
    .pipe(vinylPaths(del));
});

gulp.task('clean:release',  () => {
  return gulp.src([
    config.relative(config.directories.dist, '*')
  ], { dot: true, read: false })
    .pipe(vinylPaths(del));
});

gulp.task('clean:tmp', () => {
  return gulp.src(config.path.dist.clean)
    .pipe(vinylPaths(del));
});