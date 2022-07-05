<template>
  <div class="fd_background">
    <div class="fd_bubble">
      <icon-fig name="bubble"></icon-fig>
    </div>
    <div class="fd_bubble--right"><icon-fig name="bubble"></icon-fig></div>
    <div class="fd_dots"><icon-fig name="dots-right"></icon-fig></div>

    <div class="fd_title_box">
      <h1 class="fd_title">Fundamental Conf</h1>
      <h3 class="fd_subtitle">future of front-end and design</h3>
    </div>
  </div>
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
.fd_background {
  background-color: $brand-color-black;
  height: 100%;
  .fd_bubble {
    mix-blend-mode: overlay;
  }
  &--left {
    width: 768.29px;
    height: 710.14px;
    rotate: 50%;
  }
  .fd_dots {
    width: 1082px;
    height: 1067.9px;
    left: 1621.1px;
    top: 1543.51px;
    transform: rotate(-124.07deg);
    mix-blend-mode: screen;
  }
  .fd_title_box {
    padding-left: 30%;
    font-family: "Ubuntu";
    font-style: normal;
    .fd_title {
      font-weight: 500;
      font-size: 86px;
      line-height: 99px;
      /* identical to box height */
      letter-spacing: 0.05em;
      color: #ffffff;
      display: inline;
      &::after {
        content: "22";
        color: $brand-color-blue;
        font-size: 34px;
        font-weight: 850;
      }
    }
    .fd_subtitle {
      font-weight: 400;
      font-size: 48px;
      line-height: 55px;
      letter-spacing: 0.088em;
      color: $brand-color-blue;
      right: 70px;
      top: -10%;
    }
  }
}
</style>
