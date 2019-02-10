const {dest, src, series} = require('gulp');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');


function babelify() {
    return src('main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist'))

}

function compress() {
    return src('dist/main.js')
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(babelify, compress);
