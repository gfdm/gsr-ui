export default [
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
      },
      {
        path: '/docs/card',
        component: () => import('./Docs/Card')
      },
      {
        path: '/docs/input',
        component: () => import('./Docs/Input')
      }
    ]
  }
]
