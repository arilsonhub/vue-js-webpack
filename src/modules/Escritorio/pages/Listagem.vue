<template>
<div class="main-panel">
   <div class="content-wrapper">
      <div class="row">
         <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
               <div class="card-body">
                  <h4 class="card-title">Escritórios</h4>
                  <p>
                     <button @click="incluirEscritorio()" type="button" class="btn btn-outline-primary btn-icon-text">
                          <i class="ti-file btn-icon-prepend"></i>
                          Incluir
                     </button>          
                  </p>                  
                  <div class="table-responsive">
                     <table class="table table-hover">
                        <thead>
                           <tr>
                              <th>Código</th>
                              <th>Nome</th>
                              <th>CPF</th>                              
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
                              <td>{{item.estado}}</td>
                              <td>{{item.cidade}}</td>
                              <td>{{item.dataCadastro | formatDate}}</td>                              
                              <td><label class="" v-bind:class="{'badge badge-success': item.ativo,  'badge badge-danger': !item.ativo}">{{item.ativo ? 'Ativo' : 'Inativo'}}</label></td>
                              <td>
                                  <button v-bind:disabled="exibirLoader" type="button" class="btn btn-outline-secondary btn-icon-text" @click="editarEscritorio(item.id)">
                                        Editar
                                        <i class="ti-file btn-icon-append"></i>
                                  </button>
                                  <button v-bind:disabled="exibirLoader" type="button" class="btn btn-outline-secondary btn-icon-text" @click="removerEscritorio(item.id)">
                                        Remover
                                        <i class="ti-file btn-icon-append"></i>
                                  </button>
                              </td>
                           </tr>                                                 
                        </tbody>
                     </table>
                     <img v-show="exibirLoader" class="progress-loader-listagem" src="/static/img/progress-loader.gif" />
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
   data: () => ({
        exibirLoader: false
    }),
    mounted (){
       this.getData()
    },
    computed: {
        ...mapState('escritorio', ['escritorioList'])
    },
    methods: {
        ...mapActions('escritorio', ['ActionListar', 'ActionGetEscritorio', 'ActionRemover']),
         async getData () {
            try {
               this.exibirLoader = true
               await this.ActionListar()
               this.exibirLoader = false
            } catch (err) {
               this.exibirLoader = false
               alert(err.data ? err.data.message : 'Não foi possível listar os escritórios')
            }
         },
         incluirEscritorio(){
            this.$router.push({name: 'IncluirEscritorio'})
         },
         editarEscritorio(id){
            this.$router.push({name: 'EditarEscritorio', params: { id: id }})
         },
         async removerEscritorio(id){
            if(confirm("Confirma a remoção do registro?")){
               try {
                  this.exibirLoader = true
                  await this.ActionRemover({id: id})
                  this.exibirLoader = false
               } catch (err) {
                  this.exibirLoader = false
                  alert(err.data ? err.data.message : 'Não foi possível remover o escritório')
               }
            }
         }
    }
}
</script>

<style>
.progress-loader-listagem {
   margin-left: 40%;
}
</style>