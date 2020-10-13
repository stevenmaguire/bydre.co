const { series, src, dest } = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

exports.default = function() {
    return src([
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
        .pipe(dest('js'));
}
