var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglifyjs'),
	cssnano			= require('gulp-cssnano'),
	rename			= require('gulp-rename'),
	del				= require('del'),
	imagemin		= require('gulp-imagemin'),
	pngquant		= require('imagemin-pngquant'),
	autoprefixer	= require('gulp-autoprefixer');
	minifyJs		= require('gulp-minify');

gulp.task('default', ['watch'], function() {})

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 2 versions', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src([
		'app/csslibs/*.css'
	])
	.pipe(concat('libs.min.css'))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
	var buildCss = gulp.src('app/css/*.css')
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*.js')
	.pipe(minifyJs({
			ext: {
				src:'-debug.js',
				min: '.js'
			},
			ignoreFiles: ['libs.min.js']
		}))
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});