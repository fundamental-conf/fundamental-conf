<template>
  <section class="fd-speakers" id="speakers">
    <div class="fd-speakers__container">
      <div class="fd-speakers__header">
        <h2 class="fd-speakers__title">speaker spotlight</h2>
        <div class="fd-speakers__line" aria-hidden="true"></div>
      </div>

      <ul class="fd-keyspeaker">
        <li class="fd-keyspeaker__list" :key="agenda[0].id">
          <div class="fd-keyspeaker__body0">
            <figure class="fd-keyspeaker__picture">
              <img
                :src="{ picture }"
                :alt="`Portrait of ${agenda[0].firstName} ${agenda[0].lastName}`"
              />
            </figure>
          </div>
          <div class="fd-keyspeaker__body1">
            <h3 class="fd-keyspeaker__keynote">KEYNOTE SPEAKER</h3>
            <div class="fd-keyspeaker__line1"></div>
            <p class="fd-keyspeaker__role">{{ agenda[0].role }}</p>
          </div>

          <div class="fd-keyspeaker__body2">
            <h3 class="fd-keyspeaker__name">
              {{ agenda[0].firstName }} <br />{{ agenda[0].lastName }}
            </h3>
            <p class="fd-keyspeaker__country">{{ agenda[0].country }}</p>
          </div>

          <div class="fd-keyspeaker__body3">
            <p class="fd-keyspeaker__bio">{{ agenda[0].bio }}</p>
            <div class="fd-keyspeaker__line"></div>
            <ul class="fd-keyspeaker__member-socials">
              <li v-if="agenda[0].twitter">
                <a
                  :href="agenda[0].twitter"
                  :aria-label="`Twitter Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                  <span>Twitter</span>
                </a>
              </li>
              <li v-if="agenda[0].github">
                <a
                  :href="agenda[0].github"
                  :aria-label="`Github Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                  <span>Github</span>
                </a>
              </li>
              <li v-if="agenda[0].linkedIn">
                <a
                  :href="agenda[0].linkedIn"
                  :aria-label="`LinkedIn Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.linkedin" aria-hidden="true"></span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul class="fd-speakers__unsortedlist">
        <li
          class="fd-speakers__list"
          v-for="member in agenda.slice(1)"
          :key="member.id"
        >
          <div class="fd-speakers__body1">
            <figure class="fd-speakers__picture">
              <img
                :src="{ picture }"
                :alt="`Portrait of ${member.firstName} ${member.lastName}`"
              />
            </figure>
          </div>

          <div class="fd-speakers__body2">
            <h3 class="fd-speakers__name">
              {{ member.firstName }} <br />{{ member.lastName }}
            </h3>
            <p class="fd-speakers__role">{{ member.role }}</p>
            <p class="fd-speakers__country">{{ member.country }}</p>
          </div>

          <!-- <div class="fd-keyspeaker_body3">
            <p class="fd-keyspeaker__bio">{{ agenda[0].bio }}</p>
            <div class="fd-keyspeaker__line"></div>
            <ul class="fd-keyspeaker__member-socials">
              <li v-if="agenda[0].twitter">
                <a
                  :href="agenda[0].twitter"
                  :aria-label="`Twitter Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                  <span>Twitter</span>
                </a>
              </li>
              <li v-if="agenda[0].github">
                <a
                  :href="agenda[0].github"
                  :aria-label="`Github Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                  <span>Github</span>
                </a>
              </li>
              <li v-if="agenda[0].linkedIn">
                <a
                  :href="agenda[0].linkedIn"
                  :aria-label="`LinkedIn Profile of ${agenda[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.linkedin" aria-hidden="true"></span>
                  <span>LinkedIn</span>
                </a> 
              </li> 
            </ul>
          </div>  -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import agenda from "@/assets/agenda.json";
import svgs from "@/assets/svg/svgs.js";
export default {
  picture: require("../assets/images/team_members/eniela.jpg"),

  name: "FDSpeakers",
  data() {
    return {
      svgs,
      agenda,
    };
  },
};
</script>

<style lang="scss" scoped>

.fd-speakers {
  flex-direction: row;
max-width: 1200px;
padding: 5rem 10vw;
margin: 0 auto;
align-items: center;

&__container{
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

.fd-keyspeaker {
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2%;
    flex-wrap: wrap;

    &__list {
          gap: 10% 4%;
      display: flex;
      flex-direction: column;
      padding-block: 1%;
      padding: 100px 30px 0 30px;

    }
&__body0
{display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    }

    &__picture {
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

  border: .0625rem solid red;
          }


}
    &__body1 {
         display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    }
    &__keynote {
     font-family: source-sans-3;
font-style: normal;
font-weight: 600;
font-size: 1.125rem;
line-height: 1.625rem;
/* identical to box height */
display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.03em;
text-transform: uppercase;

/* Violet/300 Mid */
color: #9679C5;
    }
     &__line1 {

        border-bottom: 1px solid #2865be;
            width: 8rem;

   }
   &__role {
    font-family: "Ubuntu";
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 2.1rem;
          color: #2865be;
   }

   &__body2 {
    display: flex;
      flex-direction: column;
      padding-top: 10%;
   }

   &__name {
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

   &__country {
     font-family: source-sans-3, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.15rem;
        text-transform: uppercase;
        color: #2865be;
        padding-top: 6%;

   }

   &__body3 {
display: flex;
      flex-direction: column;
      padding-top: 5%;
   }


   &__bio {
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
    &__line {
 height: 1.5rem;
        border-bottom: 1px solid #2865be;

   }
&__member-socials {
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

    &__unsortedlist{

flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 0 12px;
padding-top: 4.87rem;

      column-count: 2;
        columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
    }
    &__list {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    }
    &__body1 {
      display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 14px;

    }

    &__picture {
      display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 0px;
isolation: isolate;
img {
  border-radius: 6.5rem;
  width: 6.5rem;
height: 6.5rem;
 border: .0625rem solid red;

}

    }

    &__role {
      font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

/* Blue/500 Regular */
color: #2865BE;
    }
    &__body2 {
      display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

    }

    &__name {
      width: 98px;
height: 46px;

font-family: 'Ubuntu';
font-style: normal;
font-weight: 500;
font-size: 20px;

align-items: center;
text-align: center;

/* Blue/500 Regular */
color: #2865BE;

    }
    &__country {
      font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

/* Blue/500 Regular */
color: #2865BE;

    }
} 
@media (min-width: 892px) {

  .fd-speakers{
&__body1 {
  img {
    border-radius: 10rem;
    width: 10rem;
    height: 10rem;
  }
}
  &__unsortedlist{
 column-count: 3;
      columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;}

     &__list {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 3rem;
    }

.fd-keyspeaker{

       flex-direction: row;
 

    &__list {
         
      flex-direction: row;
      

    }
    &__body0 {
      order:2;
    }
    &__body1 {
      order:1;
      align-items: flex-start;
     
    }
     &__keynote {
        display: inline-block;
    overflow: hidden;
    white-space: nowrap;
      }

    &__body2 {
      order:3;
    }
    &__body3 {
      order:3;
      flex-direction: column-reverse;
      
    }
     &__line {
visibility: hidden;

   }
   &__member-socials {
    gap:0;
    li {
      a{
        span:last-child {
         display: none;
        }
      }
    }
}

    }
  }}

</style>
