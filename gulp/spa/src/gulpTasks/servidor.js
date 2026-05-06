const gulp = require('gulp')
const webserver = require('gulp-webserver')

const { appHtml, appCSS, appJS, appIMG } = require('./app')
const { depsCSS, depsFonts } = require('./deps')

function monitorarArquivos(cb) {
    gulp.watch('src/**/*.html', appHtml)
    gulp.watch('src/assets/sass/**/*.scss', appCSS)
    gulp.watch('src/assets/js/**/*.js', appJS)
    gulp.watch('src/assets/imgs/**/*.*', appIMG)
    gulp.watch('node_modules/font-awesome/css/font-awesome.css', depsCSS)
    gulp.watch('node_modules/font-awesome/fonts/*.*', depsFonts)

    return cb()
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            open: false
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}

