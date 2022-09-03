<template>
  <MainComponent />
  <FDAbout /> 
  <FDSpeakers />

  <FDCallForContent />
  <FDMission/>

  <SocialsContainer />  
  <FDFooter />
</template>
<script>

import MainComponent from "../components/MainComponent.vue";
import FDAbout from "../components/FDAbout.vue";
import FDCallForContent from "../components/FDCallForContent.vue";
import FDFooter from "../components/FDFooter.vue";
import NavBar from "../components/NavBar.vue";
import SocialsContainer from "../components/SocialsContainer.vue";
import FDMission from "../components/FDMission.vue";

import FDSpeakers from "../components/FDSpeakers.vue";




export default {
  name: "Home",
  components: {
    MainComponent,
    NavBar,
    FDAbout,
    FDSpeakers,
    FDCallForContent,
    FDFooter,
    SocialsContainer,
    FDMission,

},
};
</script>

<style lang="scss" scoped>
  .container {
    max-height: calc(100vh - 3.75rem);
    overflow-y: scroll;
  }
</style>
