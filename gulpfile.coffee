# gulpfile.coffee: build script for front assets
#
# gulp        - build assets
# gulp watch  - build assets continuously

sources =
  main:     'sources/js/boot.js'
  js:       'sources/js/**/*.js'
  css:      'sources/css/**/*.css'
  static:   ['sources/static/**/*']

dist =
  deploy:   'public/dist'

del         = require 'del'
gulp        = require 'gulp'
gutil       = require 'gulp-util'
concat      = require 'gulp-concat'
coffee      = require 'gulp-coffee'
plumber     = require 'gulp-plumber'
uglify      = require 'gulp-uglify'
streamify   = require 'gulp-streamify'
cleanCSS    = require 'gulp-clean-css'
source      = require 'vinyl-source-stream'
buffer      = require 'vinyl-buffer'
browserify  = require 'browserify'
babelify    = require 'babelify'

gulp.task 'default', ['clean'], ->
  gulp.start 'compile:js', 'compile:css', 'compile:static'

gulp.task 'clean', (cb) ->
  del dist.deploy, {force:true}, cb

gulp.task 'watch', ->
  gulp.watch sources.js,     ['compile:js']
  gulp.watch sources.css,    ['compile:css']
  gulp.watch sources.static, ['compile:static']


gulp.task 'compile:js', ->
  browserify sources.main
    .transform babelify, {presets: ['es2015', 'react']}
    .bundle()
    .on 'error', (err) ->
      console.log gutil.colors.red "Oops! you have ERROR! \n" + err.message
      this.emit 'end'
    .pipe source "app.js"
    #.pipe buffer()
    #.pipe uglify()
    .pipe gulp.dest dist.deploy

gulp.task 'compile:css', ->
  gulp.src sources.css
    .pipe plumber()
    .pipe concat 'app.css'
    .pipe cleanCSS {compatibility: 'ie8'}
    .pipe gulp.dest dist.deploy

gulp.task 'compile:static', ->
  gulp.src sources.static
    .pipe gulp.dest dist.deploy