<template>
<div>
  <div id="nav" class="fd-nav">
    <div class="fd-nav__left">
      <router-link to="/home">
        <IconFig name="new_logo" />
      </router-link>
    </div>

    <div class="fd-nav__right">
      <router-link to="/team" class="fd-nav__link">Our Team</router-link>
    </div>
  </div>
  
  <router-view />

  <FDFooter />
</div>
  

</template>

<script>

import Home from "./views/Home.vue";
import IconFig from "./components/IconFig.vue";
import FDFooter from "./components/FDFooter.vue";


export default {
  name: "App",
  components: {
    Home,
    IconFig,
    FDFooter
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
    align-items: center;
  }

  &__link {
    // color: $text-color;
    outline: none;
    position: relative;
    width: fit-content;
    padding: 0.5rem 1rem;
    text-decoration: none;     
    border-radius: 0.25rem;
    outline-offset: 1.25rem;
    transition: all 0.3s ease-in-out;
    border: 0.125rem solid transparent;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;

    &::after {
      left: 0;
      bottom: 0;
      opacity: 1;
      content: '';
      width: 100%;
      height: 0.1em;
      position: absolute;
      transform: scale(0);
      transform-origin: center;
      background-color: #fff;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      &::after {
        transform: scale(1);
      }
    }

    &:focus {
        border-color: #82DEFF;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }
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
