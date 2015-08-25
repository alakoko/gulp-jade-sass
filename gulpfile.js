var gulp = require('gulp');
var jade = require('gulp-jade'); //Jade -> HTML
var sass = require('gulp-sass');

// gulp.task('업무이름', 업무를 처리할 함수);

//Jade -> HTML

gulp.task('default', ['jade', 'sass', 'watch']);

gulp.task('jade', function  () {
	gulp.src('src/index.jade')
		.pipe(jade({pretty:true}))
		.pipe(gulp.dest('dist'));
})
gulp.task('sass', function  () {
	gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/scss'));
})
gulp.task('watch', function  () {
	gulp.watch(['src/index.jade'], ['jade']);
	gulp.watch(['src/sass/style.scss'], ['sass']);

})

// gulp.task('show:food', function  () {
// 	console.log('show me the FOOD');
// });

// gulp.task('eat:food', function  () {
// 	console.log('eating the FOOD');
// });

// gulp.task('play-game', function  () {
// 	console.log('play the Game!');
// });