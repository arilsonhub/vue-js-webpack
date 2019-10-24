export default [
  {
      path: '/dashboard',
      name: 'DashBoard',
      component: () => import(/* webpackChunkName: "home" */ './DashBoard')
  }
]