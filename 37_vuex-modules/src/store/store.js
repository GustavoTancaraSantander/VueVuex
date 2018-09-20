
import Vue from 'vue'
import Vuex from'vuex'
Vue.use(Vuex);

import products from './modules/productos.js'

/* ESTRUCTURA con modules de productos */

export const store = new Vuex.Store({

  state:{
     carrito:[],
  },
  getters:{
    totalCarrito: (state) => state.carrito.reduce((total, prod) => total + prod.price, 0.0),
  },

  mutations:{
    //addProducto: (state, newProducto) => state.productos.push(newProducto),
    addCarrito:  (state,indice)      => state.carrito.unshift(state.productos[indice]),
    deleteProducto: (state,indice)   => state.carrito.splice(indice,1),
    deleteProductMap: (state,indice) => state.carrito.splice(indice,1),
  },
  modules:{
    productos:products
  }

})
