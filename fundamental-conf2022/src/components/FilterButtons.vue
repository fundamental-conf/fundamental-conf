<template>
   <div class="fd-agenda__wrap">
  <div class="fd-agenda__buttons" v-for="filter in filters" :key="filter">
    <button class="fd-agenda__button" @click="() => filterPosts(filter.name)">
      <span
        class="fd-agenda__icon"
        v-html="filter.icon"
        aria-hidden="true"
      ></span>
      {{ filter.name }}
    </button>
  </div>
</div>
</template>

<script>
import svgs from "@/assets/svg/svgs.js";
const filters = [
  { name: "All", icon: svgs.all },
  { name: "Design", icon: svgs.design },
  { name: "Development", icon: svgs.frontend },
  { name: "Accessibility", icon: svgs.accessibility },
];
export default {
  props: ["filterPosts"],
  data() {
    return {
      svgs,
      filters,
    };
  },
};
</script>

<style lang="scss" scoped>
.fd-agenda {

    &__wrap{
        justify-content: center;
    gap: 5%;
    display: flex;
    flex-direction: row;
    flex: wrap;
    flex-wrap: wrap;
    }
  &__buttons {
    display: flex;
    margin: 1%;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    flex-direction: column;
  }

  &__button {
    box-sizing: border-box;
padding:1rem;
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0.23rem 0.72rem;
gap: 0.23rem;
    height: 2.5rem;
background: #E3EEFF;
border: 1.38751px solid #2865BE;
border-radius: 23.1252px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

font-family: "Ubuntu";
      font-style: normal;
      font-weight: 500;
      font-size: 0.69rem;
      line-height: 0.813rem;
      /* identical to box height */
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      /* Blue/500 Regular */
      color: #2865be;

      /* Inside auto layout */
     
    &:active {
      background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
border-radius: 38.7106px;
color:white;

    }
  &:hover{

      background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
border-radius: 38.7106px;
color:white;

    
  }
  }

&__icon{
    width: 2rem;
color: #2865be;
&:active {
  color: white;
}
&:hover{
  color:white;
}
}}

@media (min-width: 750px) {
    .fd-agenda {

&__wrap{
    gap:0

}

}
}

</style>
