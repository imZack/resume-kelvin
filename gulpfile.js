var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var deploy = require('gulp-gh-pages');

var paths = {
  css: 'css/*',
  font: 'font/*',
  scripts: 'js/**/*.js',
  images: 'img/**/*',
  html: 'index.html'
};

var DEST = './build/';


gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(DEST + 'img'));
});

gulp.task('font', ['clean'], function() {
  return gulp.src(paths.font)
    .pipe(gulp.dest(DEST + 'font/'));
});

gulp.task('usemin', ['clean'], function() {
  return gulp.src(paths.html)
    .pipe(usemin({
      css: [minifyCss({noAdvanced: true}), 'concat'],
      html: [minifyHtml({empty: true})],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest(DEST));
})

gulp.task('watch',function() {

  var watchFunc = function(src) {
    return function() {
      gulp.src(src)
        .pipe(reload({stream: true}));
    }
  };

  gulp.watch(paths.html, watchFunc(paths.html));
  gulp.watch(paths.scripts, watchFunc(paths.scripts));
  gulp.watch(paths.images, watchFunc(paths.images));
  gulp.watch(paths.css, watchFunc(paths.css));
});

gulp.task('serve', function() {
  return browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('build/**/*')
    .pipe(deploy());
})

gulp.task('default', ['serve', 'watch']);
gulp.task('build', ['usemin', 'images', 'font']);
