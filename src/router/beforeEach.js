import store from '../store'

export default async (to, from, next) => {
  document.title = `${to.name} - Judice Serviços`

  if (to.name !== 'Home' && !store.getters['home/hasToken']) {
    try {      
      await store.dispatch('home/ActionCheckToken')

      next({ path: to.path })
    } catch (err) {
      next({ name: 'Home' })
    }
  } else {    
    if (to.name === 'Home' && store.getters['home/hasToken']) {      
      next({ name: 'DashBoard' })
    } else {      
      next()
    }
  }
}