
<template>


<div class="container">
  <MainComponent class="panel" />
  <FDAbout class="panel"/> 
  <SocialsContainer class="panel"/>
  <FDFooter class="normal" />

</div>

</template>

<script>

import MainComponent from "@/components/MainComponent.vue";
import FDAbout from "@/components/FDAbout.vue";
import FDFooter from "@/components/FDFooter.vue";
import FDTeam from "@/components/FDTeam.vue";
import SocialsContainer from "@/components/SocialsContainer.vue";


export default {
  name: "Home",
  components: {
    MainComponent,
    FDAbout,
    FDFooter,
    SocialsContainer,
    FDTeam,
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