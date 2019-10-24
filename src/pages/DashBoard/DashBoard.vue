<template>
<div class="main-panel">
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="font-weight-bold mb-0">Bem-vindo, {{user.nome}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DashBoard',
  computed: {
    ...mapState('home', ['user'])
  }
}
</script>

<style>
    @import "../../assets/scss/vendor.bundle.base.scss";
    @import "../../assets/scss/themify-icons.scss";
    @import "../../assets/scss/style.scss";
</style>