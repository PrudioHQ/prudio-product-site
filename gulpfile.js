var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('build-css', function() {
    return gulp.src('./src/less/styles.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename({ extname: '.min.css' }))
.pipe(gulp.dest('./css'));
});

gulp.task('build-js', function() {
    return gulp.src([
            'src/js/bootstrap/bootstrap.min.js',
            'src/js/plugins/jquery.waypoints.min.js',
            'src/js/plugins/wow.js',
            'src/js/plugins/owl.carousel.js',
            'src/js/plugins/jquery.peity.js',
            'src/js/plugins/lightbox.js',
            'src/js/plugins/contact.js',
            'src/js/plugins/svg-injector.min.js',
            'src/js/custom.js'
            ])
        .pipe(uglify())
        .pipe(concat('application.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('build', ['build-css', 'build-js']);
gulp.task('default', ['build']);
