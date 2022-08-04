<template>
<section class="fd-mission" id="mission">

    <div class="fd-mission__container">
      <h2 class="fd-mission__title" aria-label="our mission">
        <span aria-hidden="true">our</span>
        <span aria-hidden="true">mission</span>
      </h2>
    
<div class="fd-mission__icons">
              <IconFig name="design" ></IconFig>
               <IconFig name="plus" class="fd_mission__icons"></IconFig>
                <IconFig name="frontend" class="fd_mission__icons"></IconFig>
                 <IconFig name="plus" class="fd_mission__icons"></IconFig>
                  <IconFig name="accessibility" class="fd_mission__icons"></IconFig>
     </div>      
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
    gap: 2rem;
    flex-direction: column;
  
  }
  &__title {
    display: flex;
    flex-direction: column;
    font-size: 4.5rem;
    text-align: left;
    font-weight: bold;
    -webkit-text-stroke: 0;
    background: linear-gradient(33.68deg,#82deff 11.17%,#7b5cb2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: textclip-69f4e308 2s linear infinite alternate;
    animation: textclip-69f4e308 2s linear infinite alternate;
  }

&__icons {
  width:20rem;
  height:20rem;
  justify-content: center;

  display: flex;
  flex-direction: column;
  :nth-child(even) {
    background-color: red;
    width:15rem;
    height:15rem;
    vertical-align:middle;
     justify-content: center;
   
}
  }
  
}
</style>