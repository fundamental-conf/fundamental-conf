<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <icon-fig name="logo" width="33" height="64"></icon-fig>
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
  background-color: #1a1126;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  height: 91px;
  flex: none;
  order: 0;
}
nav {
  display: flex;
  flex-direction: row;
  top: calc(50% - 32px / 2 - 0.5px);
  font-style: normal;
  transition: 0.5s ease all;
  width: 90%;
  display: flex;
  margin: 0 auto;
  line-height: 32px;
  align-items: center;
}
li {
  list-style-type: none;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
</style>
