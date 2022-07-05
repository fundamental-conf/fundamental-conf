<template>
  <NavBar />
  <MainComponent />
  <FDAbout />
  <FDFooter />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainComponent from "./components/MainComponent.vue";
import FDFooter from "./components/FDFooter.vue";
import FDAbout from "./components/FDAbout.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainComponent,
    FDAbout,
    FDFooter,
  },
};
</script>

<style></style>
