var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');

var paths = {
  'handlebars': 'handlebars/*.hbs'
};

gulp.task('handlebars', function(){
  return gulp.src(paths.handlebars)
		.pipe(handlebars())
    .pipe(rename({extname: '.html'}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('webpack', function() {
  return gulp.src('./jsx/app.jsx')
    .pipe(webpack({
      output: {
       filename: "app.js"
      },
      watch: true,
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=react,presets[]=es2015'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/assets/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  return gulp.watch(paths.templates, ['handlebars']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'handlebars', 'webpack']);
