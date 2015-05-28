'use strict';

var gulp = require('gulp');
var chalk = require('chalk');
var plumber = require('gulp-plumber');

var jsPath = [
  'app/**/*.js',
  'assets/js/**/*.js',
  'server.js',
  'Gulpfile.js'
];

gulp.task('dev', function() {
  var nodemon = require('gulp-nodemon');
  nodemon({
    script: 'server.js',
    watch: ['app/**/*.js', 'Gulpfile.js'],
    ignore: ['node_modules/**', 'assets/**']
  }).on('restart', function() {
    console.log(chalk.blue.bold('Server restarted!'));
  });
});

gulp.task('lint', function() {
  var jshint = require('gulp-jshint');
  return gulp.src(jsPath)
          .pipe(plumber())
          .pipe(jshint())
          .pipe(jshint.reporter('jshint-stylish'))
          .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  var jscs = require('gulp-jscs');
  return gulp.src(jsPath)
          .pipe(plumber())
          .pipe(jscs());
});

gulp.task('stylus', function() {
  var stylus = require('gulp-stylus');
  var cssmin = require('gulp-minify-css');
  return gulp.src(['assets/stylus/**/*.styl'])
          .pipe(stylus({
            'include css': true
          })).pipe(cssmin({
            'keepSpecialComments': 0
          })).pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch(jsPath, ['lint', 'jscs']);
  gulp.watch(['assets/stylus/**/*.styl'], ['stylus']);
});

gulp.task('default', ['dev', 'watch']);
