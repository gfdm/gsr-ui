import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => import('./Home')
    },
    {
      path: '/docs',
      component: () => import('./Docs'),
      children: [
        {
          path: '/docs/',
          component: () => import('./Docs/Installation')
        },
        {
          path: '/docs/icon',
          component: () => import('./Docs/Icon')
        },
        {
          path: '/docs/button',
          component: () => import('./Docs/Button')
        },
        {
          path: '/docs/sidebar',
          component: () => import('./Docs/Sidebar')
        }
      ]
    }
  ]
})
