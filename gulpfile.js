'use strict';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('build-css', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    gulp.watch('./sass/**/*.scss', gulp.series('build-css'));
});