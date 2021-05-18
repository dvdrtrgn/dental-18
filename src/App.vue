<template>
  <div id="App">
    <div id="Nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

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
#Nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
