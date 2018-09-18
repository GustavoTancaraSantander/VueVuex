
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const storeAsyncronic = new Vuex.Store({
  state:{
    cantidad:0,
    cantidadParameter:0,
  },

  mutations:{
    aumentar : (state) => state.cantidad++,
    reducir  : (state) => state.cantidad--,

    aumentarParam : (state, cantidad) => state.cantidadParameter += cantidad,
    reducirParam  : (state, cantidad) => state.cantidadParameter -= cantidad,
  },

  /* Actions usados para request (API's --> axios, Ajax, WS, etc)
    para operaciones Asyncronas, es decir donde exista un periodo de espera. Cuando
    exista un modelo centralizado compartido q se requiera modificar. ACTIONS -- usa
    de puente a MUTATIONS para modificar STATE
    */
  actions:{

    aumentarAsync : (context) => {
        setTimeout(() => context.commit('aumentar'), 2000);
    },

    reducirAsync : (context) => {
        setTimeout(() => context.commit('reducir'), 2000);
    },

    aumentarAsyncParameter : (context, cantidad) => {
        setTimeout(() => context.commit('aumentarParam', cantidad), 1500);
    },

    reducirAsyncParameter : (context, valor) => {
        setTimeout(() => context.commit('reducirParam', valor.key_cantidad ), 1500);
    }
  }
})
