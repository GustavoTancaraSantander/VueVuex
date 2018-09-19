<template>
  <div id="app">
    <producto></producto>
    <hr>
    <carrito></carrito>
  </div>
</template>

<script>
  import Producto from './components/Producto.vue'
  import Carrito from './components/Carrito.vue'
    export default {
      components:{Producto, Carrito}
    }
</script>
