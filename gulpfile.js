const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
// const concat = require('gulp-concat');

function css() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(dest('css/build'))
}

function cssmin() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('css'))
   
}


exports.css = css;
exports.css = cssmin;
exports.default = parallel(css,cssmin);

          