import IdCard from './src/card'

IdCard.install = function (Vue) {
  Vue.component(IdCard.name, IdCard)
}

export default IdCard
