const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  stats: {
    children: false
  },
  module: {
    rules: [
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
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
