import Vue from 'vue'
import App from './App.vue'

/* PASO 2 */
import {storeTest} from './store/store'

new Vue({
  el: '#app',
  store:storeTest,
  render: h => h(App)
})
