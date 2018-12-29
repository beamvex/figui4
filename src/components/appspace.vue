<template>
    <v-content>
  <v-layout >
    <v-flex xs2 sm2 offset-sm10 pa-2 v-if="player">
      <v-card > 
        <v-img
          :src="player.avatar"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{player.name}}</h3>
            <div>{{player.position}}<br/>{{player.team}}<br/> Rank: {{player.rank}}</div>
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
  export default {
    data : () => ({
          
      }),
      computed : {
                player: {
                    get() {  
                        if (this.$store.state.selectedPlayers.length > 0) {
                            console.log('eh');
                            var item = this.$store.state.selectedPlayers[0];
                            return { 
                                    text: item['name'] + ' ' + item['team'], 
                                    name: item['name'], 
                                    team: item['team'], 
                                    value: item['id'], 
                                    avatar: 'https://img.footballindex.co.uk/' + item['attributes']['optimized_image'],
                                    position: item['sectors']['second']['name'],
                                    rank: item['rank'],
                                    buy: item['score'],
                                    sell: item['scoreSell']
                                };
                        } else {
                            return false;
                        }
                    },
                    set(newvalue) {

                    },
                }
      },
  }
  
</script>

<style>

</style>
