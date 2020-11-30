const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer'),
    rename = require('gulp-rename')
; 

function js () {
    return  browserify('scripts/fetch.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('static/dist/main.js'));
}

function css (){
    return gulp.src('styles/style.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('static/dist/'));
}

function watch () {
    gulp.watch('/scripts/*.js', js); 
    gulp.watch('/styles/*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;	