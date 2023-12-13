<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  background-color: #1b2838;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c7d5e0;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #c7d5e0;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
