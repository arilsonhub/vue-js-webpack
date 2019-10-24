import Vue from "vue"
import moment from 'moment'

function formatDate(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
}

function formatCpf(cpf) {
    if (cpf) {    
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}

Vue.filter('formatDate', formatDate)
Vue.filter('formatCpf', formatCpf)

export default {
    formatDate,
    formatCpf
}