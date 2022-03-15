<template>
  <nav class="flex justify-center text-3xl mx-3 py-4">
    <router-link  to="/">Image </router-link> |
    <router-link to="/video"> Video </router-link>
  </nav>
  <router-view />
</template>

<style>

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
