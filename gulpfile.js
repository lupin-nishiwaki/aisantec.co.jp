// * ----------------------------------------
// * 設定
const rootDir = 'www/';
const srcDir = 'www/_src/';
const destDir = 'www/asset/';

// * ----------------------------------------
// * プラグイン
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const connect = require('gulp-connect-php');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const sass = require('gulp-dart-sass');
const csscomb = require('gulp-csscomb');
const cleanCSS = require('gulp-clean-css');
const cmq = require('gulp-combine-media-queries');
const sourcemaps = require('gulp-sourcemaps');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const changed = require('gulp-changed');
const cache = require('gulp-cached');

// * ----------------------------------------
// * BrowserSync + PHP
function siteSync() {
  connect.server(
    {
      base: rootDir,
      port: 5000,
      livereload: true,
    },
    function () {
      browserSync.init({
        proxy: '127.0.0.1:5000',
        open: 'external',
      });
    }
  );
}

// * ----------------------------------------
// * Reload
const siteReload = (done) => {
  browserSync.reload();
  done();
};

// * ----------------------------------------
// * Sass
const dartSass = () => {
  return gulp
    .src(srcDir + 'sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: notify.onError('Sass Error: <%= error.message %>'),
      })
    )
    .pipe(sass())
    .pipe(cmq())
    .pipe(csscomb())
    .pipe(cleanCSS({ format: 'keep-breaks' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destDir + 'css/'))
    .pipe(browserSync.stream());
};

// * ----------------------------------------
// * JS
const jsVender = () => {
  return gulp
    .src(srcDir + 'js/vender/*.js')
    .pipe(plumber())
    .pipe(concat('vender.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destDir + 'js/'))
    .pipe(browserSync.stream());
};

const jsApp = () => {
  return gulp
    .src(srcDir + 'js/*.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(destDir + 'js/'))
    .pipe(browserSync.stream());
};

// * ----------------------------------------
// * Image（webpのみ出力）
// * ----------------------------------------
// * Image（webp + svg + ico）
const img = () => {

  // jpg / png / gif → webp
  const raster = gulp
    .src(srcDir + 'img/**/*.+(jpg|jpeg|png|gif)')
    .pipe(plumber())
    .pipe(
      imagemin([
        imagemin.gifsicle({ optimizationLevel: 3 }),
      ])
    )
    .pipe(
      webp({
        quality: 70,
        lossless: false,
        method: 6,
      })
    )
    .pipe(gulp.dest(destDir + 'img/'));

  // svg → svg（最適化のみ）
  const svg = gulp
    .src(srcDir + 'img/**/*.svg')
    .pipe(plumber())
    .pipe(imagemin([imagemin.svgo()]))
    .pipe(gulp.dest(destDir + 'img/'));

  // ico → ico（そのままコピー）
  const ico = gulp
    .src(srcDir + 'img/**/*.ico')
    .pipe(plumber())
    .pipe(gulp.dest(destDir + 'img/'));

  return Promise.all([raster, svg, ico]).then(() => {
    browserSync.stream();
  });
};



// * ----------------------------------------
// * Copy（cache OK）
const doc = () => {
  return gulp
    .src(srcDir + 'doc/**/*.+(pdf)')
    .pipe(changed(destDir + 'doc/'))
    .pipe(cache('doc'))
    .pipe(gulp.dest(destDir + 'doc/'))
    .pipe(browserSync.stream());
};

const video = () => {
  return gulp
    .src(srcDir + 'video/**/*.+(mp4)')
    .pipe(changed(destDir + 'video/'))
    .pipe(cache('video'))
    .pipe(gulp.dest(destDir + 'video/'))
    .pipe(browserSync.stream());
};

const audio = () => {
  return gulp
    .src(srcDir + 'audio/**/*.+(mp3)')
    .pipe(changed(destDir + 'audio/'))
    .pipe(cache('audio'))
    .pipe(gulp.dest(destDir + 'audio/'))
    .pipe(browserSync.stream());
};

// * ----------------------------------------
// * Watch
const watchFiles = () => {
  gulp.watch(rootDir + '**/*.+(html|php|htaccess|htpasswd)', siteReload);
  gulp.watch(srcDir + 'sass/**/*.scss', dartSass);
  gulp.watch(srcDir + 'js/vender/*.js', jsVender);
  gulp.watch(srcDir + 'js/*.js', jsApp);
  gulp.watch(srcDir + 'img/**/*.*', img);
  gulp.watch(srcDir + 'doc/**/*.*', doc);
  gulp.watch(srcDir + 'video/**/*.*', video);
  gulp.watch(srcDir + 'audio/**/*.*', audio);
};

// * ----------------------------------------
// * Exports
exports.default = gulp.series(
  gulp.parallel(
    siteSync,
    watchFiles,
    dartSass,
    jsVender,
    jsApp,
    img,
    doc,
    video,
    audio
  )
);
