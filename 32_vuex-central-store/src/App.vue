<template>
 <!--    <contador :count = "cantidad"
              @aumentar = "cantidad++"
              @reducir  = "cantidad--"
              >
        </contador> -->
    <contador></contador>
</template>

<script>
import Contador from "./components/Contador";
  export default {
    components: {Contador},
    /* data() {
      return {
        cantidad: 0
      };
    } */
  };
</script>
