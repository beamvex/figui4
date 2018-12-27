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
    }
  }
})

export default store;

</script>