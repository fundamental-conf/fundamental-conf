<template>
  <section class="fd_agenda" id="agenda">
    <!--Agenda Header and Line-->
   <div class="fd-agenda__container">
      <div class="fd-agenda__header">
        <h2 class="fd-agenda__title">agenda</h2>
        <div class="fd-agenda__line" aria-hidden="true"></div>
      </div>
<!--Agenda Filtering Buttons-->
      <div class="fd-agenda__buttons">
        <button type="button" class="fd-agenda__button">
            <span v-html="svgs.all" aria-hidden="true"  class="button_icon">
          </span>
          <p class="button_text"> All</p>
        </button>
         <button type="button" class="fd-agenda__button">
            <span v-html="svgs.paintbrush" aria-hidden="true"  class="button_icon">
          </span>
          <p class="button_text"> Design</p>
        </button>
         <button type="button" class="fd-agenda__button">
            <span v-html="svgs.frontend" aria-hidden="true"  class="button_icon">
          </span>
          <p class="button_text"> Development</p>
        </button>
         <button type="button" class="fd-agenda__button">
            <span v-html="svgs.accessibility" aria-hidden="true"  class="button_icon">
          </span>
          <p class="button_text"> Accessibility</p>
        </button>
      </div>

<!--Agenda Schedule Body-->
 <div class="fd-agenda-body">

  <div class="fd-agenda-body__time-box">
<time class="fd-agenda-body__time">9:00</time>
<div class="fd-agenda-body__dotted-line"  aria-hidden="true"></div>
</div>

<div class="fd-agenda-body__topic-box">
  <div class="fd-agenda-body__title-box">
<h2 class="fd-agenda-body__title">This is the title WOW </h2>
<span class="fd-agenda-body__icon"  v-html="svgs.paintbrush" aria-hidden="true" ></span>

</div>

<p class="fd-agenda-body__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing 
  elit. Sed cursus quis cursus mattis duis. Tempus lacinia 
  amet velit quam porttitor. Ut sem turpis faucibus rhoncus, 
  condimentum amet, eu imperdiet pretium. Fames sit aliquam mauris 
  ut venenatis.</p>
</div>


<div class="fd-agenda-body__element-box">
<div class="fd-agenda-body__speaker">
  <figure class=" fd-agenda-body__picture">
 <img
                :src="{ picture }"
                :alt="``"
              />
              </figure>
<div class="fd-agenda-body__speaker-details">
  <h4 class=fd-agenda-body__name> Eniela Vela 
  </h4>
  <h4 class=fd-agenda-body__role> Developer | Country
  </h4>
</div>


</div>


<div class="fd-agenda-body__buttons-box">
<button type="button" class="fd-agenda__button">
            <span v-html="svgs.all" aria-hidden="true"  class="button_icon">
          </span>
          <p class="button_text"> Add to Calendar</p>
        </button>
       
</div>
</div>

 </div>


   </div>
    </section>
    </template>

<script>
import agenda from "@/assets/agenda.json";
import svgs from '@/assets/svg/svgs.js';

export default {
  
  name: "FDAgenda",
   picture: require("../assets/images/team_members/eniela.jpg"),
  data() {
    return {
      agenda,
      svgs,
    }
  }
};
</script>

<style lang="scss" scoped>

.fd-agenda{

  flex-direction: row;
max-width: 1200px;
padding: 5rem 10vw;
margin: 0 auto;
align-items: center;

&__container{
padding: 4rem 0.75rem 3rem;
gap: 0.5rem;
   display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;


}
&__header {
      display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 8%;
}

&__title {
 font-weight: 500;
      font-size: 1.25rem;
      line-height: 1;
      font-family: "Ubuntu";
      font-style: normal;
      letter-spacing: 0.02em;
      color: #2865be;
      order: 1;
      white-space: nowrap;
}

&__line {
 width: 100%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865BE 16.54%, #82DEFF 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
    order:2;
}
&__buttons {

    display: flex;
    margin: 2rem;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
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

  .button_text { 
font-family: 'Ubuntu';
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
color: #2865BE;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

  }
  .button_icon {
   width:2rem;

   color:#2865BE;


  }

}

}
.fd-agenda-body {

  &__time-box {
   align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 7rem;


  }
  &__time{
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 97.9%;
display: flex;
align-items: center;
text-align: center;

/* Gradient 3 (Test) */
background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

  }

  &__dotted-line {
     border-left: 2px dashed #3E86EF;
    height:3rem;
  }


  &__title-box {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
 
  &__title {
    font-family: 'Ubuntu';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 41px;
display: flex;
align-items: center;
padding-bottom: 2rem;

/* Blue/500 Regular */
color: #2865BE;

  }

  &__icon {

width: 22.88px;
color: #2865BE;
  }

  &__paragraph {
    font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.01em;

/* Blue/600 Dark */
color: #052E69;
  }

&__element-box {

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 1rem;
}

&__speaker {
  display: flex;
  flex-direction: row;
  gap:3rem;
}

&__picture{
  img {
    width: 5rem;
height: 5rem;
border-radius: 5rem;
border: .0625rem solid red;
  }
}

&__speaker-details {

display: flex;
flex-direction: column;

}

&__name {
font-family: 'Ubuntu';
font-style: normal;
font-weight: 500;
font-size: 1.125rem;
line-height: 1.313rem;

display: flex;
align-items: center;
text-align: justify;

/* Blue/500 Regular */
color: #2865BE;
padding-top:1rem;
}

&__role {
  padding-top:0.5rem;
  font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1.438rem;
/* identical to box height */
display: flex;
align-items: center;
text-align: justify;
text-transform: uppercase;

/* Blue/500 Regular */
color: #2865BE;

}

&__buttons-box{

  padding-top:1rem;
  display: flex;
  flex-direction: row;
}

 
}
</style>