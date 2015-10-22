// Include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

// Concatenate & Minify JS
gulp.task('scripts', [], function() {
    return gulp.src([
            'bower_components/modernizr/modernizr.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/foundation/js/foundation.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            '_scripts/app.js',
            '_scripts/config/*.js',
            '_scripts/filters/*.js',
            '_scripts/services/*.js',
            '_scripts/directives/*.js',
            '_scripts/controllers/*.js',
            '_scripts/constants/*.js',
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('webserver', function() {
  connect.server({
    root: __dirname,
    //livereload: true,
    port: 8080,
    fallback: 'index.html'
  });
});

gulp.task('watch', function() {
    gulp.watch('_scripts/**/*.js', ['scripts']);
})

// Default Task
gulp.task('default', ['scripts', /*'webserver',*/ 'watch']);
