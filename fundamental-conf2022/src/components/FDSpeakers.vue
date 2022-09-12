<template>
  <section class="fd-speakers" id="speakers">
    <div class="fd-speakers__container">
      <div class="fd-speakers__header">
        <h2 class="fd-speakers__title">speaker spotlight</h2>
        <div class="fd-speakers__line" aria-hidden="true"></div>
      </div>

      <ul class="fd-keyspeaker">
        <li class="fd-keyspeaker__list" :key="speakers[0].id">
          <div class="fd-keyspeaker__body0">
            <figure class="fd-keyspeaker__picture">
              <img
                :src="require(`@/assets/images/speakers/${speakers[0].photo}`)"
                :alt="`Portrait of ${speakers[0].firstName} ${speakers[0].lastName}`"
              />
            </figure>
          </div>
          <div class="fd-keyspeaker__body1">
            <h3 class="fd-keyspeaker__keynote">KEYNOTE SPEAKER</h3>
            <div class="fd-keyspeaker__line1"></div>
            <p class="fd-keyspeaker__role">{{ speakers[0].role }}</p>
          </div>

          <div class="fd-keyspeaker__body2">
            <h3 class="fd-keyspeaker__name">
              {{ speakers[0].firstName }} <br />{{ speakers[0].lastName }}
            </h3>
            <p class="fd-keyspeaker__country">{{ speakers[0].country }}</p>
          </div>

          <div class="fd-keyspeaker__body3">
            <p class="fd-keyspeaker__bio">{{ speakers[0].bio }}</p>
            <div class="fd-keyspeaker__line"></div>
            <ul class="fd-keyspeaker__member-socials">
              <li v-if="speakers[0].twitter">
                <a
                  :href="speakers[0].twitter"
                  :aria-label="`Twitter Profile of ${speakers[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                  <span>Twitter</span>
                </a>
              </li>
              <li v-if="speakers[0].github">
                <a
                  :href="speakers[0].github"
                  :aria-label="`Github Profile of ${speakers[0].firstName}`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-keyspeaker__social-item"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                  <span>Github</span>
                </a>
              </li>
              <li v-if="speakers[0].linkedIn">
                <a
                  :href="speakers[0].linkedIn"
                  :aria-label="`LinkedIn Profile of ${speakers[0].firstName}`"
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
          v-for="member in speakers.slice(1)"
          :class="{ selected: member === currentMember }"
          :key="member.id"
          v-bind:value="{ member: currentMember }"
        >
          <div class="fd-speakers__body1">
            <figure class="fd-speakers__picture">
              <button @click="toggleModal(member)" type="button">
                <img
                  :src="require(`@/assets/images/speakers/${member.photo}`)"
                  :alt="`Portrait of ${member.firstName} ${member.lastName}`"
                />
              </button>
            </figure>
          </div>

          <div class="fd-speakers__body2">
            <h3 class="fd-speakers__name">
              {{ member.firstName }} <br />{{ member.lastName }}
            </h3>

            <p class="fd-speakers__role">{{ member.role }}</p>
            <p class="fd-speakers__country">{{ member.country }}</p>
          </div>
        </li>
      </ul>
      <span
        class="fd-speakers__comingsoon"
        v-html="svgs.comingsoon"
        aria-hidden="true"
      ></span>
    </div>

    <FDPopUp
      :member="current"
      class="fd-popup"
      @close="closeModal()"
      :modalActive="modalActive"
    />
  </section>
</template>

<script>
import { defineExpose, ref } from "vue";
import speakers from "@/assets/speakers.json";
import svgs from "@/assets/svg/svgs.js";
import FDPopUp from "./FDPopUp.vue";
import { memberExpression } from "@babel/types";

export default {
  name: "FDSpeakers",

  data() {
    return {
      svgs,
      speakers,
      current: {},
      modalActive: false,
    };
  },
  components: { FDPopUp },

  methods: {
    //opens the popup
    toggleModal(member) {
      this.current = member;
      console.log(this.current);
      this.modalActive = !this.modalActive;

      //hides the scrolling in the background
      if (this.current) {
        document.documentElement.style.overflow = "hidden";
        document.getElementsByTagName("*").style.overflow = "hidden";
        document.body.scroll = "no";
        
      } else {
        document.documentElement.style.overflow = "auto";
        document.getElementsByTagName("*").style.overflow = "auto";
        document.body.scroll = "yes";
      }
    },
    //erase all the data from the current popup
    closeModal() {
      this.current = {};
      this.modalActive = false;
      document.documentElement.style.overflow = "auto";
      document.getElementsByTagName("*").style.overflow = "auto";
        document.body.scroll = "yes";
    },

    resetModalData: function () {
      let stringDefault = "";
      let numberDefault = 0;
      let booleanDefault = false;

      Object.keys(this.modalData).forEach((key) => {
        if (typeof this.modalData[key] === "number") {
          this.modalData[key] = numberDefault;
        } else if (typeof this.modalData[key] === "boolean") {
          this.modalData[key] = booleanDefault;
        } else {
          // default type string
          this.modalData[key] = stringDefault;
        }
      });
    },
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

  &__container {
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
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
    order: 2;
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
    &__body0 {
      display: flex;
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
      color: #9679c5;
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
      background: linear-gradient(-33deg, #82deff, #69adf8, #2865be);
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

  &__unsortedlist {
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
    height: 18rem;
    width: 6rem;
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

      max-width: 6.5rem;
      min-width: 6.5rem;
      max-height: 6.5rem;
      min-height: 6.5rem;
    }
    button {
      background: transparent;
      border: transparent;
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

    /* Blue/500 Regular */
    color: #2865be;
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
    width: 134px;
    height: 46px;

    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    align-items: center;
    text-align: center;

    /* Blue/500 Regular */
    color: #2865be;
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
    color: #2865be;
  }

  &__comingsoon {
    text-align: center;
  }
}
@media (min-width: 892px) {
  .fd-speakers {
    &__body1 {
      img {
        border-radius: 10rem;
        width: 10rem;
        height: 10rem;
      }
    }
    &__unsortedlist {
      column-count: 3;
      columns: 3;
      -webkit-columns: 3;
      -moz-columns: 3;
    }
    &__picture {
      img {
        max-width: 9.5rem;
        min-width: 9.5rem;
        max-height: 9.5rem;
        min-height: 9.5rem;
      }
    }
    &__list {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      gap: 3rem;
      width: 10rem;
    }

    .fd-keyspeaker {
      flex-direction: row;

      &__list {
        flex-direction: row;
      }
      &__body0 {
        order: 2;
      }
      &__body1 {
        order: 1;
        align-items: flex-start;
      }
      &__keynote {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
      }

      &__body2 {
        order: 3;
      }
      &__body3 {
        order: 3;
        flex-direction: column;
      }
      &__line {
        width: 19rem;
      }
      &__member-socials {
        gap: 3rem;
        li {
          a {
            span:last-child {
            }
          }
        }
      }
    }
  }
}
</style>
