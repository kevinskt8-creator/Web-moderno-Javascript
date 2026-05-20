const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = (env, argv) => {
  const modoDev = argv.mode !== 'production'

  return {
    mode: modoDev ? 'development' : 'production',
    entry: "./src/principal.js",
    output: {
      filename: "principal.js",
      path: path.resolve(__dirname, "public"),
      assetModuleFilename: "imgs/[name][ext]"
    },
    devServer: {
      contentBase: "./public",
      port: 9000
    },
    optimization: {
      minimizer: [
        "...",
        new CssMinimizerPlugin()
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "estilo.css"
      })
    ],
    resolve: {
      extensions: [".js", ".scss", ".css"]
    },
    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          use: [
            modoDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader", // interpreta @import, url()...
            "sass-loader"
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource"
        },
      ],
    },
  }
}
