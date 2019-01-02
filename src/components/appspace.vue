<template>
  <v-content>
    <v-layout>
      <v-flex xs10 sm10 pa-2 v-if="player">
        <v-card>
          <div class="resultContainer" v-if="!playerDataLoading">
            <v-layout align-center justify-center row fill-height>
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </v-layout>
          </div>
          <vue-plotly :data="data" :layout="layout" :options="options" autoResize=true v-else-if="playerDataLoading"/>
          <v-card-actions>
            <v-btn flat small color="green" @click="exportXL">Export to XL</v-btn>
            <v-btn flat small color="green" @click="playerDataLoading = !playerDataLoading">toggle</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs2 sm2 pa-2 v-if="player">
        <v-card>
          <v-img :src="player.avatar"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{player.name}}</h3>
              <div>
                {{player.position}}
                <br>
                {{player.team}}
                <br>
                Rank: {{player.rank}}
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat small color="green">£{{player.buy}}</v-btn>
            <v-btn flat small color="red">£{{player.sell}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";
import playersService from '../playersService'

export default {
  components: {
    VuePlotly
  },
  data: function() {
    return {
      data: [{ x: [1, 6, 3], y: [2, 3, 4] }],
      layout: {},
      options: {},
      playerDataLoading: true,
    };
  },
  computed: {
    player: {
      get() {
        if (this.$store.state.selectedPlayers.length > 0) {
          var item = this.$store.state.selectedPlayers[0];
          return {
            text: item["name"] + " " + item["team"],
            name: item["name"],
            team: item["team"],
            value: item["id"],
            avatar:
              "https://img.footballindex.co.uk/" +
              item["attributes"]["optimized_image"],
            position: item["sectors"]["second"]["name"],
            rank: item["rank"],
            buy: item["score"],
            sell: item["scoreSell"]
          };
        } else {
          return false;
        }
      },
      set(newvalue) {}
    }
  },
  methods: {
    exportXL() {
      playersService.exportXL();
    },
  }
};
</script>

<style>
.resultContainer {
  height: 350px;
}
</style>
