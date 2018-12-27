<template>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 350px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="clickDraw"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Football Index Chart Tool</span>
      </v-toolbar-title>
      <v-autocomplete
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Search for players"
      solo-inverted
      prepend-inner-icon="search"
    ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
</template>

<script>
  export default {
      data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    },
    computed : {
                players : {
                    get() {
                        return this.$store.state.items.map(function(item) {
                                return { text: item['name'] + ', ' + item['team'], value: item['id']};
                        });
                    },
                    set(newValue) {
                        
                    },
                }
            
          },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.players.filter(e => {
            return (e.text || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    
      clickDraw() {
        this.$store.dispatch('draw');
      }
    },
    }
  
</script>

<style>

</style>
