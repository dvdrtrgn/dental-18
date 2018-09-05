<template>
  <div id="App">
    <div id="Nav">
      <router-link to="./">LinkedIn</router-link> |
      <router-link to="./home">Home</router-link> |
      <router-link to="./about">About</router-link> |
      <router-link to="./scroll">Scroll</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang='scss'>
body,
html {
  margin: auto;
  scroll-behavior: smooth;
}
#App {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #eee;
  border: 1px solid #ddd;
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
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
