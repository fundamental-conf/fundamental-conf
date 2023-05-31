<template>
  <section class="fd-conference" role="region">
    <div class="fd-conference__header" aria-hidden="true">
      <h2 class="fd-conference__year" aria-label="` {{conference.year}} `">
        {{ conference.year }}
      </h2>
      <h3 class="fd-conference__month" aria-label="` {{conference.year}} `">
        {{ conference.month }}
      </h3>
    </div>
    <div class="fd-conference__wrap">
      <img
        :src="require(`@/assets/images/${conference.image}`)"
        class="fd-conference__image"
        loading="lazy"
        alt="Graphics of the Fundamental Conference {{conference.year}}"
        aria-label="`Graphics of the Fundamental Conference {{conference.year}} `"
      />
      <div class="fd-conference__pwrap">
        <p
          class="fd-conference__paragraph"
          aria-label="`Paragraph description of the Fundamental Conference {{conference.year}} `"
        >
          {{ conference.description }}
        </p>

        <a
          :href="conference.url"
          :aria-label="`URL of the Fundamental Conference {{conference.year}}`"
          target="_blank"
          rel="noreferrer"
          hreflang="en"
          ><span v-html="svgs.arrow"> </span>Get Inspired</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import svgs from "@/assets/js/svg.js";

export default {
  props: {
    conference: {},
  },

  name: "FDConference",
  components: {},
  data() {
    return {
      svgs,
    };
  },
};
</script>

<style lang="scss" scoped>
.fd-conference {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 6rem;
  gap: 3.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1;

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
  &__pwrap {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  &__header {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.5px solid #171717;
  }

  &__year {
    font-family: "72";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #171717;
    width: 71px;

    border-right: 1px solid #000000;
  }
  &__month {
    font-family: "72-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #171717;
  }
  &__image {
    filter: drop-shadow(0px 0px 2px rgba(91, 115, 139, 0.16))
      drop-shadow(0px 8px 16px rgba(91, 115, 139, 0.16));
    border-radius: 24px;
    width: 19rem;
  }

  &__paragraph {
    font-family: "72-Light";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */
    font-feature-settings: "pnum" on, "lnum" on;
    color: #000000;
  }
  a {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 0.313rem;
    width: 10.3rem;

    border: 2px solid #007ea3;
    border-radius: 6px;
    text-decoration: none;
    font-family: "72";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    z-index: 2;
    /* Blue/500 Regular */
    color: #007ea3;

    span {
      width: 24px;
      height: 24px;
      color: #007ea3;
    }
  }
}

@media only screen and (min-width: 734px) {
  .fd-conference {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 6rem;
    gap: 3.5rem;
    display: flex;
    flex-direction: column;

    &__wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1;
      gap: 4.5rem;
    }
    &__pwrap {
      display: flex;
      flex-direction: column;
      gap: 2%;
      width: 50%;
      gap: 2rem;
    }

    &__header {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px solid #171717;
    }

    &__year {
      font-family: "72";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      /* identical to box height */
      display: flex;
      align-items: center;
      color: #171717;
      width: 71px;

      border-right: 1px solid #000000;
    }
    &__month {
      font-family: "72-Light";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      /* identical to box height */
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;

      color: #171717;
    }
    &__image {
      width: 50%;
      height: 50%;
    }

    &__paragraph {
      font-size: 24px;
      line-height: 38.4px;
    }
    a {
      box-sizing: border-box;

      /* Auto layout */
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 0.313rem;
      width: 10.3rem;

      border: 2px solid #2fa3c4;
      border-radius: 6px;
      text-decoration: none;
      font-family: "72";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.125rem;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      /* Blue/500 Regular */
      color: #007ea3;
      &:hover {
        background: #e3eeff;
        border-color: #054569;
        color: #054569;
        box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
      }

      &:focus {
        outline: 0.125rem solid #7352ad;
        outline-offset: 0.0625rem;
        background: #e3eeff;
        border-color: #2865be;
      }

      span {
        width: 24px;
        height: 24px;
        color: #007ea3;
        &:hover {
          color: #054569;
        }
      }
    }
  }
}
</style>
