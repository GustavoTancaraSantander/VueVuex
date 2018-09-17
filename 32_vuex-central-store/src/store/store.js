
/* PASO 1 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


/* Almacen Centralizado (necesario export para tener acceso a el desde main.js)*/
 export const storeTest = new Vuex.Store({
    state: {
      cantidad: 0
    }
});
