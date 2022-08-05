<template>
  <section class="fd-mission" id="mission">
    <div class="fd-mission__container">
      <h2 class="fd-mission__title" aria-label="our mission">
        <span aria-hidden="true">our</span>
        <span aria-hidden="true">mission</span>
      </h2>
      <div class="fd-mission__text">
        <i class="fd-mission__italic"
          >Fundamental Conference is designed to highlight the best of front-end
          development and design in one place.
        </i>
        <div class="fd-mission__line" role="presentaton"></div>
        <p class="fd-mission__paragraph">
          We believe everyone should have an intelligent toolkit for building
          accessible applications through the practice of inclusive design. By
          celebrating excellence and innovation, we aim to inspire our community
          to make the future of technology a better place for all.
        </p>
      </div>
    </div>
    <div class="fd-mission__icons">
      <IconFig name="design" aria-label ="design icon in blue"></IconFig>
      <IconFig name="plus" aria-label ="plus sign in blue">></IconFig>
      <IconFig name="frontend" aria-label ="frontend icon in blue">></IconFig>
      <IconFig name="plus" aria-label ="plus sign in blue">></IconFig>
      <IconFig name="accessibility" aria-label ="accessibility icon in blue">></IconFig>
    </div>
  </section>
</template>

<script>
import IconFig from "./IconFig.vue";

export default {
  components: {
    IconFig,
  },
  name: "FDMission",
};
</script>

<style lang="scss" scoped>
.fd-mission {
  display: flex;
  padding: 5rem 2rem;
  flex-direction: column;
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;

  &__container {
    display: flex;
    gap: 5rem;
    flex-direction: column;
  }
  &__title {
    display: flex;
    flex-direction: column;
    font-size: 4.5rem;
    background: linear-gradient(-33deg, #82deff, #69adf8, #7b5cb2, #7b5cb2);
    background-size: 300%;
    font-weight: bold;
    line-height: 1;
    text-align: left;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animated_text-6c3e9a48 5s ease-in-out infinite;
    -moz-animation: animated_text-6c3e9a48 5s ease-in-out infinite;
    -webkit-animation: animated_text-6c3e9a48 5s ease-in-out infinite;
  }

  &__icons {
    height: 33rem;
    justify-content: center;

    display: flex;
    flex-direction: column;
    padding-top: 15%;

    :nth-child(even) {
      height: 9rem;
      vertical-align: middle;
      justify-content: center;

      padding-top: 5%;
      padding-bottom: 5%;
    }
  }
  &__text {
    gap: 8px;
    padding: 2%;
  }
  &__italic {
    font-family: sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    /* Blue/600 Dark */
    color: #052e69;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  &__line {
    height: 5vh;
    width: 10rem;
    border-bottom: 1px solid #2865be;
    visibility: visible;
  }
  &__paragraph {
    padding-top: 5vh;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    /* Blue/600 Dark */
    color: #052e69;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
}

@media (min-width: 892px) {
  .fd-mission {
    max-width: 1200px;
    padding: 5rem 10vw;
    margin: 0 auto;
    flex-direction: column;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;

    &__container {
      display: flex;
     gap: 5rem;
      flex-direction: row;
    }
    &__title {
      display: flex;
      flex-direction: column;
      font-size: 8rem;
      text-align: right;
    }

    &__icons {
      height: 7rem;

      flex-direction: row;
   
      :nth-child(even) {
        height: 4rem;
      }
    }
    &__text {
      gap: 8px;
     padding-top: 3%;


    }
    &__italic {
      font-size:1.25rem;
      line-height: 1.65;
    }

    &__line {
      height: 3vh;
    }
    &__paragraph {
      padding-top: 3vh;
      font-size:1.25rem;
      line-height: 1.65;
    }
  }
}
</style>
