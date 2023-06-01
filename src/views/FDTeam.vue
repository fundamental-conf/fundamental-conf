<template>
  <section class="fd_background_silver">
    <div class="fd_wrapper">
      <router-link to="/" aria-label="Home" class="fd_homeButton">
        <span class="fd_backSpan" v-html="svgs.back"></span>
        Home
      </router-link>
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
            <h3 class="fd_name">
              {{ member.firstname }} <br />{{ member.lastname }}
            </h3>
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
    FDFooter,
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
.fd_homeButton {
  display: none;
}

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
    margin-top: 20%;

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
      background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
      background-size: 400% 400%;
      -webkit-animation: gradient-17d1a7e2 3s ease infinite;
      animation: gradient-17d1a7e2 3s ease infinite;
      margin-bottom: 0.25rem;
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
      margin-top: 4.875rem;
      

      .fd_body__1 {
        display: flex;
        align-items: center;
        flex-direction: column;

        .fd_picture {
          img {
            max-width: 9.35rem;
            min-width: 9.35rem;
            max-height: 9.35rem;
            min-height: 9.35rem;
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 9.35rem;
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
      padding-top: 1.5rem;
      flex-direction: column;

      .fd_name {
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 2.5rem;
        color: #2865be;
        background: linear-gradient(-33deg, #82deff, #69adf8, #2865be);
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
      padding-top: 2.1875rem;

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
        margin: 2rem 0;
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
            color: #2865be;
            display: flex;
            flex-direction: row;
            white-space: nowrap;
            gap: 0.5rem;
            padding: 4px;

            span:first-child {
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
                content: "";
                width: 100%;
                height: 0.1em;
                position: absolute;
                transform: scale(0);
                transform-origin: center;
                background-color: #2865be;
                transition: opacity 300ms, transform 300ms;
              }
            }

            &:hover {
              color: #2865be;

              span:last-child {
                &::after {
                  transform: scale(1);
                }
              }
            }

            &:active {
              color: #052e69;
            }

            &:focus {
              outline: none;
              border-color: #9747ff;
              color: #2865be;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 700px) {
  .fd_wrapper{
    .fd_header {
      margin-top: 7rem;
      margin-bottom: 2rem;
      
      .fd_tittle {
        font-size: 2rem;
      }
    }

    .fd_body {
      .fd_list {
        gap: 1rem 3rem;
        flex-wrap: wrap;
        flex-direction: row;

        .fd_body__1 {
          max-width: 15rem;
          
          .fd_role {
            text-align: center;
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2.1rem;
            padding-top: 1.5rem;
          }

          .fd_picture {
            position: relative;
            animation: wave infinite;
            animation-name: slide;
            animation-duration: 5s;
            animation-iteration-count: 1;

            img {
              max-width: 14.35rem;
              min-width: 14.35rem;
              max-height: 14.35rem;
              min-height: 14.35rem;
              -o-object-fit: cover;
              object-fit: cover;
              border-radius: 14.35rem;
            }
          }
        }

        .fd_body__2 {
          padding-top: 4.5rem;

          .fd_name {
            font-weight: 500;
            font-size: 3rem;
            line-height: 3.5rem;
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
            width: 50vw;
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
          padding-top: 1rem;

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
              height: 2rem;
              width: 19rem;
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
            margin: 2rem 0;
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

      
    }
  }
  
}

@media (min-width: 750px) {
  .fd {
    &_homeButton {
      width: auto;
      height: 1.3125rem;
      text-decoration: none;
      margin: 2.5rem 0 0;
      font-family: "Ubuntu";
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.3125rem;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;
      color: #3E86EF;
      position: absolute;
      top: 5rem;
      border: 0.125rem solid transparent;
      border-radius: 0.25rem;
      width: fit-content;
      padding: 0.15rem;
      transition: all 0.25s ease-in;

      &:hover {
        color: #2865BE;
      }

      &:active {
        color: #052E69;
      }

      &:focus {
        outline: none;
        color: #3E86EF;
        border-color: #7352AD;
      }
    }

    &_backSpan {
      display: flex;
      width: 1.5rem;
      height: 1.5rem;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
      
      svg {
        height: 1.5rem;
      }
    }
  } 
}

@media (min-width: 1200px) {
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
      margin-top: 0;

      .fd_tittle {
        font-size: 2rem;
      }
    }

    .fd_body {
      .fd_list {
        gap: 10% 4%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        margin-top: 4.875rem;

        .fd_body__1 {
          display: flex;
          width: 14.5rem;
          min-width: 14.5rem;
          max-width: 14.5rem;
          flex-direction: column;

          .fd_picture {
            position: relative;
            animation: wave infinite;
            animation-name: slide;
            animation-duration: 5s;
            animation-iteration-count: 1;

            img {
              max-width: 14.375rem;
              min-width: 14.375rem;
              max-height: 14.375rem;
              min-height: 14.375rem;
              -o-object-fit: cover;
              object-fit: cover;
              border-radius: 14.375rem;
            }
          }

          .fd_role {
            font-family: "Ubuntu";
            font-style: normal;
            font-weight: 500;
            font-size: 1.75rem;
            line-height: 2.1rem;
            padding-top: 1.5rem;
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
          width: 17.5rem;
          min-width: 17.5rem;
          max-width: 17.5rem;
          padding-top: 5rem;

          .fd_name {
            font-weight: 500;
            font-size: 3rem;
            line-height: 3.5rem;
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
          max-width: auto;
          padding-top: 5.6rem;

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
              height: 2rem;
              width: 19rem;
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
            margin: 2rem 0;
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
    height: 2rem;
    width: 23rem;
    border-bottom: 1px solid #2865be;
    visibility: visible;
  }
}
</style>
