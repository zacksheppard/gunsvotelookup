var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var paths = {
  'templates': 'templates/*.hbs'
};

gulp.task('templates', function(){
  return gulp.src(paths.templates)
		.pipe(handlebars())
    .pipe(rename({extname: '.html'}))
		.pipe(gulp.dest('dist/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  return gulp.watch(paths.templates, ['templates']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'templates']);
