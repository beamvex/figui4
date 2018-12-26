<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
  state: {
    count: 0,
    drawer: false,
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
    }
  },
  actions: {
    draw (context) {
      context.commit('toggleDraw')
    },
    drawSet (context, payload) {
      context.commit('setDraw', { newValue : payload.newValue })
    }
  }
})

export default store;

</script>