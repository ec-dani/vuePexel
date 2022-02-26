<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="text-yellow-700" v-if="mostrar">
    <p> ESTO DEBERIA VERSE?? </p>
  </div>
  <div v-else> O NO?</div>
</template>

<script>
import axios from 'axios';
import {onMounted, ref} from 'vue';
export default {
  setup() {
    let mostrar = ref(false)
    let resultados = ref();
    onMounted(()=> {
      axios.get("https://rickandmortyapi.com/api/character/").then( response => {
        resultados.value = response.data.results;
        mostrar.value= true
        console.log( resultados.value)
        console.log( mostrar.value)

        });
      
    })
    return{
      resultados,
    }
  },

}
</script>
