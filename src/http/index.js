import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

Vue.use(VueResource)

const http = Vue.http;
http.options.root = 'https://desolate-waters-97755.herokuapp.com/';
http.interceptors.push(interceptors);

Object.keys(services).map(service => {
    services[service] = Vue.resource('',{}, services[service])
})

const setAuthorizationToken = token => {
    http.headers.common['x-access-token'] = `${token}`;
}

export default services
export { http, setAuthorizationToken }