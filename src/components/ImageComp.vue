<template>
    <div class="rounded-md shadow-lg m-4 p-2 max-w-xs ">
      <div >
        <a target="_blank " :href="url">
          <img class="pt-2" :src="image" :alt="alt">
        </a>
      </div>
      <div class="text-right text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-green-500 m-4 p-2">
        <a :href="photographer_url" target="_blank "> @{{author}} </a>
      </div>
    </div>
</template>

<script>
export default {
  name:'image-comp',
  props:{
    id: Number,
    author: String,
    image: String, 
    photographer_url: String,
    url: String,
    alt: String
  }
}
</script>

<style>

</style>