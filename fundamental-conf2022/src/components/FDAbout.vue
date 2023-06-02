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
          <a   class="fd-about__agenda" target="_blank" rel="noreferrer" aria-label="Link to Fundamental Library's agenda youtube link" href="https://www.youtube.com/watch?v=hU_lCVbGIXU&list=PLChUxte5emJatZ4s96DLhPE3LlVjbl2Au">

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z" fill="currentColor"/>
<path d="M10.1139 8.72356L14.8778 11.1055C15.6149 11.4741 15.6149 12.5259 14.8778 12.8944L10.1139 15.2763C9.44897 15.6088 8.66666 15.1253 8.66666 14.3819V9.61799C8.66666 8.87461 9.44897 8.39111 10.1139 8.72356Z" fill="currentColor"/>
</svg>

      
            <span>Watch Session Recordings</span>
</a>
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
      background-clip: text;
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
