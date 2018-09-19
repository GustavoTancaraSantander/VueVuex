<template>
  <section>
      <h2>Carrito Compras</h2>
      <ul>
        <li v-for="(producto, index) in carrito" :key="index">
            {{ producto.name  }} ${{ producto.price.toFixed(2) }}
            <button @click="deleteProduct(index)">quitar del carrito</button>
            <button @click="deleteProductMap(index)">quitar por MAP</button>
        </li>
      </ul>
      <hr>
        <h1>Total : {{ totalCarrito.toFixed(2) }}</h1>
  </section>
</template>

<script>
import {mapState,mapGetters, mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapState(['carrito']),
      ...mapGetters(['totalCarrito']),
    },

    /* do formas de utilizar mutations */
    methods:{

      ...mapMutations(['deleteProductMap']),

      deleteProduct(index){
         this.$store.commit('deleteProducto',index);
      }
    }
  }

</script>

