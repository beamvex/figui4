<template>
  <v-app id="inspire">
    <navdraw/>
    <toolbar/>
    <appspace/>
  </v-app>
</template>

<script>

import playersService from './playersService'
import navdraw from './components/navdraw.vue'
import toolbar from './components/toolbar.vue'
import appspace from './components/appspace.vue'

export default {
    components: {
      navdraw,
      toolbar,
      appspace
    },
    data: () => ({
      dialog: false,
      
      
    }),
    props: {
      source: String
    },
    mounted() {
      playersService.getPlayers(this.$store);
    },
    
  }
</script>
