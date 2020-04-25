var fs = require("fs");
var gulp = require("gulp");
var shelljs = require("shelljs");

const translate = require("@vitalets/google-translate-api");

// const translate = require('google-translate-api');

gulp.task("check", function() {
  var cultureFile = fs.readFileSync("./locale.txt", "utf8");
  translate(cultureFile, { to: "nl" })
    .then(res => {
      console.log(res.text);
      fs.writeFileSync("./check.txt", res.text, "utf8");
      console.log(res.from.language.iso);
    })
    .catch(err => {
      console.error(err);
    });
});
