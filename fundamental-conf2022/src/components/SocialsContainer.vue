<template>
  <section class="fd-socials-container">
    <Socials>
      <template v-slot:logos>
        <a href="https://www.youtube.com/c/FundamentalLibrary" target="_blank" v-html="svgs.youtube"></a>
      </template>
      <h3>YouTube</h3>
      <p>Revisit all the insightful talks of last year's conference on our channel</p>
    </Socials>

    <Socials>
      <template v-slot:logos>
        <a href="https://blogs.sap.com/tags/3a0dd723-dbeb-43fa-b8df-076c15568a86/" target="_blank" v-html="svgs.blog"></a>
      </template>
      <h3>SAP Blogs</h3>
      <p>Catch our latest tips and learn new insights into our Fundamental Library tagged blog series. </p>
    </Socials>

    <Socials>
      <template v-slot:logos>
        <a href="https://twitter.com/fundamental_lib" target="_blank" v-html="svgs.twitter"></a>
        <a href="https://www.linkedin.com/company/sap-graph/" target="_blank" v-html="svgs.linkedin"></a>
      </template>
      <h3>Twitter + LinkedIn</h3>
      <p>Follow us on your favourite social media platform to not miss another update on the latest Fundamental releases. </p>
    </Socials>
    
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
    display: flex;
    padding-top: 16.875rem;
    padding-bottom: 16.875rem;
    gap: clamp(6vw, 8vw, 10vw);
    background: $brand-color-silver;
    padding-left: clamp(6vw, 8vw, 10vw);
    padding-right: clamp(6vw, 8vw, 10vw);
  }

  @media (max-width: 768px) { 
    .fd-socials-container {
      gap: 5vh;
      padding: 10vw;
      flex-direction: column;
    }
  }
</style>
