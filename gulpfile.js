const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')

function comprimeimg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreinitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreinitial: false }, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', { ignoreinitial: false }, gulp.series(comprimeimg));
}