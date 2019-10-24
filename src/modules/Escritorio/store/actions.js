import services from '@/http'
import * as types from './mutation-types'
import filters from "../../../filters"

export const ActionListar = ({ dispatch }) => {     
     return services.escritorio.listar().then(response => {
        dispatch('ActionSetEscritorio', response.data)
     })
}

export const ActionCadastrar = ({ commit }, payload) => {      
     return services.escritorio.cadastrar(payload).then(response => {
          commit(types.SET_FORM_CADASTRO_ERROR_OBJ, {})
         let semSucesso =  !response.data.success

         if(semSucesso){            
            if(response.data.errorList)
               commit(types.SET_FORM_CADASTRO_ERROR_OBJ, response.data.errorList)
         }else{
            Object.keys(payload).forEach(function(key,index) {
               payload[key] = ''
            });
         }

         alert(response.data.message)
     })
}

export const ActionGetEscritorio = ({ commit }, payload) => {
   services.escritorio.getEscritorio({id: payload.id}).then(response => {
      Object.keys(response.data).forEach(function(key,index) {
         payload[key] = response.data[key]
      });
      payload['cpf'] = filters.formatCpf(payload['cpf'])
   })
}

export const ActionSetEscritorio = ({ commit },payload) => {     
     commit(types.SET_ESCRITORIO_LIST, payload)
}
