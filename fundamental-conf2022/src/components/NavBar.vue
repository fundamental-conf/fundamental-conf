<template>
  <header :class="{ 'scrolled-nav': scrollPosition }" id="navbar">
    <nav>
      <div class="branding">
        <icon-fig name="logo"></icon-fig>
      </div>
      <ul class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Past Events' }"
            >Past Events</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import IconFig from "./IconFig.vue";

export default {
  components: {
    IconFig,
  },
};
</script>

<style lang="scss" scoped>


header {
  background-color: $brand-color-black;
  width: 100%;
  //   position: fixed; //are we keeping the nav bar at all time?
  transition: 0.5s ease all;
  color: #fff;
  height: 12vh;
  flex: none;
  order: 0;

  nav {
  transition: 0.5s ease all;
  
  display: flex;
  margin: 0 auto;
  align-items: center;

  .branding {
    padding-left: 10%;
    padding-top: 1%;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
      padding-top: 2%;
    font-size: 2.5vw;
  font-weight: 400;
  font-family: Ubuntu;
  font-style: normal;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  li {
  // list-style-type: none;
  padding-right:5%;
}

}


}

}



</style>
