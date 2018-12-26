import Vue from 'vue'
import './plugins/vuetify'
import './model/store.vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')