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
              <img :src="member.picture" :alt="`Portrait of ${member.firstname}`" />
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
export default {
  el: "#team",

  data() {
    return {
      team: [
        {
          firstname: "Eniela",
          lastname: "Vela",
          city: "Montreal, Canada",
          role: "UA Developer",
          picture: "@/assets/images/team_members/eniela.jpg",
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
          picture: "src/assets/images/team_members/eniela.jpg",
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
            max-width: 9rem;
            min-width: 9rem;
            max-height: 9rem;
            min-height: 9rem;
            padding: 0.625rem;
            object-fit: cover;
            border-radius: 6rem;
            border: 0.0625rem solid blue;
          }
        }
        .fd_role {
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 500;
          font-size: 2.5vh;
          line-height: 4vh;

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
          font-family: "Source Sans 3";
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
          font-family: "Source Sans 3";
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
          height: 6vh;
          border-bottom: 1px solid #2865be;
        }
        .fd-member-socials {
          &__item {
          }
        }
      }
    }
  }
}
</style>
