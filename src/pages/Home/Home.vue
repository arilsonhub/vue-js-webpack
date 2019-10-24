<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                <div class="row flex-grow">
                    <div class="col-lg-6 d-flex align-items-center justify-content-center">
                        <div class="auth-form-transparent text-left p-3">
                            <div class="brand-logo">
                                <img src="/static/img/logo.png" alt="logo">
                            </div>                            
                            <form class="pt-3" @submit.prevent="submit()">
                                <div class="form-group">
                                    <label for="exampleInputEmail">Usuário</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0"><i class="ti-user text-primary"></i></span>
                                        </div>
                                        <input required type="text" v-model="form.user" class="form-control form-control-lg border-left-0" id="inputUser" placeholder="Usuário">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword">Senha</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0"><i class="ti-lock text-primary"></i></span>
                                        </div>
                                        <input required type="password" v-model="form.pwd" class="form-control form-control-lg border-left-0" id="inputPwd" placeholder="Senha">
                                    </div>
                                </div>
                                <div class="my-3">
                                    <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Entrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 login-half-bg d-flex flex-row"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data: () => ({
        form: {
            username: '',
            senha: ''
        }
    }),
    methods: {
        ...mapActions('home', ['ActionLogin']),
        async submit () {
            try{
                await this.ActionLogin(this.form)
                this.$router.push({name: 'DashBoard'})
            }catch(err){                
                alert(err.data ? err.data.message : 'Não foi possível efetuar login')
            }
        }
    }
}
</script>

<style>
    @import "../../assets/scss/vendor.bundle.base.scss";
    @import "../../assets/scss/themify-icons.scss";
    @import "../../assets/scss/style.scss";
</style>
