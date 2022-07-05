<template>
  <section class="fd_background_silver fd_container">
<!--bubble left--> 
<svg viewBox="0 0 494 998" fill="none" xmlns="http://www.w3.org/2000/svg" style ="
height: 50vh; top: 40vh">
<g style="mix-blend-mode:color-burn" filter="url(#filter0_f_58_644)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M98.9802 847.805C253.839 822.462 304.824 662.153 335.352 521.638C362.457 396.881 358.573 257.219 241.863 190.142C112.228 115.636 -57.0352 136.004 -176.557 227.425C-309.958 329.462 -399.196 486.663 -334.942 631.334C-266.507 785.416 -82.5579 877.515 98.9802 847.805Z" fill="url(#paint0_linear_58_644)"/>
</g>
<defs>
<filter id="filter0_f_58_644" x="-500.25" y="0.698486" width="993.438" height="996.655" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_58_644"/>
</filter>
<linearGradient id="paint0_linear_58_644" x1="-227.209" y1="558.098" x2="477.852" y2="50.7375" gradientUnits="userSpaceOnUse">
<stop stop-color="#7B5CB2"/>
<stop offset="1" stop-color="#82DEFF"/>
</linearGradient>
</defs>
</svg>

<!--buble right-->
<svg viewBox="0 0 772 625" fill="none" xmlns="http://www.w3.org/2000/svg" style ="height: 50vh;  position: absolute;
    left: 111vh;">
<g style="mix-blend-mode:color-burn" filter="url(#filter0_f_58_643)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M860.522 295.503C915.402 172.706 793.362 40.9033 679.234 -64.7891C577.906 -158.628 447.178 -239.906 326.364 -199.176C192.17 -153.935 125.424 -24.1248 149.322 113.86C175.994 267.867 275.841 424.37 441.691 466.728C618.33 511.842 796.188 439.455 860.522 295.503Z" fill="url(#paint0_linear_58_643)"/>
</g>
<defs>
<filter id="filter0_f_58_643" x="0.541992" y="-353.95" width="1017.54" height="978.014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_58_643"/>
</filter>
<linearGradient id="paint0_linear_58_643" x1="837" y1="18" x2="737" y2="387.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#7B5CB2"/>
<stop offset="1" stop-color="#82DEFF"/>
</linearGradient>
</defs>
</svg>

<div class = "fd_about">
  <h4 class ="fd_about_tittle">join the innovation
  </h4>
  <div class = "fd_about_line"></div>
    <div class = "fd_about_element"> <h1 class="fd_date"> 09
.29</h1></div>
      <p class ="fd_paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut nunc justo libero erat nibh sit lectus eu bibendum.
 Vehicula magna non sem sagittis porta malesuada. 
 Eu ipsum tortor porta tincidunt. Nibh amet ac viverra tellus euismod id.
      </p>
    
  
</div>

<!-- <div class = "fd_about--uptodate">
  <h4 class ="fd_about_tittle--right">stay up to date
  </h4>
  <div class = "fd_about_line"></div>
    <div class = "fd_about_element--right"> </div>
      <p class ="fd_paragraph--right fd_paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut nunc justo libero erat nibh sit lectus eu bibendum.
 Vehicula magna non sem sagittis porta malesuada. 
 Eu ipsum tortor porta tincidunt. Nibh amet ac viverra tellus euismod id.
      </p>
     
  
</div> -->

  </section>
</template>

<script>


export default {
  components: {

  },
};
</script>

<style lang="scss" scoped>
.fd_background_silver {
  background-color: $brand-color-silver;
.fd_about {

  width:70%;
  padding-top: 15vh;
&--uptodate {
   padding-top: 90vh;
}
  .fd_about_tittle {
    position: absolute;
    width: 437px;
    height: 55px;
    // left: 237px;
    // top: 171px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 55px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.02em;
    color: #2865BE;

  &--right {
width: 346px;
height: 55px;
left: 1213px;
top: 817px;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 55px;
display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.02em;

color: #2865BE;
  }
  }

  .fd_about_line {

    position: relative;
    display:flex;
    width: 509px;
    height: 0px;
    left:44vh;
     top: 3vh;

    border: 1px solid #2865BE;
  }
  .fd_about_element
  {  position: relative;
  left: 90vh;
top: -10vh;
width: 342px;
height: 470px;


    .fd_date {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 240px;
  line-height: 97.9%;
  /* or 235px */
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.02em;

  color: #69ADF8;

    }}
    .fd_paragraph {

      width: 70vh;
left: 5vh;
top: -25vh;
position: relative;
font-family: 'Source Sans 3';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 34px;
display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.01em;

color: #052E69;
    }

  

}
  
}
</style>
