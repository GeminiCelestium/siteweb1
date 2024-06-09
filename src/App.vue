<template>
  <PageAccueil msg="Site Web 1"/>
</template>

<script>
import PageAccueil from './components/PageAccueil.vue'

export default {
  name: 'App',
  components: {
    PageAccueil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
