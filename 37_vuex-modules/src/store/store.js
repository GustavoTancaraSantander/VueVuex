import Vue from 'vue'
import Vuex from'vuex'
Vue.use(Vuex);

import products from './modules/productos'
import cart from './modules/carrito'

export const store = new Vuex.Store({
                  /* ESTRUCTURA con modules de productos + carrito COMPLETO */
  modules:{
    productos:products,
    carrito: cart,
  }

})
/*  Notar que se produce un new state por cada modulo. */
/* En realidad se produce new state, getters, mutations, actions; producido al exportar*/
