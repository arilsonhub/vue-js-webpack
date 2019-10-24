<template>
<div class="main-panel">
   <div class="content-wrapper">
      <div class="row">
         <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
               <div class="card-body">
                  <h4 class="card-title">Escritórios</h4>
                  <p>
                     <router-link class="nav-link" :to="{ name: 'IncluirEscritorio' }">
                        <button type="button" class="btn btn-outline-primary btn-icon-text">
                          <i class="ti-file btn-icon-prepend"></i>
                          Incluir
                        </button> 
                    </router-link>                     
                  </p>                  
                  <div class="table-responsive">
                     <table class="table table-hover">
                        <thead>
                           <tr>
                              <th>Código</th>
                              <th>Nome</th>
                              <th>CPF</th>
                              <th>Fone</th>
                              <th>Estado</th>
                              <th>Cidade</th>
                              <th>Data do cadastro</th>
                              <th>Ativo</th>
                              <th>&nbsp;</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr v-for="item in escritorioList">
                              <td>{{item.id}}</td>
                              <td>{{item.nome}}</td>
                              <td>{{item.cpf | formatCpf}}</td>
                              <td>{{item.fone}}</td>
                              <td>{{item.estado}}</td>
                              <td>{{item.cidade}}</td>
                              <td>{{item.dataCadastro | formatDate}}</td>                              
                              <td><label class="" v-bind:class="{'badge badge-success': item.ativo,  'badge badge-danger': !item.ativo}">{{item.ativo ? 'Ativo' : 'Inativo'}}</label></td>
                              <td>
                                  <button type="button" class="btn btn-outline-secondary btn-icon-text" @click="editarEscritorio(item.id)">
                                        Editar
                                        <i class="ti-file btn-icon-append"></i>
                                  </button>
                              </td>
                           </tr>                                                 
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    mounted (){
       this.getData()
    },
    computed: {
        ...mapState('escritorio', ['escritorioList'])
    },
    methods: {
        ...mapActions('escritorio', ['ActionListar', 'ActionGetEscritorio']),
         async getData () {
            try {
               await this.ActionListar()
            } catch (err) {
               alert(err.data ? err.data.message : 'Não foi possível listar os escritórios')
            }
         },
         editarEscritorio(id){
            this.$router.push({name: 'EditarEscritorio', params: { id: id }})
         }
    }
}
</script>

<style>
</style>