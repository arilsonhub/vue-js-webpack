export default [
  {
      path: '/escritorio/listagem',
      name: 'EscritorioListagem',
      component: () => import(/* webpackChunkName: "home" */ './pages/Listagem')
  },
  {
    path: '/escritorio/incluir',
    name: 'IncluirEscritorio',
    component: () => import(/* webpackChunkName: "home" */ './pages/formCadastro')
  },
  {
    path: '/escritorio/:id',
    name: 'EditarEscritorio',
    component: () => import(/* webpackChunkName: "home" */ './pages/formCadastro')
  }  
]