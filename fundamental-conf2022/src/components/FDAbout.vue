<template>
  <section class="fd_background_silver fd_container">
    <!--bubble left-->
    <svg
      viewBox="0 0 494 998"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 50vh; top: 40vh; left: 0; position: absolute"
    >
      <g style="mix-blend-mode: color-burn" filter="url(#filter0_f_58_644)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.9802 847.805C253.839 822.462 304.824 662.153 335.352 521.638C362.457 396.881 358.573 257.219 241.863 190.142C112.228 115.636 -57.0352 136.004 -176.557 227.425C-309.958 329.462 -399.196 486.663 -334.942 631.334C-266.507 785.416 -82.5579 877.515 98.9802 847.805Z"
          fill="url(#paint0_linear_58_644)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_58_644"
          x="-500.25"
          y="0.698486"
          width="993.438"
          height="996.655"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="72"
            result="effect1_foregroundBlur_58_644"
          />
        </filter>
        <linearGradient
          id="paint0_linear_58_644"
          x1="-227.209"
          y1="558.098"
          x2="477.852"
          y2="50.7375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7B5CB2" />
          <stop offset="1" stop-color="#82DEFF" />
        </linearGradient>
      </defs>
    </svg>

    <!--buble right-->
    <svg
      viewBox="0 0 772 625"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="
        height: 50vh;
        position: absolute;
        justify-self: right;
        align-self: self-start;
        right: 0;
      "
    >
      <g style="mix-blend-mode: color-burn" filter="url(#filter0_f_58_643)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M860.522 295.503C915.402 172.706 793.362 40.9033 679.234 -64.7891C577.906 -158.628 447.178 -239.906 326.364 -199.176C192.17 -153.935 125.424 -24.1248 149.322 113.86C175.994 267.867 275.841 424.37 441.691 466.728C618.33 511.842 796.188 439.455 860.522 295.503Z"
          fill="url(#paint0_linear_58_643)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_58_643"
          x="0.541992"
          y="-353.95"
          width="1017.54"
          height="978.014"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="72"
            result="effect1_foregroundBlur_58_643"
          />
        </filter>
        <linearGradient
          id="paint0_linear_58_643"
          x1="837"
          y1="18"
          x2="737"
          y2="387.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7B5CB2" />
          <stop offset="1" stop-color="#82DEFF" />
        </linearGradient>
      </defs>
    </svg>

    <div class="fd_about">
      <div class="fd_about_header">
        <h4 v-show="!mobile" class="fd_about_tittle">join the innovation</h4>
        <div class="fd_about_line"></div>
        <div class="fd_about_element"><h1 class="fd_date">09 .29</h1></div>
      </div>

      <p class="fd_paragraph">
        <span v-show="mobile" class="fd_join"> join the innovation</span><br />
        On September 29th, Fundamental Conference is coming back for the second
        time with an all-new one-day worldwide virtual event where designers and
        developers come together to share ideas and innovative practices that
        drive the future of front-end at SAP.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 900) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.fd_about {
  padding-top: 15vh;
  &--uptodated {
    bottom: 20%;
  }
  .fd_about_header {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 5%;
    gap: 2%;

    .fd_about_tittle {
      font-weight: 400;
      font-size: 4vw;
      line-height: 8vh;
      font-family: "Ubuntu";
      font-style: normal;
      letter-spacing: 0.02em;
      color: #2865be;
      order: 1;
      padding-top: 3%;
    }

    .fd_about_line {
      padding-top: 6%;
      border-bottom: 1px solid #2865be;
      order: 2;
      flex: 1;
    }
    .fd_about_element {
      order: 3;
      flex: 1;

      .fd_date {
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 700;
        font-size: 37vh;
        line-height: 97.9%;
        /* or 235px */
        display: flex;
        align-items: center;
        text-align: right;
        letter-spacing: 0.02em;
        background: linear-gradient(33.68deg, #7b5cb2 11.17%, #82deff 100%);
        -webkit-text-stroke: 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite alternate;
      }
    }
    @keyframes textclip {
      0% {
        background-position: 10% 0%;
      }
      50% {
        background-position: 91% 100%;
      }
      100% {
        background-position: 10% 0%;
      }
    }
  }

  .fd_paragraph {
    width: 43vw;
    left: 3%;
    top: -45vh;
    position: relative;
 
    font-style: normal;
    font-weight: 400;
    font-size: 2.7vh;
    line-height: 4.5vh;
  
    letter-spacing: 0.01em;
    color: #052e69;
    .fd_join {
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2rem;
      /* identical to box height */
      color: #2865be;
    }
  }
 
}



@media (max-width: 900px) {
  .fd_about {
    padding-top: 0;
  }
  svg {
    display:none;
  }
  .fd_about .fd_about_header {
    padding: 2%;
  }
   .fd_about .fd_about_header .fd_about_line {

      padding-top: 8%;
    }
    
   .fd_about .fd_about_header .fd_about_element .fd_date {
      font-size: 30vh;
    }
      .fd_about  .fd_paragraph {
       width: 65vh;
    top: 0;
    /* position: relative; */
    /* font-family: "Source Sans 3"; */
    /* font-style: normal; */
    font-weight: 400;
   font-size: 2.3vh;
    line-height: 4.5vh;

    /* letter-spacing: 0.01em; */

            
          }
        }
      
  @media (max-width: 750px) {

  .fd_about {
    padding-top: 0;
        gap: 2vh;
    display: flex;
    flex-direction: column;
  }
  .fd_about .fd_about_header {
    padding: 0%;
    width: -webkit-fill-available;
  }
  svg {
    display:none;
  }
  .fd_about .fd_about_header {
    padding: 1%;
  }
   .fd_about .fd_about_header .fd_about_line {

      padding-top: 18%;
    }
    
   .fd_about .fd_about_header .fd_about_element .fd_date {
      font-size: 23vh;
    }
      .fd_about  .fd_paragraph {
         width: 90%;
    display: flex;
 
    flex-direction: column;
    top: 0;
    font-weight: 400;
    font-size: 2.3vh;
    line-height: 4.5vh;
    // text-align: justify;
    letter-spacing: 0.01em;

            
          }

}

  

</style>
