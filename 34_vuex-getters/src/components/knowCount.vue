<template>
    <h1> {{ knowTrue }}: conocimientos asimilados</h1>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
   /*  computed: {
      knowTrue() {
     // return this.$store.state.knows.filter((know)=>know.asimilado).length;// modo tradicional
        return this.$store.getters.knowTrue; // modo getter
      }
    }, */

      /* DEV + EFiciente ---> mapGetters */

      computed: mapGetters(['knowTrue']),

  }
</script>
