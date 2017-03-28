'use strict';
 
var gulp = require('gulp'),
 	browserSync = require('browser-sync'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
 return  gulp.src('./src/sass/style.scss')
 	.pipe(sass({
 		includePaths:['./node_modules/']
 	}))
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
    	stream: true
    }));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('html', function () {
 return  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
        stream: true
    }))
    ;
});

gulp.task('html:watch', function () {
 return  gulp.watch('./src/*.html',['html']);
});

gulp.task('script', function () {
 return  gulp.src('./src/scripts/**/*.js')
 	.pipe(gulp.dest('./dist/scripts/'))
    .pipe(browserSync.reload({
    	stream: true
    }))
    ;
});

gulp.task('script:watch', function () {
 return  gulp.watch('src/scripts/*.js', ['script']);
});

gulp.task('browser-sync', ['html','sass', 'script'], function() {
    browserSync.init({
        server: {baseDir: "./dist/"},
        notify: true
    });
});

gulp.task('images', function(){
  gulp.src('./src/img/**/*')
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('fonts', function(){
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('default',['browser-sync', 'sass:watch', 'html:watch', 'script:watch', 'images', 'fonts']);


