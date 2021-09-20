<template>
  <div id="App">
    <Linkedin />
  </div>
</template>

<script>
import Linkedin from '@/views/Linkedin.vue';
export default {
  components: { Linkedin },
};
</script>

<style lang="scss">
/* App.vue */
body,
html {
  background-color: #eee;
  margin: auto;
  scroll-behavior: smooth;
}
#App {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-height: 100vh;
  padding: 1em;
  text-align: center;
}
</style>
