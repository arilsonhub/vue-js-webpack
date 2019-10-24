import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionLogin = ({ dispatch }, payload) => {     
     return services.home.login(payload).then(response => {        
        dispatch('ActionSetUser', response.data.user)
        dispatch('ActionSetToken', response.data.token)
     })
}

export const ActionCheckToken = ({dispatch, state}) => {
     if(state.token){
          return Promise.resolve(state.token)
     }

     const token = storage.getLocalToken()

     if(!token){
          return Promise.reject(new Error('Token inválido'))
     }

     dispatch('ActionSetToken', token)
     return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
     return new Promise(async (resolve, reject) => {
          try {
               const { data: { user } } = await services.home.loadSession()
               dispatch('ActionSetUser', user)
               resolve()
          } catch (err) {
               dispatch('ActionSignOut')
               reject(err)
          }
     })
}

export const ActionSetUser = ({ commit },payload) => {
     commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit },payload) => {
     storage.setLocalToken(payload)
     storage.setHeaderToken(payload)     
     commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
     storage.setHeaderToken('')
     storage.deleteLocalToken()
     dispatch('ActionSetUser', {})
     dispatch('ActionSetToken', '')
}
