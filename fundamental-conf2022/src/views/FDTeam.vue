<template>
  <section class="fd_background_silver">
    <div class="fd_wrapper">
      <div class="fd_header">
        <h2 class="fd_tittle">meet the organizing team</h2>
        <div class="fd_line" aria-hidden="true"></div>
      </div>

      <ul class="fd_body">
        <li class="fd_list" v-for="member in team" :key="member.name">
          <div class="fd_body__1">
            <figure class="fd_picture">
              <img
                :src="require(`@/assets/images/team_members/${member.picture}`)"
                :alt="`Portrait of ${member.firstname} ${member.lastname}`"
              />
            </figure>
            <p class="fd_role">{{ member.role }}</p>
          </div>
          
          <div class="fd_body__2">
            <h3 class="fd_name">{{ member.firstname }} <br />{{ member.lastname }}</h3>
            <p class="fd_city">{{ member.city }}</p>
          </div>
          
          <div class="fd_body__3">
            <p class="fd_bio">{{ member.bio }}</p>
            <div class="fd_line"></div>
            <ul class="fd-member-socials">
              <li v-if="member.twitter">
                <a
                  :href="member.twitter"
                  :aria-label="`Twitter Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                  <span>Twitter</span>
                </a>
              </li>
              <li v-if="member.github">
                <a
                  :href="member.github"
                  :aria-label="`Github Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                  <span>Github</span>
                </a>
              </li>
              <li v-if="member.linkedin">
                <a
                  :href="member.linkedin"
                  :aria-label="`LinkedIn Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                >
                  <span v-html="svgs.linkedin" aria-hidden="true"></span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <FDFooter />
</template>

<script>
import svgs from "@/assets/svg/svgs.js";
import FDFooter from "../components/FDFooter.vue";

export default {
  el: "#team",
  components: {
    FDFooter
  },
  data() {
    return {
      svgs,
      team: [
        {
          firstname: "Mladen",
          lastname: "Droshev",
          city: "Montreal, Canada",
          role: "Fundamental Library Lead",
          picture: "Circle_Deno.png",
          bio: `Mladen (Deno) has been part of Fundamental Library from its inception, 
          and he is excited to be working with such talented people and team. 
          Prior to that he was working on different frontend and backend solutions.`,
          linkedin: "https://www.linkedin.com/in/droshev/",
          github: "https://github.com/droshev",
          twitter: "https://twitter.com/Deno_ca",
        },
        {
          firstname: "Inna",
          lastname: "Atanasova",
          city: "Montreal, Canada",
          role: "Developer",
          picture: "Circle_Inna.png",
          bio: `Inna is a front-end developer who is passionate about creating beautiful applications and exploring the JavaScript world.`,
          linkedin: "https://www.linkedin.com/in/inna-atanasova-654933137/",
          github: "https://github.com/InnaAtanasova",
          twitter: "https://twitter.com/Inncho",
        },
         {
          firstname: "Margot",
          lastname: "Wollny",
          city: "Walldorf, Germany",
          role: "Project Manager",
          picture: "Circle_Margot.png",
          bio: `Margot is a Project Manager at SAP and one of the initiators of UI5con, a community conference for UI5 developers. It’s the first she is part of the Fundamental Conference Organization Team, already 
          looking forward to conference and a lively exchange between developers and designers all over the world.`,
          linkedin: "https://linkedin.com/in/margot-wollny-864ba96",
        
        },

        {
          firstname: "Eniela",
          lastname: "Vela",
          city: "Montreal, Canada",
          role: "UA Developer",
          picture: "eniela.jpg",
          bio: "Eniela joined the Fundamental Library team as a UA developer in January. She is the developer behind the Fundamental Conference website.",
          linkedin: "https://www.linkedin.com/in/eniela-vela-67aba3135/",
          github: "https://github.com/ynnenu",
          twitter: "https://twitter.com/VelaEniela",
        },
        {
          firstname: "Victoria",
          lastname: "Maslova",
          city: "Vancouver, Canada",
          role: "Designer",
          picture: "Circle_Victoria.png",
          bio: `Experimental and a little bit chaotic, Victoria brings the vision of Fundamental Conference 2022 to life through graphic and web design, 
          as an intern User Interface designer on the Fundamental Library team.`,
          linkedin: "https://www.linkedin.com/in/victoria-maslova/",
        },
        {
          firstname: "Mike",
          lastname: "O’Donnell",
          city: "Denver, USA",
          role: "Developer",
          picture: "Circle_Mike.png",
          bio: ` Mike was the second developer to join the Fundamental team in 2018 and is a contributor to both the Angular and SCSS libraries. 
          Based out of Denver, he has an extensive web development background particularly in Angular/Angular JS.`,
          linkedin: "https://www.linkedin.com/in/mikerodonnell89/",
          github: "https://github.com/mikerodonnell89",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.fd_wrapper {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/TeamPageBackground.png");
  padding: 5%;
  padding-top: 10%;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  
  
  .fd_header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 2%;
    padding-bottom: 8%;
    
    .fd_tittle {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1;
      font-family: "Ubuntu";
      font-style: normal;
      letter-spacing: 0.02em;
      color: #2865be;
      order: 1;
    }
    
    .fd_line {
      width: 100%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865BE 16.54%, #82DEFF 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
    order:2;
    flex:1;
    }
  }
  
  .fd_body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2%;
    flex-wrap: wrap;
    
    
    .fd_list {
      gap: 10% 4%;
      display: flex;
      flex-direction: column;
      padding-block: 1%;
      padding: 100px 30px 0 30px;

 
  

      .fd_body__1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .fd_picture {
          position: relative;
          
          &::after {
            content: "";
            position: absolute;
            top: -2rem;
            right: 0rem;
            max-width: 6rem;
            min-width: 6rem;
            max-height: 6rem;
            min-height: 6rem;
            background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
            mix-blend-mode: color-burn;
            filter: blur(50px);
          }
          
          img {
            max-width: 10rem;
            min-width: 10rem;
            max-height: 10rem;
            min-height: 10rem;
            padding: 0.625rem;
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 10rem;
          }
        }
        
        .fd_role {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 2.1rem;
          padding-top: 4%;
          color: #2865be;
        }
      }
    }
  
    .fd_body__2 {
      display: flex;
      flex-direction: column;
      padding-top: 10%;
      
      .fd_name {
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 2.5rem;
        color: #2865be;
        background: linear-gradient(-33deg, #82deff, #69ADF8, #2865be);
        background-size: 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: animated_text 5s ease-in-out infinite;
        -moz-animation: animated_text 5s ease-in-out infinite;
        -webkit-animation: animated_text 5s ease-in-out infinite;
      }
      
   

      .fd_city {
        font-family: source-sans-3, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.15rem;
        text-transform: uppercase;
        color: #2865be;
        padding-top: 6%;
      }
    }
    
    .fd_body__3 {
      display: flex;
      flex-direction: column;
      padding-top: 5%;
      
      .fd_bio {
        font-family: source-sans-3, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.375rem;
        display: flex;
        align-items: left;
        letter-spacing: 0.01em;
        color: #052e69;
        padding-top: 10%;
      }
      
      .fd_line {
        height: 0;
        border-bottom: 1px solid #2865be;
        visibility: hidden;
      }
      
      .fd-member-socials {
        width: 100%;
        gap: 1rem;
        padding: 0;
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        list-style: none;
        justify-content: left;
        flex-wrap: wrap;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: $brand-color-dark-blue;
          gap: 6px;
          
          a {
            cursor: pointer;
            align-items: center;
            border-radius: 0.5rem;
            justify-content: center;
            transition: all 0.3s ease;
            border: 0.125rem solid transparent;
            text-decoration: none;
            color: #2865BE;
            display: flex;
            flex-direction: row;
            white-space: nowrap;
            gap: 0.5rem;
            padding: 4px;
            

            span:first-child{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 25px;
              height: 25px;
            }

            span:last-child {
              font-size: 0.875rem;
              position: relative;
              transition: all 0.3s ease-in-out;

              &::after {
                left: 0;
                bottom: 0;
                opacity: 1;
                content: '';
                width: 100%;
                height: 0.1em;
                position: absolute;
                transform: scale(0);
                transform-origin: center;
                background-color: #2865BE;
                transition: opacity 300ms, transform 300ms;
              }
            }
            
            &:hover {
              color: #2865BE;

              span:last-child {
                &::after {
                  transform: scale(1);
                }
              }
            }

            &:active {
              color: #052E69;
            }

            &:focus {
              outline: none;
              border-color: #9747FF;
              color: #2865BE;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 892px) {
  .fd_wrapper {
    padding: 15%;

    .fd_header {
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: 2%;
      padding-bottom: 8%;
      
      .fd_tittle {
        font-size: 2rem;
      }
    }
    
    .fd_body {
      
      .fd_list {
        gap: 10% 4%;
        display: flex;
        flex-direction: row;
        padding-block: 6%;
         

        .fd_body__1 {
          display: flex;
          flex-direction: column;
          
          .fd_picture {
            position: relative;
             animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;
            
            &::after {
              content: "";

              right: -2rem;

              filter: blur(20px);
            }
          }
          
          .fd_role {
            font-family: "Ubuntu";
            font-style: normal;
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2.1rem;
            padding-top: 5%;
            color: #2865be;
            text-align: center;
             animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;
          }
        }
        
        .fd_body__2 {
          display: flex;
          flex-direction: column;
          width: 20vw;
          padding-top: 5%;
          
          .fd_name {
            font-weight: 500;
            font-size: 3rem;
            line-height: 3.5rem;
            /* Blue/500 Regular */
            color: #2865be;
             animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;
          }
          
          .fd_city {
            font-family: source-sans-3, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2.15rem;
            width: 16.5vw;
            text-transform: uppercase;
            color: #2865be;
            padding-top: 0.5rem;
             animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;
          }
        }
        
        .fd_body__3 {
          
          .fd_bio {
            padding-top: 0;
            font-size: 1.25rem;
            line-height: 2rem;
             animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;

            .fd_line {
              height: 5vh;
              width: 23rem;
              border-bottom: 1px solid #2865be;
              visibility: visible;
               animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;
            }
          }

          .fd-member-socials {
              gap: 3rem;
              padding: 0;
              display: flex;
              flex-direction: row;
              margin: 1rem 0;
              list-style: none;
              justify-content: left;
               animation: wave infinite;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: 1;
position: relative;

              li a span:last-child {
                font-size: 1.125rem;
              }
            }
        }
      }
        @keyframes slide {
  0% {
    left: 100%;
    opacity: 0;
  }
  50% {
    left: 0;
    opacity: 1;
  }

} 
    }
  }
  
  .fd_wrapper .fd_body .fd_body__3 .fd_line {
    height: 5vh;
    width: 23rem;
    border-bottom: 1px solid #2865be;
    visibility: visible;
  }
}
</style>
