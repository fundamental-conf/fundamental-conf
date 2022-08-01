<template>
<div class="container">
  <MainComponent class="panel" />
  <FDAbout class="panel"/> 
  <FDCallForContent class="panel"/>
  <SocialsContainer class="panel"/>
  <FDTeam class="panel"/>
</div>

</template>

<script>

import MainComponent from "../components/MainComponent.vue";
import FDAbout from "../components/FDAbout.vue";
import FDCallForContent from "../components/FDCallForContent.vue";
import FDFooter from "../components/FDFooter.vue";
import NavBar from "../components/NavBar.vue";
import SocialsContainer from "../components/SocialsContainer.vue";




export default {
  name: "Home",
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

@media (max-width: 650px) {
  .container {
    scroll-snap-type: none;
  }
.container .panel {
   scroll-snap-align: start;
   scroll-snap-type: none;

}}

</style>
