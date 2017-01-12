"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserify = require('browserify');
var del = require('del');
var assign = require('lodash.assign');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('clean', function() {
    del(['dist']);
});

gulp.task('lint', function() {
    return gulp.src(['./src/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('verify', ['lint']);

var mainBundler = browserify(assign({}, watchify.args, {
    entries: './src/dolphin-platform-angular.js',
    debug: true
}));

function rebundle(bundler) {
    return bundler
        .bundle()
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source('dolphin-platform-angular.js'))
        .pipe($.derequire())
        .pipe(gulp.dest('./dist'))
        .pipe(buffer())
        .pipe($.rename({extname: '.min.js'}))
        .pipe($.sourcemaps.init({loadMaps: true}))
        .pipe($.uglify())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}

gulp.task('build', ['clean','verify'], function() {
    return rebundle(mainBundler);
});



gulp.task('watch', function() {
    gulp.watch(['src/**'], ['lint']);

    var watchedMainBundler = watchify(mainBundler);
    watchedMainBundler.on('update', function() {rebundle(watchedMainBundler)});
});

gulp.task('default', ['verify', 'build', 'watch']);