/// <binding BeforeBuild='default' AfterBuild='default' />
var gulp = require('gulp');
const { src, dest } = require('gulp');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");

//gulp.task('minify', function () {
//    return gulp.src("wwwroot/js/**/*.js")
//        .pipe(uglify())
//        .pipe(concat("dutchtreat.min.js"))
//        .pipe(gulp.dest("wwwroot/dist"));
//});

function minify() {
    return src("wwwroot/js/**/*.js")
        .pipe(uglify())
        .pipe(concat("dutchtreat.min.js"))
        .pipe(dest("wwwroot/dist"));
}

exports.default = minify;
//gulp.task('default', ["minify"]);
