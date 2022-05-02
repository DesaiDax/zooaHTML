import gulp from "gulp";
import imgminify from "gulp-imagemin";
import browserSync from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import uglify from "gulp-uglify";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";

const sass = gulpSass(dartSass);

// Welcome
gulp.task("welcome", async function () {
	return console.log("Welcome to Documentation");
});

// HTML Complier
gulp.task("html", function () {
	return gulp.src("src/*.html").pipe(gulp.dest("dist/")).pipe(browserSync.stream());
});

// Sass Complier
gulp.task("sass", function () {
	return gulp
		.src("src/assets/scss/*.scss")
		.pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie8" }))
		.pipe(gulp.dest("dist/css/"))
		.pipe(browserSync.stream());
});

// Minify & Concat Js file
gulp.task("concat-js", function () {
	return gulp.src("src/assets/js/*.js").pipe(concat("app.js")).pipe(uglify()).pipe(gulp.dest("dist/js/")).pipe(browserSync.stream());
});

// Plugins Complier
gulp.task("plugin", function () {
	return gulp.src("src/assets/plugins/**/*.{js,css}").pipe(gulp.dest("dist/plugins")).pipe(browserSync.stream());
});

// Image compiler
gulp.task("img-minify", function () {
	return gulp.src("src/assets/img/**/**").pipe(imgminify()).pipe(gulp.dest("dist/img/")).pipe(browserSync.stream());
});

// Browser Sync
gulp.task("browser-sync", function () {
	browserSync.init({
		server: {
			proxy: "http://localhost",
			baseDir: "./dist",
		},
	});
	gulp.watch("src/assets/plugins/**/*.{js,css}", gulp.series("plugin"));
	gulp.watch("src/assets/scss/*.scss", gulp.series("sass"));
	gulp.watch("src/assets/js/*.js", gulp.series("concat-js"));
	gulp.watch("src/assets/img/*", gulp.series("img-minify"));
	gulp.watch("src/*.html", gulp.series("html")).on("change", browserSync.reload);
});

// Default Watch
gulp.task("default", gulp.series("browser-sync"));

// Make Build
gulp.task("build", gulp.series("welcome", "html", "sass", "concat-js", "plugin", "img-minify"));
