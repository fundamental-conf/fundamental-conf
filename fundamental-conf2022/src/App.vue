<template>
  <NavBar />
  <MainComponent />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainComponent,
  },
};
</script>

<style>
#app:fullscreen {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #2c3e50;
}
</style>
