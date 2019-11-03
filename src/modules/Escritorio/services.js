export default {
    cadastrar: {method: 'post', url: 'cadastrar-escritorio'},
    listar: {method: 'get', url: 'listar-escritorio'},
    getEscritorio: {method: 'get', url: 'carregar-escritorio{/id}'},
    remover: {method: 'delete', url: 'remover-escritorio{/id}'}
}