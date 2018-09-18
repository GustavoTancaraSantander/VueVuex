<template>
  <div id="app">

      <!-- <h1> Cantidad Async: {{ cantidad }}</h1>
      <button @click="aumentar">Aumentar</button>
      <button @click="reducir">Reducir</button> -->

      <h1> Cantidad Async (mapActions): {{ cantidad }}</h1>
      <button @click="aumentarAsync">Aumentar</button>
      <button @click="reducirAsync">Reducir</button>

      <h1> Cantidad Async (mapActions) with Parameters: {{ cantidadParameter }}</h1>
      <button @click="aumentarAsyncParameter(12)">+12</button>
      <button @click="reducirAsyncParameter({ key_cantidad: 18 })">-18</button>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {

  computed:mapState(['cantidad','cantidadParameter']),
  methods:mapActions(['aumentarAsync',
                      'reducirAsync',
                      'aumentarAsyncParameter',
                      'reducirAsyncParameter']),
        

  /* methods SIN mapAcctions */
       /*  methods: {
          aumentar() {
            // this.$store.commit('aumentar'); // Con Mutations
            this.$store.dispatch('aumentarAsync');  // con Acction
          },
          reducir() {
            // this.$store.commit('reducir');  // Con Mutations
            this.$store.dispatch('reducirAsync')  // con Acction
          }
        } */

}
</script>
