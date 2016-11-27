var gulp = require("gulp"),
    connect = require("gulp-connect");

gulp.task('default', function() {
    connect.server({
        root: './www/jin_pro/',
        port: 8090
    });
});
