const path = require('path')
const ghpages = require('gh-pages')
const consola = require('consola')

ghpages.publish(path.resolve(__dirname, '../public'), function (err) {
  consola.err(err)
})
