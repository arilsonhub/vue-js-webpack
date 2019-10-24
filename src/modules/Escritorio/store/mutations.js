import * as types from './mutation-types'

export default {
    [types.SET_ESCRITORIO_LIST](state, payload){        
        state.escritorioList = payload;
    },
    [types.SET_FORM_CADASTRO_ERROR_OBJ](state, payload){
        state.formCadastroErrorObj = payload;
    }    
}