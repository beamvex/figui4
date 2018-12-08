<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <h1>{{message}}</h1>

      <v-btn color="success" @click="clickhere">click here</v-btn>

      {{couldbe}}
    </v-layout>
  </v-container>
</template>

<script>

import Store from '../model/store'
  export default {
    props: {
      couldbe: String
    },
    computed: {
    message () {
      return Store.state.count
    }
  },
    methods: {
      clickhere() {
        
          this.object1.message ='yup';
          
      }
    }
  }
</script>

<style>

</style>
