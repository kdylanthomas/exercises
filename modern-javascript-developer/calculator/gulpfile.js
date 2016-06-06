var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('spec/CalcSpec.js', ['jasmine']);
});

gulp.task('jasmine', function() {
	gulp.src('spec/CalcSpec.js')
		// gulp-jasmine works on filepaths so you can't have any plugins before it
		.pipe(jasmine());
});
