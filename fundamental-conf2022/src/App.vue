<template>
  <NavBar />
  <MainComponent />
  <FDAbout />
  <FDCallForContent />
  <FDFooter />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainComponent from "./components/MainComponent.vue";
import FDAbout from "./components/FDAbout.vue";
import FDCallForContent from "./components/FDCallForContent.vue";
import FDFooter from "./components/FDFooter.vue";


export default {
  name: "App",
  components: {
    NavBar,
    MainComponent,
    FDAbout,
    FDCallForContent,
    FDFooter,
  },
};
</script>

<style></style>
