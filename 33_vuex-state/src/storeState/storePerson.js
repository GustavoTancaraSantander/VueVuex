import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const storePerson = new Vuex.Store({

  state : {
    nombre: 'Juan Andres',
    profesion: 'developer',
    ciudad: 'Valencia'
  }

});
