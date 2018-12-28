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
      <v-autocomplete @click="clearSelection"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      @change="selectedPlayer"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Search for players"
      solo-inverted
      prepend-inner-icon="search"
    >
            <template
                slot="selection"
                slot-scope="data"
              >
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-avatar @click="clearSelection">
                    <img :src="data.item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content @click="clearSelection">
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.team"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </template>
              </template>

            <template
                slot="item"
                slot-scope="data"
              >
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-avatar>
                    <img :src="data.item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.team"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </template>
              </template>
    </v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>help</v-icon>
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
          console.log(val, this.select);

          //if (val !== null) {
              this.clearSelection(null);
          //}
         return val && val !== this.select && this.querySelections(val)
      }
    },
    computed : {
                players : {
                    get() {
                        return this.$store.state.items.map(function(item) {
                                return { text: item['name'] + ' ' + item['team'], name: item['name'], team: item['team'], value: item['id'], avatar: 'https://img.footballindex.co.uk/' + item['attributes']['optimized_image']};
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
            return ((e.text || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1) ;
          })
          this.loading = false
        }, 500)
      },
    
      clickDraw() {
        this.$store.dispatch('draw');
      },
      selectedPlayer(event) {
        this.$store.dispatch('addPlayer', { player: event});
        this.$store.dispatch('drawSet', { newValue : true });
      },
      clearSelection(event) {
        this.select = null;
      }
    },
    }
  
</script>

<style>

</style>
