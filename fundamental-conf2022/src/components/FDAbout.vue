<template>
  <section class="fd-about" id="about">
    <div class="fd-about__container">
      <div class="fd-about__header" aria-hidden="true">
        <h2>join the innovation</h2>
        <div aria-hidden="true"></div>
      </div>

      <div class="fd-about__content">
        <h2>join the innovation</h2>
        <p>
          On September 29th, Fundamental Conference is coming back for the second time with an all-new one-day worldwide virtual event where designers and developers come together to share ideas and innovative practices that drive the future of front-end at SAP.
        </p>
      </div>
    </div>

    <time class="fd-about__date" datetime="2022-09-29">
      <div aria-hidden="true"></div>
      <div>09<br>.29</div>
    </time>
  </section>
</template>

<style lang="scss" scoped>

.fd-about {
  display: flex;
  padding: 5rem 2rem;
  flex-direction: column-reverse;
  font-family: "Ubuntu", Arial, Helvetica, sans-serif;
 

  &__content {
    h2 {
      font-size: 1.125rem;
      margin-top: 0.5rem;
      color: $brand-color-dark-blue;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
      line-height: 1.4375rem;
      color: $text-color-dark;
      letter-spacing: 0.01em;
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
      background: linear-gradient(-33deg, #7b5cb2, #7b5cb2, #69ADF8, #82deff);
      background-size: 300%;
      font-weight: bold;
      line-height: 1;
      font-size: 6.25rem;
      text-align: right;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: animated_text 5s ease-in-out infinite;
      -moz-animation: animated_text 5s ease-in-out infinite;
      -webkit-animation: animated_text 5s ease-in-out infinite;
    }
  }

  @keyframes animated_text {
    0% { background-position: 0px 50%; }
    50% { background-position: 50% 50%; }
    100% { background-position: 0px 50%; }
  }
}

@media only screen and (min-width: 600px) {
  .fd-about {
    flex-direction: row;
    max-width: 1200px;
    padding: 5rem 10vw;
    margin: 0 auto;
    align-items: center;

    &__content {
      h2 {
        display: none;
      }

      p {
        line-height: 1.65;
        font-size: 1.25rem;
        letter-spacing: 0.01em;
        padding: 3rem 1rem 3rem 4rem;
      }
    }

    &__header {
      gap: 2rem;
      display: flex;
      align-items: flex-end;
      color: $brand-color-dark-blue;

      h2 {
        white-space: nowrap;
        line-height: 1;
        font-size: 2rem;
      }

      div {
        width: 100%;
        height: 0.0625rem;
        background: linear-gradient(63.69deg, #2865BE 16.54%, #82DEFF 83.46%);;
        background-size: 400% 400%;
	      animation: gradient 3s ease infinite;
        margin-bottom: 0.25rem;
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
    }

    &__date {
      div:first-child {
        display: none;
      }

      div {
        font-size: 12.5rem;
      }
    }
  }
}
</style>
