<template>
  <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-avatar>
                    <img :src="child.avatar">
                  </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="child.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="child.team"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="child.icon" @click="deletePlayer(child.value)">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

  export default {
      data : () => ({
          
      }),
      computed : {
                drawer : {
                    get() {return this.$store.state.drawer},
                    set(newValue) {
                        this.$store.dispatch('drawSet', { newValue : newValue});
                    },
                },
                items: {
                    get() { return [
                                {
                                icon: 'history',
                                text: 'Recent Players',
                                model: true,
                                children: this.$store.state.selectedPlayers.map(item => {
                                    return { icon: 'delete', text: item['name'] + ' ' + item['team'], name: item['name'], team: item['team'], value: item['id'], avatar: 'https://img.footballindex.co.uk/' + item['attributes']['optimized_image']};
                                })
                                },
                                ];
                    },
                    set(newvalue) {

                    },
                }
            
          },
          methods : {
              deletePlayer(playerId) {
                  this.$store.dispatch('deletePlayer', { player: playerId});
              }
          }
      
  }
</script>

<style>

</style>
