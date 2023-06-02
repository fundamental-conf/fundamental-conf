<template>
  <section class="fd-main" role="main">
    <div class="fd-container">
      <span v-html="svgs.fundamental_logo" aria-hidden="true"> </span>
      <img
        src="@/assets/images/Logo-2.png"
        class="fd-container__picture"
        alt="Graphical representation of the fundamental logo"
      />
      <h1 class="fd-container__title">Fundamental Conference</h1>
      <p class="fd-container__paragraph">
        Fundamental Conference is a global, virtual conference organized by the
        Fundamental Library team to spark curiosity and to start a conversation
        concerning the future of modern enterprise design.
      </p>
    </div>
  </section>
</template>

<script>
import svgs from "@/assets/js/svg.js";

export default {
  props: {
    conference: {},
  },

  name: "FDMain",
  components: {},
  data() {
    return {
      svgs,
    };
  },
};
</script>

<style lang="scss" scoped>
.fd-main {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 6rem;
}
.fd-container {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0px;
  padding-top: 25%;
  gap: 2.25rem;

  span {
    width: 11.7rem;
  }
  &__picture {
    width: 72px;
    height: 72px;
    margin-top: 3rem;
  }
  &__title {
    font-family: "72-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
    /* or 36px */
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;

    color: #077ea4;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    word-break: break-all;
    word-spacing: 100vw;
  }

  &__paragraph {
    font-family: "72-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 140%;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;

    color: #000000;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
}

@media only screen and (min-width: 734px) {
  .fd-container {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 10rem;
    gap: 2.25rem;

    span {
      width: 19.6rem;
    }

    &__picture {
      width: 96px;
      height: 96px;
    }
    &__title {
      font-size: 48px;
      line-height: 55px;
      align-self: center;
      word-spacing: 0;
    }
    &__paragraph {
      font-size: 24px;
      line-height: 36.4px;
    }
  }
}
</style>
