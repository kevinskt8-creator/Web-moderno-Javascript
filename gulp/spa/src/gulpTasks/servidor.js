const gulp = require('gulp')
const webserver = require('gulp-webserver')

function servidor(cb) {
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
        open: true,
        liverload: true,
    }))
}

function monitorarArquivos(cb) {
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}
