import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import image from 'gulp-image';

gulp.task('img:release', () => {
  return gulp.src(config.path.src.img.files, {base:'src/'})
    .pipe(plumber({errorHandler: util.log}))
    .pipe(image())
    .pipe(gulp.dest(config.directories.dist));
});