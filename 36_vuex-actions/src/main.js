import Vue from 'vue'
import App from './App.vue'

import {storeAsyncronic} from './storeAsync/storeWithAcctions'
  new Vue({
    el: '#app',
    store:storeAsyncronic,
    render: h => h(App)
  })
   