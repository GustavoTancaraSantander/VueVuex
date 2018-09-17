<template>
  <div>
    <h2>Contador: {{ count }}</h2>
      <button @click="aumentar()">Aumentar</button>
      <button @click="reducir()">Reducir</button>
  </div>
</template>

<script>

  export default {
    //props:['count'],
    methods:{
      aumentar() {
       // this.$emit('aumentar');
       this.$store.state.cantidad++;
      },
      reducir() {
       // this.$emit('reducir');
       this.$store.state.cantidad--;
      }
    },

    computed: {
      count() {
        return this.$store.state.cantidad;
      }
    }
  }
</script>
