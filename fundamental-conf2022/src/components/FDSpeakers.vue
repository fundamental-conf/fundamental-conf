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
            <figure
              role="button"
              tabindex="0"
              class="fd-keyspeaker__picture"
              @click="toggleModal(speakers[0])"
              v-on:keypress.enter="toggleModal(speakers[0])"
              :id="`${speakers[0].firstName}-${speakers[0].lastName}`"
            >
              <img
                :src="require(`@/assets/images/speakers/${speakers[0].photo}`)"
                :alt="`Portrait of ${speakers[0].firstName} ${speakers[0].lastName}`"
              />
            </figure>
          </div>

          <div class="fd-keyspeaker__body1">
            <p class="fd-keyspeaker__keynote">KEYNOTE SPEAKER</p>
            <div class="fd-keyspeaker__line1" aria-hidden="true"></div>
            <p class="fd-keyspeaker__role">{{ speakers[0].role }}</p>
          </div>

          <div class="fd-keyspeaker__body2">
            <h3 class="fd-keyspeaker__name">
              {{ speakers[0].firstName }} {{ speakers[0].lastName }}
            </h3>
            <p class="fd-keyspeaker__country">{{ speakers[0].country }}</p>
            <p class="fd-keyspeaker__bio">{{ speakers[0].bio }}</p>
            <div class="fd-keyspeaker__line" aria-hidden="true"></div>
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
            <figure
              role="button"
              tabindex="0"
              class="fd-speakers__picture"
              @click="toggleModal(member)"
              v-on:keypress.enter="toggleModal(member)"
              :id="`${member.firstName}-${member.lastName}`"
            >
              <img
                :src="require(`@/assets/images/speakers/${member.photo}`)"
                :alt="`Portrait of ${member.firstName} ${member.lastName}`"
              />
            </figure>
          </div>

          <div class="fd-speakers__body2">
            <h3 class="fd-speakers__name">
              {{ member.firstName }}
              <span class="fd-speakers__break" aria-hidden="true"><br /></span>
              {{ member.lastName }}
            </h3>

            <p class="fd-speakers__role">{{ member.role }}</p>
            <p class="fd-speakers__country">{{ member.country }}</p>
          </div>
        </li>
      </ul>
    </div>

    <FDPopUp
      ref="test"
      :member="current"
      class="fd-popup"
      @close="closeModal()"
      :modalActive="modalActive"
    />
  </section>
</template>

<script>
import speakers from "@/assets/speakers.json";
import svgs from "@/assets/svg/svgs.js";
import FDPopUp from "./FDPopUp.vue";

export default {
  name: "FDSpeakers",

  data() {
    return {
      svgs,
      speakers,
      current: {},
      modalActive: false,
      lastFocussedElementID: null,
    };
  },
  components: { FDPopUp },

  methods: {
    //opens the popup
    toggleModal(member) {
      this.current = member;
      this.modalActive = !this.modalActive;
      this.lastFocussedElementID = `${member.firstName}-${member.lastName}`;

      //hides the scrolling in the background
      if (this.current) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
      } else {
        document.documentElement.style.overflow = "auto";
        document.body.scroll = "yes";
      }

      this.$nextTick(() => document.getElementById("close-btn").focus());
    },
    //erase all the data from the current popup
    closeModal() {
      document.getElementById(this.lastFocussedElementID).focus();
      this.current = {};
      this.modalActive = false;
      document.documentElement.style.overflow = "auto";
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
  
  button {
    cursor: pointer;
  }

  display: flex;
  margin: 0 auto;
  max-width: 75rem;
  padding: 5rem 2rem;
  flex-direction: row;
  align-items: center;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__header {
    gap: 2rem;
    display: flex;
    padding-bottom: 8%;
    justify-content: center;
    align-items: flex-end;
  }

  &__title {
    order: 2;
    line-height: 1;
    color: #2865be;
    font-weight: 500;
    font-size: 1.25rem;
    font-style: normal;
    font-family: "Ubuntu";
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  &__line {
    order: 1;
    width: 100%;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
  }

  &__unsortedlist {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    justify-content: space-between;
  }

  &__list {
    gap: 1.5rem;
    align-items: center;
    display: inline-flex;
    margin-bottom: 4rem;
    flex-direction: column;
    width: calc(50% - 0.5rem);
  }

  &__picture {
    padding: 0;
    z-index: 4;
    display: flex;
    position: relative;
    flex-direction: row;
    border-radius: 100%;
    justify-content: center;
    align-items: flex-end;
    transition: all 0.2s linear;

    &::after {
      left: 30%;
      top: -1rem;
      content: "";
      max-width: 4.5rem;
      min-width: 4.5rem;
      max-height: 4.5rem;
      min-height: 4.5rem;
      position: absolute;
      background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
      mix-blend-mode: color-burn;
      filter: blur(2.5rem);
      z-index: 3;
      transform: rotate(180deg);
    }

    img {
      z-index: 5;
      max-width: 6.5rem;
      min-width: 6.5rem;
      max-height: 6.5rem;
      min-height: 6.5rem;
      position: relative;
      border-radius: 6.5rem;
    }

    button {
      border: transparent;
      background: transparent;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem #7352ad;
    }
  }

  &__role {
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    color: #2865be;
    text-align: center;
    align-items: center;
    font-style: normal;
    line-height: 1.5rem;
    font-family: sans-serif;
  }

  &__body2 {
    padding: 0;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &__name {
    font-weight: 500;
    color: #2865be;
    font-style: normal;
    font-size: 1.25remm;
    font-family: "Ubuntu";
    text-align: center;
    align-items: center;
  }
  &__country {
    display: flex;
    font-weight: 400;
    font-size: 1rem;
    color: #2865be;
    font-style: normal;
    text-align: center;
    align-items: center;
    line-height: 1.5rem;
    font-family: sans-serif;
    text-transform: uppercase;
  }

  &__comingsoon {
    text-align: center;
  }

  &__break {
    display: inline;
  }
}

.fd-keyspeaker {
  
  button {
    cursor: pointer;
  }

  gap: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;

  &__list {
    gap: 2rem;
    display: flex;
    padding: 1.875rem;
    flex-direction: column;
  }

  &__body0 {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &__picture {
    z-index: 4;
    cursor: pointer;
    position: relative;
    border-radius: 100%;
    transition: all 0.2s linear;

    &::after {
      left: 30%;
      top: -1rem;
      z-index: 3;
      content: "";
      max-width: 4.5rem;
      min-width: 4.5rem;
      max-height: 4.5rem;
      min-height: 4.5rem;
      position: absolute;
      filter: blur(2.5rem);
      background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
      mix-blend-mode: color-burn;
      transform: rotate(180deg);
    }

    img {
      z-index: 5;
      display: flex;
      max-width: 10rem;
      min-width: 10rem;
      max-height: 10rem;
      min-height: 10rem;
      object-fit: cover;
      position: relative;
      border-radius: 10rem;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem #7352ad;
    }
  }

  &__body1 {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &__keynote {
    display: flex;
    font-weight: 600;
    color: #9679c5;
    font-style: normal;
    align-items: center;
    text-align: justify;
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    font-family: source-sans-3;
  }

  &__line1 {
    width: 8rem;
    border-bottom: 0.0625rem solid #2865be;
  }

  &__role {
    font-weight: 400;
    color: #2865be;
    font-style: normal;
    font-family: "Ubuntu";
    font-size: 1.125rem;
    line-height: 2.1rem;
  }

  &__body2 {
    display: flex;
    flex-direction: column;
  }

  &__name {
    margin-bottom: 0.875rem;
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
    color: #2865be;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.15rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-family: source-sans-3, sans-serif;
  }

  &__body3 {
    display: flex;
    flex-direction: column;
  }

  &__bio {
    display: flex;
    color: #052e69;
    font-size: 1rem;
    font-weight: 400;
    align-items: left;
    font-style: normal;
    line-height: 1.375rem;
    letter-spacing: 0.01em;
    font-family: source-sans-3, sans-serif;
  }
  &__line {
    height: 1.5rem;
    border-bottom: 0.0625rem solid #2865be;
  }

  &__member-socials {
    gap: 1rem;
    padding: 0;
    width: 100%;
    display: flex;
    margin: 1rem 0;
    flex-wrap: wrap;
    list-style: none;
    flex-direction: row;
    justify-content: left;

    li {
      gap: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $brand-color-dark-blue;

      a {
        gap: 0.5rem;
        display: flex;
        cursor: pointer;
        color: #2865be;
        padding: 0.25rem;
        align-items: center;
        flex-direction: row;
        white-space: nowrap;
        text-decoration: none;
        border-radius: 0.5rem;
        justify-content: center;
        transition: all 0.3s ease;
        border: 0.125rem solid transparent;

        span:first-child {
          display: flex;
          width: 1.5625rem;
          height: 1.5625rem;
          align-items: center;
          justify-content: center;
        }

        span:last-child {
          position: relative;
          font-size: 0.875rem;
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
          color: #2865be;
          border-color: #9747ff;
        }
      }
    }
  }
}

@media (min-width: 820px) {
  .fd-speakers {
    padding: 10rem 10vw;

    &__title {
      font-size: 2rem;
    }

    &__picture {
      z-index: 4;
      &::after {
        content: "";
        position: absolute;
        left: 45%;
        top: -1.25rem;

        z-index: 2;
        max-width: 8rem;
        min-width: 8rem;
        max-height: 8rem;
        min-height: 8rem;
        background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
        mix-blend-mode: color-burn;
        filter: blur(3.125rem);
      }

      img {
        z-index: 3;
        width: 20vw;
        height: 20vw;
        position: relative;
        min-width: 14rem;
        min-height: 14rem;
        max-width: 18.75rem;
        max-height: 18.75rem;
      }
    }

    &__list {
      gap: 3rem;
      align-items: center;
      margin-bottom: 8rem;
      display: inline-flex;
      flex-direction: column;
      width: calc(33% - 0.5rem);
    }

    &__name {
      font-size: 1.75rem;
    }

    &__role,
    &__country {
      font-size: 1.25rem;
    }

    &__break {
      display: none;
    }
  }

  .fd-keyspeaker {
    &__list {
      gap: 1.5rem;
      padding: 0;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }

    &__role,
    &__name {
      font-size: 1.75rem;
    }

    &__country,
    &__keynote {
      font-size: 1.5rem;
    }

    &__bio {
      font-size: 1.25rem;
    }

    flex-direction: row;

    &__picture {
      z-index: 4;

      img {
        z-index: 3;
        width: 20vw;
        height: 20vw;
        max-width: 18.75rem;
        min-width: 14rem;
        max-height: 18.75rem;
        min-height: 14rem;
        position: relative;
      }

      &::after {
        left: 45%;
        top: -20px;
        z-index: 2;
        content: "";
        max-width: 8rem;
        min-width: 8rem;
        max-height: 8rem;
        min-height: 8rem;
        position: absolute;
        background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
        mix-blend-mode: color-burn;
        filter: blur(3.125rem);
      }
    }

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
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
    }

    &__body2 {
      order: 3;
      padding-top: 0;
      justify-content: center;
    }

    &__body3 {
      order: 3;
      padding-top: 0;
      flex-direction: column;
    }

    &__member-socials {
      gap: 1rem;
      li {
        a {
          span:last-child {
            font-size: 1.125rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .fd-keyspeaker {
    &__list {
      gap: 1.5rem;
      padding: 0;
      flex-wrap: nowrap;
      margin-bottom: 4rem;
    }
  }
}
</style>
