<template>
  <div class="flex justify-center text-yellow-700 text-lg py-5">
    <input
      placeholder="Search a photo"
      type="text"
      v-model="query"
      @keyup.enter="hola(query)"
    />
  </div>
  <div class="flex items-center justify-center w-screen flex-wrap mt-3">
  <image-comp 
  v-for="(resultado, index) in resultados.values"
  :key="index"
  :id="resultado.id"
  :author="resultado.photographer"
  :image="resultado.URLoriginal"
  :photographer_url="resultado.photographer_url"
  :url="resultado.url"
  :alt="resultado.alt">
  </image-comp>
  </div>
</template>
<script>
import ImageComp from '../components/ImageComp.vue'
import { ref } from "vue";
import axios from "axios";
//Probamos con resultado.values en el v-for
export default {
  name: "image-view",
  components:{ ImageComp},
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
              Authorization: process.env.VUE_APP_API_KEY
            },
          }
        );
        let photoData= [];
        photoData=res.data.photos.map((elem) => {
          let info={
            'id': elem.id,
            'photographer': elem.photographer,
            'URLoriginal': elem.src.medium,
            'photographer_url': elem.photographer_url,
            'url': elem.url,
            'alt': elem.alt
          };
          return info;
        });
        this.resultados.values= photoData;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>