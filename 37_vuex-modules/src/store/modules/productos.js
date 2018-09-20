
const productos = [
    {name:'Raspberry pi 3B for IOT', price: 36.90 },
    {name:'System RFID', price: 19.0 },
    {name:'Anntena Rfid 12dbi', price: 80.0 },
    {name:'Reader 15mts', price: 69.99 },
    {name:'Tag Rfid', price: 0.30 },
  ];

const mutations = {
  /* No reconoce (state)->undefined, la razon puede ser logica dado Vue.use.(Vuex)
                   y como este no es un archivo .vue sino .js                     */
  //addProducto: (state, newProducto) => state.productos.push(newProducto),
  addProducto: (productos , newProducto) => productos.push(newProducto), 
};

export default {
  state: productos,
  // mutations: mutations, // or (mutations,) with ES6
  mutations,
};


