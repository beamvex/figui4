<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
  state: {
    count: 0,
    drawer: false,
    items: [],
    selectedPlayers: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },
    toggleDraw (state) {
      state.drawer = !state.drawer;
    },
    setDraw (state, payload) {
      state.drawer = payload.newValue;
    },
    setItems(state, payload) {
      state.items = payload.items;
    },
    playerAdd(state, payload) {
      state.items.forEach(element => {
        if (element.id === payload.playerId) {
          state.selectedPlayers.unshift(element);
        }
      });
    },
    playerDelete(state, payload) {
      state.selectedPlayers.forEach(element => {
        if (element.id === payload.playerId) {
          state.selectedPlayers.shift(element);
        }
      });
    }

  },
  actions: {
    draw (context) {
      context.commit('toggleDraw')
    },
    drawSet (context, payload) {
      context.commit('setDraw', { newValue : payload.newValue })
    },
    itemSet (context, payload) {
      context.commit('setItems', { items : payload.items })
    },
    addPlayer (context, payload) {
      context.commit('playerAdd', { playerId : payload.player })
    },
    deletePlayer (context, payload) {
      context.commit('playerDelete', { playerId : payload.player })
    }
  }
})

export default store;

</script>