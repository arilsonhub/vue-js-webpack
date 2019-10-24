import store from "../store"

export default request => {
    return ({ status }) => {
        if(status == 401){
            store.dispatch('home/ActionSignOut')
            window._Vue.$router.push({name: 'Home'})
        }
    }
}
