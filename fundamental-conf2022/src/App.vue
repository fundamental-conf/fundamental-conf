<template>
<div>
  <div id="nav" class="fd-nav">
    <div class="fd-nav__left">
      <router-link to="/">
        <IconFig name="new_logo" />
      </router-link>
      
    </div>

    <div class="fd-nav__right">
      <router-link to="/team" class="fd-nav__link">Our Team</router-link>
    </div>
  </div>
  <router-view />
</div>
  

</template>

<script>

import Home from "./views/Home.vue";
import IconFig from "./components/IconFig.vue";


export default {
  name: "App",
  components: {
    Home,
    IconFig
},
 
};



</script>

<style lang="scss" scoped>
.fd-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: $brand-color-black;

  &__right {
    display: flex;
    gap: 1rem;
  }

  &__link {
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: $text-color;
    font-size: 1.2rem;
  }
}


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
