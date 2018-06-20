import menu from '~docs/menu'

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
      ...menu['组件'].map(item => {
        return {
          path: `/docs${item.link}`,
          component: () => import(`./Docs/${item.name}`)
        }
      })
    ]
  }
]
