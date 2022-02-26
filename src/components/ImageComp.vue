<template>
    <div class="rounded-md shadow-md m-4 p-2 max-w-xs ">
      <div >
        <a target="_blank " :href="url">
          <img class="pt-2" :src="image" :alt="alt">
        </a>
      </div>
      <div class="text-right text-grey-600 m-4 p-2">
        <a :href="photographer_url" target="_blank "> {{author}} </a>
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