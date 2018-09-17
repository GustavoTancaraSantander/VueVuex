  
                        //fase 2 -> modelo referenciado

const modelCompartido = {
    instructor:{
        nombre:' Juan Andres',
    }
}
                          
new Vue({
    el:'#app1', 
    data: modelCompartido,
 });
 new Vue({
    el:'#app2', 
    data: modelCompartido,
 });

                            //fase 1 -> modelos independientes 

new Vue({
   el:'#instancia1', 
   data: {
        instructor:{
            nombre:' Juan Andres N',
        }
   },
});
new Vue({
   el:'#instancia2', 
   data: {
       instructor:{
           nombre:' Juan Andres C',
       }
   },
});