
const productos = [
    {name:'Raspberry pi 3B for IOT', price: 36.90 },
    {name:'System RFID', price: 19.0 },
    {name:'Anntena Rfid 12dbi', price: 80.0 },
    {name:'Reader 15mts', price: 69.99 },
    {name:'Tag Rfid', price: 0.30 },
  ];

const mutations = {
  //addProducto: (state, newProducto) => state.productos.push(newProducto), // no reconoce (state)->undefined
  addProducto: (productos , newProducto) => productos.push(newProducto), // line 17>> hace referencia a state:productos asume state implicitamente
};


export default {
  state: productos,
  mutations: mutations, // or (mutations,) with ES6
  //mutations,
};


