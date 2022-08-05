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
        <div class="fd-mission__line" aria-hidden="true"></div>
        <p class="fd-mission__paragraph">
          We believe everyone should have an intelligent toolkit for building
          accessible applications through the practice of inclusive design. By
          celebrating excellence and innovation, we aim to inspire our community
          to make the future of technology a better place for all.
        </p>
      </div>
    </div>
    <div class="fd-mission__icons">
      <div class="fd-mission__icon">
        <span v-html="svgs.design" aria-hidden="true"></span>
        <h3>Design</h3>
      </div>
      <div class="fd-mission__icon plus">
        <span v-html="svgs.plus" aria-hidden="true"></span>
      </div>
      <div class="fd-mission__icon">
        <span v-html="svgs.frontend" aria-hidden="true"></span>
        <h3>Front-end Development</h3>
      </div>
      <div class="fd-mission__icon plus">
        <span v-html="svgs.plus" aria-hidden="true"></span>
      </div>
      <div class="fd-mission__icon">
        <span v-html="svgs.accessibility" aria-hidden="true"></span>
        <h3>Accessibility</h3>
      </div>
    </div>
  </section>
</template>

<script>
import IconFig from "./IconFig.vue";
import svgs from '@/assets/svg/svgs.js';

export default {
  components: {
    IconFig,
  },
  name: "FDMission",
  data() {
    return {
      svgs,
    }
  }
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
    background: linear-gradient(-33deg, #7b5cb2, #7b5cb2, #69ADF8, #82deff);
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
    gap: 1.25rem;
    display: flex;
    margin-top: 5rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  &__icon {
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.25rem;
      height: 4.25rem;
      color: #3E86EF;
    }

    &.plus {
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    h3 {
      font-size: 1.125rem;
      color: #2865BE;
      font-weight: 400;
      max-width: 8rem;
      text-align: center;
      font-family: "Ubuntu", Arial, Helvetica, sans-serif;
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
    color: #052e69;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  &__line {
    width: 50%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865BE 16.54%, #82DEFF 83.46%);;
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;
    margin: 2.25rem 0;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &__paragraph {
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
      flex-direction: row;
    }

    &__icon {
      span {
        width: 6.25rem;
        height: 6.25rem;
      }

      &.plus {
        span {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      h3 {
        font-size: 2rem;
        max-width: none;
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
   
   &__paragraph {
      font-size:1.25rem;
      line-height: 1.65;
    }
  }
}
</style>
