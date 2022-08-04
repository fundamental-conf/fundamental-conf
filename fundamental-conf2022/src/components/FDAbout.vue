<template>
  <section class="fd-about" id="about">
    <div class="fd-about__container">
      <div class="fd-about__header" aria-hidden="true">
        <h2>join the innovation</h2>
        <div role="presentation"></div>
      </div>

      <div class="fd-about__content">
        <h2>join the innovation</h2>
        <p>
          On September 29th, Fundamental Conference is coming back for the second time with an all-new one-day worldwide virtual event where designers and developers come together to share ideas and innovative practices that drive the future of front-end at SAP.
        </p>
      </div>
    </div>

    <time class="fd-about__date" datetime="2022-09-28">
      <div role="presentation"></div>
      <div>09<br>.29</div>
    </time>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>

.fd-about {
  display: flex;
  padding: 5rem 2rem;
  flex-direction: column-reverse;
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
 

  &__content {
    h2 {
      font-size: 1.6rem;
      margin-top: 0.5rem;
      color: $text-color-accent;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
      line-height: 1.375rem;
      color: $text-color-dark;
      font-family: "Source Sans 3", "Arial", sans-serif;
    }
  }

  &__header {
    display: none;
  }

  &__date {
    display: flex;
    margin-bottom: 2rem;
    
    div:first-child {
      width: 100%;
      height: 0.0625rem;
      margin-top: 3rem;
      background: #2865be;
    }

    div {
      font-size: 5rem;
      text-align: right;
      font-weight: bold;
      -webkit-text-stroke: 0;
      background: linear-gradient(33.68deg,#7b5cb2 11.17%,#82deff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: textclip-69f4e308 2s linear infinite alternate;
      animation: textclip-69f4e308 2s linear infinite alternate;
    }
  }
}

@media only screen and (min-width: 600px) {
  .fd-about {
    flex-direction: row;
    max-width: 1200px;
    padding: 5rem 10vw;
    margin: 0 auto;

    &__content {
      h2 {
        display: none;
      }

      p {
        line-height: 1.5;
        font-size: 1.2rem;
        padding: 3rem 1rem 3rem 4rem;
      }
    }

    &__header {
      gap: 2rem;
      display: flex;
      margin-top: 3rem;
      align-items: flex-end;
      color: $text-color-accent;

      h2 {
        white-space: nowrap;
        line-height: 1;
        font-size: 2.4rem;
      }

      div {
        width: 100%;
        height: 0.0625rem;
        background: #2865be;
        margin-bottom: 0.25rem;
      }
    }

    &__date {
      div:first-child {
        display: none;
      }

      div {
        font-size: 8rem;
      }
    }
  }
}
</style>
