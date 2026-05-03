const { series } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
  GulpClient.src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      }),
    )
    .pipe(uglify())
    .on("error", (err) => console.log(err))
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));
}

function fim(cb) {
  console.log("Fim!!!");
  return cb();
}

exports.default = series(padrao, fim);
