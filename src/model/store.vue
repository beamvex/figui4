<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;

</script>