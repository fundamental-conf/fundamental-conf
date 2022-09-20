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
          <router-link to="/agenda" class="fd-about__agenda">
            <svg height="21" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 22H48V14C48 12.8954 47.1046 12 46 12H8C6.89543 12 6 12.8954 6 14V22ZM0 14C0 9.58172 3.58172 6 8 6H46C50.4183 6 54 9.58172 54 14V52C54 56.4183 50.4183 60 46 60H8C3.58172 60 0 56.4183 0 52V14ZM48 28V52C48 53.1046 47.1046 54 46 54H8C6.89543 54 6 53.1046 6 52V28H48Z" fill="currentColor"/>
                <path d="M15 3C15 1.34315 16.3431 0 18 0C19.6569 0 21 1.34315 21 3V15C21 16.6569 19.6569 18 18 18C16.3431 18 15 16.6569 15 15V3Z" fill="currentColor"/>
                <path d="M33 3C33 1.34315 34.3431 0 36 0C37.6569 0 39 1.34315 39 3V15C39 16.6569 37.6569 18 36 18C34.3431 18 33 16.6569 33 15V3Z" fill="currentColor"/>
                <path d="M18 35.5C18 37.433 16.433 39 14.5 39C12.567 39 11 37.433 11 35.5C11 33.567 12.567 32 14.5 32C16.433 32 18 33.567 18 35.5Z" fill="currentColor"/>
                <path d="M30 35.5C30 37.433 28.433 39 26.5 39C24.567 39 23 37.433 23 35.5C23 33.567 24.567 32 26.5 32C28.433 32 30 33.567 30 35.5Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 33.5C38.3422 33.5 37.5 34.2506 37.5 35.5C37.5 36.7494 38.2134 37.5 39.5 37.5C40.7866 37.5 41.5 36.7593 41.5 35.5C41.5 34.2407 40.6578 33.5 39.5 33.5ZM35 35.5C35 33.0147 37.0147 31 39.5 31C41.9853 31 44 33.0147 44 35.5C44 37.9853 41.9853 40 39.5 40C37.0147 40 35 37.9853 35 35.5Z" fill="currentColor"/>
                <path d="M18 46.5C18 48.433 16.433 50 14.5 50C12.567 50 11 48.433 11 46.5C11 44.567 12.567 43 14.5 43C16.433 43 18 44.567 18 46.5Z" fill="currentColor"/>
                <path d="M30 46.5C30 48.433 28.433 50 26.5 50C24.567 50 23 48.433 23 46.5C23 44.567 24.567 43 26.5 43C28.433 43 30 44.567 30 46.5Z" fill="currentColor"/>
                <path d="M43 46.5C43 48.433 41.433 50 39.5 50C37.567 50 36 48.433 36 46.5C36 44.567 37.567 43 39.5 43C41.433 43 43 44.567 43 46.5Z" fill="currentColor"/>
              </svg>
            <span>Visit the Agenda</span>
          </router-link>
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

  &__agenda {
    gap: 0.5rem;
    display: flex;
    color: white;
    margin-top: 2rem;
    width: fit-content;
    font-size: 1.125rem;
    align-items: center;
    padding: 0.625rem 1rem;
    text-decoration: none;
    line-height: 1.3125rem;
    border-radius: 0.375rem;
    background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);

    &:hover {
      background: #2865BE;
      box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
    }

    &:active {
      background: #052E69;
    }

    &:focus {
      outline-offset: 0.125rem;
      outline: 0.125rem solid #7352AD;
      background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
    }
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
