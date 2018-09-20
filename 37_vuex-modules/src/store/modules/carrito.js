import products from './productos'

const carrito = [];

const gettersModules = {
  totalCarrito: (carrito) => carrito.reduce((total, prod) => total + prod.price, 0.0),
};

const mutationsModules = {
  //addCarrito:  (state,indice) => state.carrito.unshift(state.productos[indice]),
 // Notar que se produce un new state por cada modulo. ej: line 12 addCarrito (import)
    addCarrito:       (carrito, indice) => carrito.unshift(products.state[indice]),
    deleteProducto:   (carrito, indice) => carrito.splice(indice,1),
    deleteProductMap: (carrito, indice) => carrito.splice(indice,1),
};

export default {
  state:    carrito,
  getters:  gettersModules,
  mutations:mutationsModules,
};

