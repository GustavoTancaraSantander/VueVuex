<template>
    <main>
      <!-- <h1> {{ name }} de profesion {{ dev }}</h1> -->
      <h2> {{ nombre }} de profesion {{ profesion }} - trabajando en {{ ciudad }}</h2>
    </main>
</template>

<script>
import {mapState} from 'vuex';
export default {
                          /* 1ra forma LARGA inneficiente*/
      /* computed: {
          name(){
            return this.$store.state.nombre;
          },
          dev(){
            return this.$store.state.profesion;
          }
        } */
                        /* 2ra forma MENOS LARGA aun se puede mejorar*/
    computed:mapState({
      name: (state) => state.nombre,
      dev:  (state) => state.profesion
    }),

  /* 3ra forma MUY PRACTICA, no obstante cada nombre del atributo debe coincidir  */

     computed: mapState(['nombre','profesion','ciudad']),

}
</script>
