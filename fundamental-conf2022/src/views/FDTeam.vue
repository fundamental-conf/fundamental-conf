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
            <h2 class="fd_name">{{ member.firstname }}</h2>
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
                  v-html="svgs.twitter"
                >
                </a
                >Twitter
              </li>
              <!-- <li v-if="member.github">
              <a
                :href="member.github"
                :aria-label="`Github Profile of ${member.name}`"
                rel="nofollow"
                target="_blank"
                class="fd-member-socials__item"
                 v-html="svgs.github"
              >
              </a>
            </li> -->
              <li v-if="member.linkedin">
                <a
                  :href="member.linkedin"
                  :aria-label="`LinkedIn Profile of ${member.name}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-member-socials__item"
                  v-html="svgs.linkedin"
                >
                </a>
                LinkedIn
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
          firstname: "Inna",
          lastname: "Attanasova",
          city: "Montreal, Canada",
          role: "UA Developer",
          picture: "eniela.jpg",
          bio: "Eniela joined the Fundamental Library team as a UA developer in January. She is the developer behind the Fundamental Conference website.",
          linkedin: "https://www.linkedin.com/in/eniela-vela-67aba3135/",
          github: "https://github.com/ynnenu",
          twitter: "https://twitter.com/VelaEniela",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fd_wrapper {
  padding: 15%;
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
      font-size: 3vw;
      line-height: 8vh;
      font-family: "Ubuntu";
      font-style: normal;
      letter-spacing: 0.02em;
      color: #2865be;
      order: 1;
    }
    .fd_line {
      height: 6vh;
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
      flex-direction: row;
      padding-block: 6%;

      .fd_body__1 {
        display: flex;
        flex-direction: column;
        .fd_picture {
          img {
               max-width: 11rem;
    min-width: 11rem;
    max-height: 11rem;
    min-height: 11rem;
    padding: 0.625rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 11rem;
          }
        }
        .fd_role {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-size: 1.75rem;
    line-height: 3vh;
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
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-size: 4vh;
          line-height: 2.5vh;

          /* Blue/500 Regular */
          color: #2865be;
        }
        .fd_city {
          font-family: source-sans-3, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.8vh;
          line-height: 5.5vh;
          width: 16.5vw;
          text-transform: uppercase;
          color: #2865be;
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
          font-size: 2vh;
          line-height: 2.3vh;
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
          gap: 1rem;
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
}
</style>
