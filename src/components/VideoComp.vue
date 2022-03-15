<template>
  <div class="rounded-md shadow-lg m-4 p-2 max-w-xs ">
      <div>
        <video :src="link"  controls>      
        </video>
      </div>
      <div class="text-right text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-green-500 m-4 p-2">
        <a :href="author_url" target="_blank "> @{{author}} </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'video-comp',
  props:{
      url:String,
      author:String,
      author_url:String,
      link:String,
      id:Number,
  }
}
</script>