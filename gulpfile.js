const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer'),
    rename = require('gulp-rename')
; 

function js () {
    return  browserify('scripts/main.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('static/dist/script.js'));
}

function css (){
    return gulp.src('styles/main.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('static/dist/'));
}

function watch () {
    gulp.watch('/scripts/*.js', js); 
    gulp.watch('/styles/*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;	