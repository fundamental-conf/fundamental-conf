<template>
<section class="fd_background_silver fd_container">
<!--bubble left--> 
<svg viewBox="0 0 494 998" fill="none" xmlns="http://www.w3.org/2000/svg" style ="
height: 50vh; top: 40vh;  left: 0;
    position: absolute;">
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
<svg viewBox="0 0 772 625" fill="none" xmlns="http://www.w3.org/2000/svg" style ="height: 50vh;  position: absolute;   justify-self: right;
    align-self: self-start;;
    right:0;">
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
  <div class = "fd_about_header">
  <h4 class ="fd_about_tittle">join the innovation
  </h4>
  <div class = "fd_about_line"></div>
    <div class = "fd_about_element"> <h1 class="fd_date"> 09
.29</h1></div>
</div>
    <p class ="fd_paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut nunc justo libero erat nibh sit lectus eu bibendum.
 Vehicula magna non sem sagittis porta malesuada. 
 Eu ipsum tortor porta tincidunt. Nibh amet ac viverra tellus euismod id.
      </p>
</div>


  </section>
</template>

<script>


export default {
  components: {

  },
};
</script>

<style lang="scss" scoped>

.fd_about {

  padding-top: 15vh;
&--uptodated {
  bottom: 20%;
}
.fd_about_header{
  display: flex;
   -webkit-flex-direction: row; 
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2%;

  .fd_about_tittle {
  
    font-weight: 400;
    font-size: 4vw;
    line-height: 8vh;
    font-family: 'Ubuntu';
    font-style: normal;
    letter-spacing: 0.02em;
    color: #2865BE;
    order:1;
    padding-top: 3%;
  }

  .fd_about_line {

  
    padding-top: 6%;
    border-bottom: 1px solid #2865BE;
    order:2;
    flex: 1;
  }
  .fd_about_element
  { 
 

order:3;
flex:1;


    .fd_date {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 40vh;
  line-height: 97.9%;
  /* or 235px */
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.02em;
  background: linear-gradient(320deg,   #7B5CB2, #2865BE, #69ADF8,
#82DEFF);
 -webkit-text-stroke: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite alternate;

    }
     } @keyframes textclip {
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
  }}
   
    
    .fd_paragraph {

   width: 70vh;
    left: 5vh;
    top: -37vh;
    position: relative;
    font-family: "Source Sans 3";
    font-style: normal;
    font-weight: 400;
    font-size: 3.4vh;
    line-height: 5vh;
    text-align: justify;
    letter-spacing: 0.01em;
    color: #052E69;

    }
@media screen {
  
}
  

}
  
</style>
