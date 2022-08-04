<template>
  <section class="fd_background_silver">
    <div class="fd_wrapper">
      <div class="fd_header">
        <p class="fd_tittle">meet the organizing team</p>
        <div class="fd_line"></div>
      </div>

      <ul class="fd_body">
        <li class="fd_list" v-for="member in team" :key="member.name">
          <div class="fd_body__1">
            <figure class="fd_picture">
              <img
                :src="require(`@/assets/images/team_members/${member.picture}`)"
                :alt="`Portrait of ${member.firstname}`"
              />
            </figure>
            <p class="fd_role">{{ member.role }}</p>
          </div>
          <div class="fd_body__2">
          
              <h2 class ="fd_name">{{ member.firstname }}</h2>
              <br />
              <h2 class="fd_name">{{ member.lastname }}</h2>
            
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
                  v-html="svgs.twitter + '<span> Twitter</span>'"
                >
                </a>
              </li>
              <li v-if="member.github">
                <a
                  :href="member.github"
                  :aria-label="`Github Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                  v-html="svgs.github + '<span> Github </span>'"
                >
                </a>
              </li>
              <li v-if="member.linkedin">
                <a
                  :href="member.linkedin"
                  :aria-label="`LinkedIn Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                  v-html="
                    svgs.linkedin + `<span class='test' > LinkedIn </span>`
                  "
                >
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import svgs from "@/assets/svg/svgs.js";
console.log(svgs);
export default {
  el: "#team",
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
          role: "UA Developer",
          picture: "Circle_Inna.png",
          bio: `Inna is a front-end developer who is passionate about creating beautiful applications and exploring the JavaScript world.`,
          linkedin: "https://www.linkedin.com/in/inna-atanasova-654933137/",
          github: "https://github.com/InnaAtanasova",
          twitter: "https://twitter.com/Inncho",
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
  padding: 5%;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  .fd_header {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2%;
    padding-bottom: 8%;
    .fd_tittle {
      font-weight: 500;
      font-size: 1rem;
      line-height: 4vh;
      font-family: "Ubuntu";
      font-style: normal;
      letter-spacing: 0.02em;
      color: #2865be;
      order: 1;
    }
    .fd_line {
      height: 2vh;
      border-bottom: 1px solid #2865be;
      order: 2;
      flex: 1;
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
   
      .fd_body__1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .fd_picture {
           position: relative;
    //        display: block;
    // margin-block-start: 1em;
    // margin-block-end: 1em;
    // margin-inline-start: 40px;
    // margin-inline-end: 40px;
          &::after {
            content: "";
            position: absolute;
            top: -2rem;
            right: 0rem;
            max-width: 6rem;
            min-width: 6rem;
            max-height: 6rem;
            min-height: 6rem;
            background: linear-gradient(45deg, #2865BE 0%, #82DEFF 100%);
            mix-blend-mode: color-burn;
            filter: blur(50px);
          }
          img {
               max-width: 7rem;
    min-width: 7rem;
    max-height: 7rem;
    min-height: 7rem;
    padding: 0.625rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 7rem;
          }
        }
        .fd_role {
          font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
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
          font-size: 3rem;
          line-height: 1.5rem;
          /* Blue/500 Regular */
          color: #2865be;
        }
        .fd_city {
             font-family: source-sans-3, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.15rem;
    text-transform: uppercase;
    color: #2865be;
    padding-top: 10%;
        }
      }
      .fd_body__3 {
        display: flex;
        flex-direction: column;
        padding-top: 7%;
        .fd_bio {
           font-family: source-sans-3, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 2rem;
          display: flex;
          align-items: left;
          letter-spacing: 0.01em;
          color: #052e69;
        }
        .fd_line {
          height: 5vh;
          wdith:23rem;
          border-bottom: 1px solid #2865be;
        }
        .fd-member-socials {
          gap: 4rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    list-style: none;
    justify-content: left;
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: $brand-color-dark-blue;
            padding: 8px 16px 8px 0px;
            gap: 6px;
            a {
              cursor: pointer;
              width: 25px;
              height: 25px;
              align-items: center;
              border-radius: 0.5rem;
              justify-content: center;
              transition: all 0.3s ease;
              border: 0.125rem solid transparent;
              text-decoration: none;
              color: $brand-color-dark-blue;
              display: inline-block;
              flex-direction: row;
                 white-space: nowrap;
             &::v-deep span {
              color:#2865BE;
              &:hover {
                color: #977dc1;
              }
              &:active {
                color: #7b5cb2;
              }
              &:focus {
                outline: none;
                border-color: #82deff;
                color: $brand-color-blue;
              }
             }
              &:hover {
                color: #977dc1;
              }
              &:active {
                color: #7b5cb2;
              }
              &:focus {
                outline: none;
                border-color: #82deff;
                color: $brand-color-blue;
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
    align-items: flex-start;
    gap: 2%;
    padding-bottom: 8%;
    .fd_tittle {
      font-size: 2rem;
      line-height: 8vh;
     
    }
    .fd_line {
      height: 6vh;
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
          &::after {
            content: "";
          
           
            right: -2rem;
            
            filter: blur(20px);
          }
          img {
               max-width: 11rem;
    min-width: 11rem;
    max-height: 11rem;
    min-height: 11rem;
 
    border-radius: 11rem;
          }
        }
        .fd_role {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-size: 1.75rem;
    line-height: 2.1rem;
           padding-top: 16%;
          /* Blue/500 Regular */
          color: #2865be;
        }
      }
      .fd_body__2 {
        display: flex;
        flex-direction: column;
        width: 20vw;
        padding-top: 7%;
        .fd_name {
         
          font-weight: 500;
          font-size: 3rem;
          line-height: 1.5rem;
          /* Blue/500 Regular */
          color: #2865be;
        }
        .fd_city {
          font-family: source-sans-3, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.0rem;
          line-height: 2.15rem;
          width: 16.5vw;
          text-transform: uppercase;
          color: #2865be;
          padding-top: 15%;
        }
      }
      .fd_body__3 {
        .fd_bio {
        .fd_line {
          height: 5vh;
          width:23rem;
          border-bottom: 1px solid #2865be;
        }
        .fd-member-socials {
          gap: 3rem;
          padding: 0;
          display: flex;
          flex-direction: row;
          margin: 1rem 0;
          list-style: none;
         justify-content: left;
         
         
            
                
            }
        
          
            
          }
        }
      }
    }
  }
}
    
</style>