<template>
  <main>
    <h1> Cantidad: {{ cantidad }}</h1>
    <button @click="aumentar()">Aumentar</button>
    <button @click="reducir()">Reducir</button>

  </main>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
   computed: mapState(['cantidad']),
   methods: mapMutations(['aumentar', 'reducir']),
/* Al usasr methods y acceder directamente exite un problema de mutaciones directas.
   No existiria un log ni un rastro de q componente lo cambio ,etc */
  /*         methods:{
            aumentar() {
            // this.$store.state.cantidad++; // MALA PRACTICA
                this.$store.commit('aumentar'); // BUENA ARQUITECTURA, pero aun <> code lines
            },
            reducir() {
            // this.$store.state.cantidad--;// MALA PRACTICA
                this.$store.commit('reducir'); // BUENA ARQUITECTURA, pero aun <> code lines
            },
          }
  */
  /* Entonces para solucionarlo existen las mutations (setters) directamente en
     modelo centralizado (store.js) */


}
</script>

