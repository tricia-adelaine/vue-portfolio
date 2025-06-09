<!-- <script>
// import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script> -->
<template>
  <div id="app">
    <!-- <NavBar /> -->
    <!-- <AdeDashboard /> -->
    <router-view />
  </div>
</template>
<!-- <script>
// import AdeDashboard from './components/AdeDashboard.vue';
export default {
  name: "App",
  components: {
    NavBar,
    // RouterView
  },
};
</script> -->

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  background-color: white;
}
</style>
