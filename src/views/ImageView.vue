<template>
  <div class="flex justify-center text-yellow-700 text-lg py-5">
    <input
      placeholder="Aquí viene el input"
      type="text"
      v-model="query"
      @keyup.enter="hola(query)"
    />
  </div>
  <p class="text-yellow-700"
  v-for="(resultado, index) in resultados.values"
  :key="index">
   {{resultado.id}}
  </p>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
//Probamos con resultado.values en el v-for
export default {
  name: "imeage-view",
  setup() {
    let resultados = ref([]);
    return {
      resultados,
    };
  },
  methods: {
    async hola(query) {
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${query}&per_page=20`,
          {
            headers: {
              Authorization:
                "563492ad6f91700001000001f1555d56d79b4c74ade09cdcad477727",
            },
          }
        );
        const photoData= [];
        photoData.push(
          res.data.photos.map((elem) => {
            let info = {
              'id': elem.id,
              'photographer': elem.photographer,
              'URLoriginal': elem.src.original,
            };
            return info;
          })
        );
        console.log(photoData)
        this.resultados.values= photoData[0];
        console.log(this.resultados.values);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>