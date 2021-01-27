<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Expise</router-link> |
      <router-link to="/menuOne">Menu One</router-link>
      <router-link to="/menuTwo">Menu Two</router-link>
      <router-link to="/menuThree">Menu Three</router-link>
      <router-link to="/menuFour">Menu Four</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
