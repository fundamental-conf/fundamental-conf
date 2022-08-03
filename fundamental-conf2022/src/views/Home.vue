<template>
  <FDAbout /> 
  <FDCallForContent />
  <SocialsContainer />
  <FDFooter />
</template>
<script>

import FDAbout from "../components/FDAbout.vue";
import FDCallForContent from "../components/FDCallForContent.vue";
import FDFooter from "../components/FDFooter.vue";
import NavBar from "../components/NavBar.vue";
import SocialsContainer from "../components/SocialsContainer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    FDAbout,
    FDCallForContent,
    FDFooter,
    SocialsContainer,
    },
};
</script>

<style lang="scss" scoped>
  .container {
    max-height: calc(100vh - 3.75rem);
    overflow-y: scroll;
  }
</style>
