const components = []
const req = require.context('./', true, /\/[^/]+\/index.js$/)
req.keys().forEach(file => {
  const name = file
    .slice(2)
    .split('/')[1]
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  components[name] = req(file).default
})

const install = function (Vue, opts = {}) {
  for (let name in components) {
    Vue.use(components[name])
  }

  const IDOLA = {}
  IDOLA.size = opts.size || ''
  Vue.prototype.$IDOLA = IDOLA
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '__VERSION__',
  install,
  ...components
}
