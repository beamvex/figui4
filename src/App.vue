<template>
  <v-app id="inspire">
    <navdraw/>
    <toolbar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          
        </v-layout>
      </v-container>
    </v-content>
    
</v-app>
</template>

<script>

import playersService from './playersService'
import navdraw from './components/navdraw.vue'
import toolbar from './components/toolbar.vue'

export default {
    components: {
      navdraw,
      toolbar
    },
    data: () => ({
      dialog: false,
      
      
    }),
    props: {
      source: String
    },
    mounted() {
      playersService.getPlayers();
    },
    
  }
</script>
