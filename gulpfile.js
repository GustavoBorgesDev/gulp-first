var gulp = require('gulp')
var gulpCleanCss = require('gulp-clean-css') // Mimifica o Css
var gulpClearJS = require('gulp-uglify') // Mimifica o Js
var babel = require('gulp-babel');

gulp.task('css-build', function () {

    return gulp.src('assets/css/*.css')
        .pipe(gulpCleanCss())
        .pipe(gulp.dest('public/css/'))

    console.log('Mimifica Css')

})

gulp.task('js-build', function () {

    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulpClearJS())
        .pipe(gulp.dest('public/js/'))

    console.log('Mimifica o Js')
    
})


gulp.task('build', ['css-build', 'js-build'])