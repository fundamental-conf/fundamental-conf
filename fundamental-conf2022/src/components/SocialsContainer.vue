<template>
  <section class="fd-socials-container" id="social-links">
    <div class="fd-socials-container__header">
      <h2>follow us</h2>
      <div role="presentation"></div>
    </div>
    <div class="fd-socials-container__blocks">
      <Socials>
        <template v-slot:logos>
          <a href="https://www.youtube.com/c/FundamentalLibrary" aria-label="Link to Fundamental Library's youtube link" target="_blank" v-html="svgs.youtube"></a>
        </template>
        <h3>YouTube</h3>
        <p>Revisit all the insightful talks of last year's conference on our channel</p>
      </Socials>

      <Socials>
        <template v-slot:logos>
          <a href="https://blogs.sap.com/tags/3a0dd723-dbeb-43fa-b8df-076c15568a86/" aria-label="Link to Fundamental Library's SAP blog post link" target="_blank" v-html="svgs.blog"></a>
        </template>
        <h3>SAP Blogs</h3>
        <p>Catch our latest tips and learn new insights into our Fundamental Library tagged blog series. </p>
      </Socials>

      <Socials>
        <template v-slot:logos>
          <a href="https://twitter.com/fundamental_lib" aria-label="Link to Fundamental Library's Twitter link"  target="_blank" v-html="svgs.twitter"></a>
          <a href="https://www.linkedin.com/company/sap-graph/" aria-label="Link to Fundamental Library's LinkedIn link"  target="_blank" v-html="svgs.linkedin"></a>
        </template>
        <h3>Twitter + LinkedIn</h3>
        <p>Follow us on your favourite social media platform to not miss another update on the latest Fundamental releases. </p>
      </Socials>
    </div>
    
  </section>
</template>

<script>
import Socials from "./Socials.vue";
import svgs from '@/assets/svg/svgs.js';
console.log(svgs)
export default {
  name: "SocialsContainer",
  components: {
    Socials,
  },
  data() {
    return {
      svgs,
    }
  }
};
</script>

<style lang="scss" scoped>
  .fd-socials-container {
    padding: 5rem 2rem 10rem;

    &__blocks {
      gap: 3rem;
      display: flex;
      flex-direction: column;
    }
   
    &__header {
      display: none;
      gap: 2rem;
      margin-bottom: 3rem;
      align-items: flex-end;
      color: $brand-color-dark-blue;

      h2 {
        white-space: nowrap;
        line-height: 1;
        font-size: 2rem;
        font-family: "Ubuntu", Arial, Helvetica, sans-serif;
      }

      div {
        width: 100%;
        height: 0.0625rem;
        background: linear-gradient(-45deg, #2865be, #7B5CB2, #82DEFF);
        background-size: 400% 400%;
	      animation: gradient 3s ease infinite;
        margin-top: 3rem;
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
  }

  @media only screen and (min-width: 600px) {
    .fd-socials-container {
      padding: 10rem 10vw;
      margin: 0 auto;
      max-width: 1200px;
      
      &__blocks {
        flex-direction: row;
        
        gap: 10%;
        justify-content: space-between;
      }

      &__header {
        display: flex;
        margin-bottom: 6rem;
      }
      
    }
  }
</style>
