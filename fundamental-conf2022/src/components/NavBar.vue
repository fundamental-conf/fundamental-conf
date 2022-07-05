<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
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
  height: 91px;
  flex: none;
  order: 0;
}
nav {
  transition: 0.5s ease all;
  padding-right: 123px;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
li {
  list-style-type: none;
  padding-left: 89px;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  padding-top: 20px;
  font-size: 28px;
  font-weight: 400;
  font-family: Ubuntu;
  font-style: normal;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
}

.branding {
  padding-left: 116px;
  padding-top: 14px;
}
</style>
