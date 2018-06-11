import IButton from './src/button'
console.log(IButton)

IButton.install = function (Vue) {
  Vue.component(IButton.name, IButton)
}

export default IButton
