import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
      cantidad: 0,
    },

    mutations:{
      aumentar: (state) => state.cantidad++,
      reducir:  (state) => state.cantidad--,
    }
    /* Las mutations solucionan los problemas y riesgos de perder rastros de
    modificaciones, log, etc... Sin embargo aun queda pendiente el problema Asyncrono
    (request Axios, JSON, etc) para ello se vera Actions */

    // ver video >> Vuex mutations >> min 7.30

})
