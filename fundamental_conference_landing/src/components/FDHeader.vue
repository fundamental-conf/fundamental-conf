<template class="fd-header">
  <div class="fd-background">
    <scroll-parallax>
      <span
        v-html="svgs.mobile_header"
        aria-hidden="true"
        class="fd-background__mobile"
      >
      </span>

      <span
        v-html="svgs.desktop_header"
        aria-hidden="true"
        class="fd-background__desktop"
      >
      </span>
    </scroll-parallax>
  </div>
</template>

<script>
import svgs from "@/assets/js/svg.js";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  props: {
    conference: {},
  },

  name: "FDHeader",
  components: {
    ScrollParallax,
  },
  data() {
    return {
      svgs,
    };
  },
};
</script>

<style lang="scss" scoped>
.fd-header {
  margin-top: 0;
}
.fd-background {
  &__mobile {
    position: absolute;
    width: 100%;
  }

  &__desktop {
    visibility: hidden;
    position: absolute;
    clear: left;
  }
}

@media only screen and (min-width: 734px) {
  .fd-background {
    &__desktop {
      position: absolute;
      width: 100%;
      visibility: visible;
    }
    &__mobile {
      visibility: hidden;
      position: absolute;
    }
  }
}
</style>
