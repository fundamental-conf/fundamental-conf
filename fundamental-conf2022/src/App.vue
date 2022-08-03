<template>
  <header id="header">
    <nav id="navbar" class="fd-nav">
      <div class="fd-nav__left">
        <router-link to="/" aria-label="Home">
          <IconFig name="new_logo" />
        </router-link>
      </div>

      <div class="fd-nav__right">
        <router-link to="/team" class="fd-nav__link" aria-label="Our Team">Our Team</router-link>
      </div>
    </nav>
    <MainComponent />
  </header>

  <main id="main" class="fd-main">
    <router-view />
  </main>
</template>

<script>

import Home from "./views/Home.vue";
import IconFig from "./components/IconFig.vue";
import MainComponent from "./components/MainComponent.vue";


export default {
  name: "App",
  components: {
    Home,
    IconFig,
    MainComponent
},
 
};



</script>

<style lang="scss" scoped>
.fd-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/HomePageBackground_whole.png");
}

.fd-nav {
  display: flex;
  padding: 0 1rem;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  background-color: $brand-color-black;

  @media only screen and (min-width: 600px) {
    padding: 0 3rem;
  }

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
  max-height: calc(100vh - 3.75rem);
	overflow-y: scroll;

  }
 .normal { 
  scroll-snap-align: start;
  scroll-snap-type: none;
 }
  .panel {

 &--normal {
     /* scroll-padding: 40px; */
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
