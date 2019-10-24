<template>
  <div id="app" class="container-scroller">    
    <div id="sharedLayout" v-if="showPartials">
      <header-view />
      <div class="container-fluid page-body-wrapper">
        <menu-view/>
        <router-view/>
      </div>
    </div>
    <router-view v-if="isLogin" />
  </div>
</template>

<script>
import HeaderView from './components/shared/Header'
import MenuView from './components/shared/Menu'

export default {
  name: 'App',
  components: {
     HeaderView,
     MenuView
  },
  computed: {
    showPartials () {      
      return this.$route.name !== 'Home'
    },
    isLogin () {      
      return this.$route.name === 'Home'
    }
  }
}
</script>