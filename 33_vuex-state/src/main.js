import Vue from 'vue'
import App from './App.vue'

import {storePerson} from './storeState/storePerson'

new Vue({
  el: '#app',
  store: storePerson,
  render: h => h(App)
})
