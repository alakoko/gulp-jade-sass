var gulp        = require('gulp'),
	jade        = require('gulp-jade'),
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload;

/**
 * --------------------------------
 * 환경설정
 * --------------------------------
 */
var config = {
	'jade': { 'pretty': true },
	'sass': {
		'outputStyle': 'compact' // compact, compressed, nested, expanded
	}
};

/**
 * --------------------------------
 * Gulp 업무
 * --------------------------------
 */
// 기본 업무
gulp.task('default', ['jade', 'sass'], function() {
	browserSync({'server': './dist'})
	gulp.start('watch');
});


// 관찰 업무
gulp.task('watch', function() {
	gulp.watch(['src/**/*.jade'], ['watch:jade']);
	gulp.watch(['src/sass/**/*.scss'], ['sass']);
});

gulp.task('watch:jade', ['jade'], reload);


// 변경 업무: Jade → HTML
gulp.task('jade', function() {
	return gulp.src('src/**/*.jade')
		.pipe( jade( config.jade ) )
		.on('error', errorLog)
		.pipe( gulp.dest('dist') );
});


// 변경 업무: Sass → Css
gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe( sass( config.sass ).on('error', sass.logError) )
		.pipe( gulp.dest('dist/css') )
		.pipe( reload({stream: true}) );
});


/**
 * --------------------------------
 * 유틸리티
 * --------------------------------
 */
// 오류 출력을 위한 errorLog 함수
// 오류 발생 시에도 watch 업무 중단하지 않음.
function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}