<template>
  <section>
  <h1>Add Producto</h1>
      <form @submit.prevent = "addProduct">
        <input type="text" placeholder="nombre Producto"  v-model="name" required>
        <input type="text" placeholder="precio $"         v-model="price" required>
        <input type="submit" value="agregar">
      </form>
  <hr>
  <h2>Lista</h2>
      <ul>
        <li v-for="(product, index) in productos " :key="product.name">
         {{ index+1 }}- {{ product.name }} ---> price: {{ product.price.toFixed(2) }} $
          <button @click="addCarrito(index)">Agregar Carrito</button>
        </li>
      </ul>
  </section>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data() {
      return {
        name: '',
        price: null
      }
    },
    computed: mapState(['productos']),
    methods: {
      ...mapMutations(['addCarrito']),
      addProduct(){
          this.$store.commit('addProducto',{
            name: this.name,
            price: Number(this.price),
          });
          this.name = '', this.price=null;
      },
    }
  }
</script>
