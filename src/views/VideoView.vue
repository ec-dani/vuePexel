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
import {ref} from 'vue';
export default {
  name:"video-view",
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
          `https://api.pexels.com/videos/search?query=${query}&per_page=20`,
          {
            headers: {
              Authorization:
                "563492ad6f91700001000001f1555d56d79b4c74ade09cdcad477727",
            },
          }
        );
        const videoData= [];
        videoData.push(
          res.data.videos.map((elem) => {
            let info = {
              'id': elem.id,
              'photographer': elem.photographer,
              'URLoriginal': elem.src.medium,
              'photographer_url': elem.photographer_url,
              'url': elem.url,
              'alt':elem.alt
            };
            return info;
          })
        );
        console.log(videoData)
        this.resultados.values= videoData[0];
        console.log(this.resultados.values);
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
