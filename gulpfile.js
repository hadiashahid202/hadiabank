const gulp = require("gulp");
const zip = require("gulp-zip");

gulp.task("create-zip", function () {
  return gulp
    .src(["index.html", "style.css", "index.js", "assets/**/*"])
    .pipe(zip.default("hadiabank.zip")) // ← change zip() to zip.default()
    .pipe(gulp.dest("./"));
});

// gulp.task("create-zip", function(){
//   console.log("creating zip file");
// }
// );
// function createZipTask(){
//   console.log("creating zip file");
// }
// gulp.task("create-zip",createZipTask);
