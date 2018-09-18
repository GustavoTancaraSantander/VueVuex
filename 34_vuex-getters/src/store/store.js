import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

 export const storeKnow = new Vuex.Store({
  state:{
    knows:[
      {concept: 'State 1er paso config store.js', asimilado: true},
      {concept: 'State 2do paso conexion in main.js for access', asimilado: true},
      {concept: '***State Tree = todos los componentes incluyendo App.vue tienen acceso', asimilado: false},
      {concept: '***Esto es posible al--> Vue.use(Vuex)', asimilado: true},
      {concept: 'Necesario export --> const storeKnow', asimilado: false},
      {concept: '---Por cada TAG (<know-count>) utilizado en el componente central (App.vue) se debe importar (import knowCount from ./components/knowCount) y declararlo (components:{knowCount},)', asimilado: false},
      {concept: 'Getter aplicado para realizar calculos y opercions del modelo state', asimilado: false},
      {concept: 'Getter modo mas organizado de logica y utilizado por referencia desde el componente (return this.$store.getters.knowTrue;)', asimilado: false},
      {concept: 'Getter invocacion + eficiente con el uso de: mapGetters (computed: mapGetters([`knowTrue`]))', asimilado: false},
    ]
  },

  getters: {
      knowTrue: (state) => state.knows.filter((know) => know.asimilado).length,
  }

})
