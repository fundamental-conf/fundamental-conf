<template>
  <scroll-parallax>
    <FDHeader />
  </scroll-parallax>

  <FDMain />

  <div v-for="el in conferences.slice().reverse()" :key="el.id">
    <FDConference :conference="el" />
  </div>

  <scroll-parallax> <FDFooter /></scroll-parallax>
</template>

<script>
import FDConference from "./components/FDConference.vue";
import FDHeader from "./components/FDHeader.vue";
import FDMain from "./components/FDMain.vue";
import FDFooter from "./components/FDFooter.vue";
import conferences from "@/assets/js/conferences.json";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  data() {
    return {
      conferences: conferences,
    };
  },
  name: "App",
  components: {
    FDHeader,
    FDMain,
    FDConference,
    FDFooter,
    ScrollParallax,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "72";
  src: local("72"), url(./assets/fonts/72-Regular.woff) format("woff");
}
@font-face {
  font-family: "72-Bold";
  src: local("72-Bold"), url(./assets/fonts/72-Bold.woff) format("woff");
}
@font-face {
  font-family: "72-Light";
  src: local("72-Light"), url(./assets/fonts/72-Light.woff) format("woff");
}
@font-face {
  font-family: "72-Black";
  src: local("72-Light"), url(./assets/fonts/72-Black.woff) format("woff");
}
@media (min-width: 650px) {
}
</style>
