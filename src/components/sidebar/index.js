import IdSidebar from './src/sidebar'
import IdSidebarItem from './src/sidebar-item'
import IdSidebarGroup from './src/sidebar-group'

IdSidebar.install = function (Vue) {
  Vue.component(IdSidebar.name, IdSidebar)
  Vue.component(IdSidebarItem.name, IdSidebarItem)
  Vue.component(IdSidebarGroup.name, IdSidebarGroup)
}

export {
  IdSidebar,
  IdSidebarItem,
  IdSidebarGroup
}

export default IdSidebar
