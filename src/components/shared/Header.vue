<template>
    <div>
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">            
                <img src="/static/img/logo.png" class="mr-2" alt="logo" />            
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <img src="/static/img/faces/face28.jpg" alt="profile" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item" v-on:click.stop="logout()">
                                <i class="ti-power-off text-primary"></i> Logout

                            </a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="ti-view-list"></span>
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {    
    methods: {
        ...mapActions('home', ['ActionSignOut']),
         logout () {
            this.ActionSignOut()
            this.$router.push({name: 'Home'})
         }         
    }
}
</script>

<style>
</style>