const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const webpackConfig = require('../configs/webpack.base')

module.exports = [
  merge(webpackConfig, {
    entry: './docs/index.js',
    output: {
      filename: '[name].[chunkhash:7].js',
      path: path.resolve(__dirname, '../public'),
      publicPath: './'
    },
    plugins: [
      new ProgressBarPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:7].css'
      }),
      new HtmlWebpackPlugin({
        favicon: path.resolve(__dirname, './favicon.png'),
        template: path.resolve(__dirname, './index.html'),
        filename: 'index.html'
      })
    ]
  }),
  merge(webpackConfig, {
    mode: 'production',
    entry: {
      'element-mobile': [
        './src/index.js',
        './src/themes/index.scss'
      ]
    },
    output: {
      filename: 'idola.js',
      path: path.resolve(__dirname, '../lib'),
      publicPath: './',
      libraryTarget: 'umd',
      library: 'Idola',
      umdNamedDefine: true
    },
    plugins: [
      new ProgressBarPlugin(),
      new MiniCssExtractPlugin({
        filename: 'idola.css'
      })
    ]
  })
]
