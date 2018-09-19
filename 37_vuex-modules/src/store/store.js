
import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex);
/* ESTRUCTURA sin modules */
export const store = new Vuex.Store({

  state:{
     productos: [
       {name:'Raspberry pi 3B for IOT', price: 36.90 },
       {name:'System RFID', price: 19.0 },
       {name:'Anntena Rfid 12dbi', price: 80.0 },
       {name:'Reader 15mts', price: 69.99 },
       {name:'Tag Rfid', price: 0.30 },
     ],
     carrito:[],
  },
  getters:{
    totalCarrito: (state) => state.carrito.reduce((total, prod) => total + prod.price, 0.0),
  },

  mutations:{
    addProducto: (state,newProducto) => state.productos.push(newProducto),
    addCarrito:  (state,indice)      => state.carrito.unshift(state.productos[indice]),
    deleteProducto: (state,indice)   => state.carrito.splice(indice,1),
    deleteProductMap: (state,indice) => state.carrito.splice(indice,1),
  },

})
