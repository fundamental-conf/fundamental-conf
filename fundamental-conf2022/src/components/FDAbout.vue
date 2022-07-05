<template>
  <div class="fd_background_silver">
    <div class="fd_bubble"><icon-fig name="bubble"></icon-fig></div>
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
.fd_background_silver {
  background-color: $brand-color-silver;

  .fd_bubble {
    width: 717.88px;
    height: 705.55px;
    left: -93.72px;
    top: 1282.95px;

    background: linear-gradient(119.56deg, #7b5cb2 27.79%, #82deff 116.93%);
    mix-blend-mode: color-burn;
    filter: blur(144px);
    transform: matrix(0.99, -0.1, -0.1, -0.99, 0, 0);
  }
}
</style>
