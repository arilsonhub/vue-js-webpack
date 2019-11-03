<template>
<div class="main-panel">
   <div class="content-wrapper">
      <div class="row">
         <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
               <div class="card-body">
                  <h4 class="card-title">Cadastro de escritório</h4>                  
                  <form class="forms-sample" v-on:submit.prevent="submit">
                     <input type="hidden" v-model="form.id" />
                     <div class="form-group">
                        <label>Nome</label>
                        <input type="text" v-model="form.nome" required class="form-control" placeholder="Nome">
                        <div style="color:red;">{{formCadastroErrorObj.nome}}</div>
                     </div>
                     <div class="form-group">
                        <label>CPF</label>
                        <input type="text" v-model="form.cpf" required class="form-control" placeholder="CPF">
                        <div style="color:red;">{{formCadastroErrorObj.cpf}}</div>
                     </div>
                     <div class="form-group">
                        <label>Fone</label>
                        <input type="text" v-model="form.fone" required class="form-control" placeholder="Fone">
                        <div style="color:red;">{{formCadastroErrorObj.fone}}</div>
                     </div>
                     <div class="form-group">
                        <label>Endereço</label>
                        <input type="text" v-model="form.endereco" required class="form-control" placeholder="Endereço">
                        <div style="color:red;">{{formCadastroErrorObj.endereco}}</div>
                     </div>
                     <div class="form-group">
                        <label>Bairro</label>
                        <input type="text" v-model="form.bairro" required class="form-control" placeholder="Bairro">
                        <div style="color:red;">{{formCadastroErrorObj.bairro}}</div>
                     </div>
                     <div class="form-group">
                        <label>Cidade</label>
                        <input type="text" v-model="form.cidade" required class="form-control" placeholder="Cidade">
                        <div style="color:red;">{{formCadastroErrorObj.cidade}}</div>
                     </div>
                     <div class="form-group">
                        <label>Estado</label>
                        <select v-model="form.estado" required class="form-control">
                              <option value=""></option>
                              <option value="AC">Acre</option>
                              <option value="AL">Alagoas</option>
                              <option value="AP">Amapá</option>
                              <option value="AM">Amazonas</option>
                              <option value="BA">Bahia</option>
                              <option value="CE">Ceará</option>
                              <option value="DF">Distrito Federal</option>
                              <option value="ES">Espírito Santo</option>
                              <option value="GO">Goiás</option>
                              <option value="MA">Maranhão</option>
                              <option value="MT">Mato Grosso</option>
                              <option value="MS">Mato Grosso do Sul</option>
                              <option value="MG">Minas Gerais</option>
                              <option value="PA">Pará</option>
                              <option value="PB">Paraíba</option>
                              <option value="PR">Paraná</option>
                              <option value="PE">Pernambuco</option>
                              <option value="PI">Piauí</option>
                              <option value="RJ">Rio de Janeiro</option>
                              <option value="RN">Rio Grande do Norte</option>
                              <option value="RS">Rio Grande do Sul</option>
                              <option value="RO">Rondônia</option>
                              <option value="RR">Roraima</option>
                              <option value="SC">Santa Catarina</option>
                              <option value="SP">São Paulo</option>
                              <option value="SE">Sergipe</option>
                              <option value="TO">Tocantins</option>                        
                        </select>
                        <div style="color:red;">{{formCadastroErrorObj.estado}}</div>
                     </div>
                     <div class="form-group" v-show="form.id != ''">
                        <label>Status</label>
                        <select v-model="form.ativo" class="form-control">
                              <option value="true">Ativo</option>
                              <option value="false">Inativo</option>                                                    
                        </select>                        
                     </div>                     
                     <button type="submit" v-bind:disabled="exibirLoader" class="btn btn-primary mr-2">Confirmar</button>
                     <button type="button" v-bind:disabled="exibirLoader" class="btn btn-light" v-on:click.stop="voltar()">Voltar</button>
                  </form>
                  <img class="progress-loader" v-show="exibirLoader" src="/static/img/progress-loader.gif" />
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
        exibirLoader: false,
        form: {
            id: '',
            nome: '',
            cpf: '',
            fone: '',
            endereco:'',
            bairro:'',
            cidade:'',
            estado:'',
            ativo: ''
        }
    }),
    mounted (){       
       if(typeof(this.$route.params.id) != "undefined")
          this.getEscritorio(this.$route.params.id);       
    },
    computed: {
      ...mapState('escritorio', ['formCadastroErrorObj'])
    },
    methods: {
        ...mapActions('escritorio', ['ActionCadastrar', 'ActionGetEscritorio']),
        async submit () {           
            try{
                this.exibirLoader = true
                await this.ActionCadastrar(this.form)
                this.exibirLoader = false
            }catch(err){
                this.exibirLoader = false
                alert(err.data ? err.data.message : 'Não foi possível salvar os dados')
            }
        },
        async getEscritorio(id) {
            try{
                this.exibirLoader = true
                this.form.id = id                
                await this.ActionGetEscritorio(this.form)
                this.exibirLoader = false
            }catch(err){
                this.exibirLoader = false
                alert(err.data ? err.data.message : 'Não foi possível buscar dados do escritório')
            }
        },
        voltar(){
           try{
            this.$router.push({name: 'EscritorioListagem'})
           }catch(err){
              alert(err.data ? err.data.message : 'Ocorreu um erro ao voltar para listagem.')
           }
        }
    }
}
</script>

<style>
</style>