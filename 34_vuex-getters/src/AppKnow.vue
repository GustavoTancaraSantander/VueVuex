<template>
    <div>
      <know-count></know-count>
      <ul>
        <li v-for="conocimiento in knows" :key="conocimiento.concepts"> {{ conocimiento.concept }} </li>
      </ul>
    </div>
</template>

<script>
import knowCount from './components/knowCount'
import {mapState} from 'vuex'
export default {
  /* Lo tipico (acceso de manera directa) CODE IN 5 lines*/
/*   computed:{
    knows() {
      return this.$store.state.knows;
    },
  } */

  computed: mapState(['knows']),  // con mapState CODE IN 1 line
  components:{knowCount},
}
</script>
