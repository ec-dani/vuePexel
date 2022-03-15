<template>
  <div class="flex justify-center text-yellow-700 text-lg py-5">
    <input
      placeholder="Search a video"
      type="text"
      v-model="query"
      @keyup.enter="hola(query)"
    />
  </div>
  <div class="flex items-center justify-center w-screen flex-wrap">
    <video-comp
    v-for="(resultado, index) in resultados.values"
    :key="index"
    :url="resultado.url"
    :author="resultado.author"
    :author_url="resultado.author_url"
    :link="resultado.link"
    >
    </video-comp>
  </div>
</template>

<script>
import VideoComp from '@/components/VideoComp.vue'
import axios from 'axios';
import {ref} from 'vue';
export default {
  name:"video-view",
  components: {VideoComp},
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
              Authorization: process.env.VUE_APP_API_KEY
            },
          }
        );
        let videoData= [];
        let link;
        videoData = res.data.videos.map((elem) => {
            elem.video_files.forEach(element => {
              if( element.width >= 680){ 
                link= element.link;
                }
            });
            let info = {
              'url': elem.url,
              'image': elem.image,
              'author': elem.user.name,
              'author_url': elem.user.url,
              'link':link,
              'id':elem.id,
            };
            return info;
          });
        console.log(videoData)
        this.resultados.values= videoData;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
