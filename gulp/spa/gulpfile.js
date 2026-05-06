const { series, parallel } =  require('gulp')

const { appHtml, appCSS, appJS, appIMG } = require('./src/gulpTasks/app')
const { depsCSS, depsFonts } = require('./src/gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./src/gulpTasks/servidor')

const build = parallel(
    series(appHtml, appCSS, appJS, appIMG),
    series(depsCSS, depsFonts)
)

module.exports.build = build

module.exports.default = series(
    build,
    parallel(
        servidor,
        monitorarArquivos
    )
)
