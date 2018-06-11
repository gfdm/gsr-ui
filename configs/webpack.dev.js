const path = require('path')
const consola = require('consola')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = require('../configs/webpack.base')

module.exports = merge(webpackConfig, {
  entry: './docs/index.js',
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    port: 6928,
    historyApiFallback: true,
    lazy: false,
    noInfo: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    before () {
      consola.start('Starting build')
    },
    after () {
      consola.success('http://0.0.0.0:6928')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: './index.html'
    })
  ]
})
