<template>

  <!-- <NavBar />
<MainComponent />
<FDAbout /> 
<FDCallForContent />

  <FDFooter /> -->


<div class="container">
  <NavBar class="normal" />
  <MainComponent class="panel" />
  <FDAbout class="panel"/> 
  <FDCallForContent class="panel"/>
  <SocialsContainer />
  <FDFooter class="normal" />
</div>

</template>

<script>

import MainComponent from "./components/MainComponent.vue";
import FDAbout from "./components/FDAbout.vue";
import FDCallForContent from "./components/FDCallForContent.vue";
import FDFooter from "./components/FDFooter.vue";
import NavBar from "./components/NavBar.vue";
import SocialsContainer from "./components/SocialsContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainComponent,
    FDAbout,
    FDCallForContent,
    FDFooter,
    SocialsContainer,
  },
 
};



</script>

<style lang="scss" scoped>
.container {
  max-height: 100vh;
	overflow-y: scroll;
  scroll-snap-type: y mandatory;

  }
 .normal { 
  scroll-snap-align: start;
  scroll-snap-type: none;
 }
  .panel {
  scroll-snap-align: start;

 &--normal {
     scroll-padding: 40px;
  }
  }



</style>
