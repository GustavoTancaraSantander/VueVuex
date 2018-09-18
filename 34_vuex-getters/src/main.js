import Vue from 'vue'
import AppKnow from './AppKnow.vue'

import { storeKnow } from './store/store'
new Vue({
  el: '#app',
  store: storeKnow,
  render: h => h(AppKnow)
})
