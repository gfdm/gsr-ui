import IdSidebar from './src/sidebar'
import IdSidebarItem from './src/sidebar-item'

IdSidebar.install = function (Vue) {
  Vue.component(IdSidebar.name, IdSidebar)
  Vue.component(IdSidebarItem.name, IdSidebarItem)
}

export {
  IdSidebar,
  IdSidebarItem
}

export default IdSidebar
