const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: [
            './src/themes/common/mixins.scss',
            './src/themes/common/utils.scss',
            './src/themes/common/var.scss'
          ]
        }
      },
      {
        enforce: 'pre',
        test: /.(js|vue)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
      '~docs': path.resolve(__dirname, '../docs')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
