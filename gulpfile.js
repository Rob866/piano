var gulp = require("gulp");
var browserify= require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();
var tsify = require("tsify");

var paths= { pages : ["src/*html","src/*css"]};



gulp.task("serve",["start"],function(){
    browserSync.init({
        server : "./dist"
    });

    gulp.watch('src/*.ts',["start"]);
    gulp.watch('src/*.css',["copy-files"]).on("change",browserSync.reload);
    gulp.watch('src/*.html',["copy-files"]).on('change',browserSync.reload);

})


gulp.task("copy-files",function(){
    return gulp.src(paths.pages)
    .pipe(gulp.dest("dist"));

});


gulp.task("start", ["copy-files"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});












