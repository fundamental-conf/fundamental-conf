<template>
  <!-- " -->
  <transition name="modal-animation">
    <div
      class="fd-popup"
      v-show="modalActive"
      aria-modal="true"
      aria-hidden="true"
      tabindex="-1"
      @keydown.esc="close"
      @click.self="close"
      v-on:keydown.tab.prevent="focusTrapModal($event)"
    >
      <div
        class="fd-popup__box"
        role="document"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        tabindex="-1"
      >
        <h2 id="dialog-title" class="sr-only">
          Detailed information about speaker {{ member.firstName }}
          {{ member.lastName }}, {{ member.role }}
        </h2>
        <p id="dialog-description" class="sr-only">{{ member.bio }}</p>

        <button
          @click="close"
          class="fd-popup__exit"
          v-html="svgs.exit"
          aria-hidden="true"
          aria-label="close dialog"
          id="close-btn"
          ref="closeBtn"
          v-on:keypress.enter="close"
          v-on:keydown.tab.prevent="focusTrapModal($event)"
        ></button>

        <div class="fd-popup__speaker-box">
          <p class="fd-popup__speaker-title">Speaker</p>
          <div class="fd-popup__line"></div>
          <p class="fd-popup__role">{{ member.role }}</p>
        </div>

        <figure class="fd-popup__picture">
          <img
            :src="getIconPath(member.photo)"
            :alt="`Portrait of ${member.firstName} ${member.lastName}`"
          />
        </figure>

        <div class="fd-popup__body">
          <div class="fd-popup__desktopcol">
            <ul
              class="fd-popup__member-socials"
              v-if="
                member.twitter ||
                member.github ||
                member.medium ||
                member.linkedIn ||
                member.instagram
              "
            >
              <li v-if="!!member.twitter">
                <a
                  :href="member.twitter"
                  :aria-label="`Twitter Profile of`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                  :id="`twitter-${member.firstName}-${member.lastName}`"
                  v-on:keydown.tab.prevent="focusTrapModal($event)"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                </a>
              </li>

              <li v-if="!!member.github">
                <a
                  :href="member.github"
                  :aria-label="`Github Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                  :id="`github-${member.firstName}-${member.lastName}`"
                  v-on:keydown.tab.prevent="focusTrapModal($event)"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                </a>
              </li>
              <li v-if="!!member.medium">
                <a
                  :href="member.medium"
                  :aria-label="`Medium Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                  :id="`medium-${member.firstName}-${member.lastName}`"
                  v-on:keydown.tab.prevent="focusTrapModal($event)"
                >
                  <span v-html="svgs.medium" aria-hidden="true"></span>
                </a>
              </li>

              <li v-if="!!member.instagram">
                <a
                  :href="member.instagram"
                  :aria-label="`Instagram Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                  :id="`instagram-${member.firstName}-${member.lastName}`"
                  v-on:keydown.tab.prevent="focusTrapModal($event)"
                >
                  <span v-html="svgs.instagram" aria-hidden="true"></span>
                </a>
              </li>

              <li v-if="!!member.linkedIn">
                <a
                  :href="member.linkedIn"
                  :aria-label="`LinkedIn Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                  :id="`linkedIn-${member.firstName}-${member.lastName}`"
                  v-on:keydown.tab.prevent="focusTrapModal($event)"
                >
                  <span v-html="svgs.linkedin" aria-hidden="true"></span>
                </a>
              </li>
            </ul>
            <h2 class="fd-popup__name">
              {{ member.firstName }} {{ member.lastName }}
            </h2>
          </div>
          <p class="fd-popup__country">{{ member.country }}</p>

          <p class="fd-popup__paragraph">
            {{ member.bio }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import svgs from "@/assets/svg/svgs.js";

export default {
  props: {
    member: {},
    modalActive: Boolean,
  },
  data() {
    return {
      showItem: true,
      svgs,
      focussableElements: []
    };
  },
  mounted() {},
  methods: {
    getIconPath(iconName) {
      return iconName ? require("@/assets/images/speakers/" + iconName) : "";
    },
    
    focusTrapModal($event) {
      this.$nextTick(() => document.getElementById("close-btn").focus());

      if ($event) {
        this.$nextTick(() => {

          this.focussableElements.push(document.getElementById("close-btn"));

          if(this.member.twitter) {
            this.focussableElements.push(document.getElementById(`twitter-${this.member.firstName}-${this.member.lastName}`));
          }

          if(this.member.github) {
            this.focussableElements.push(document.getElementById(`github-${this.member.firstName}-${this.member.lastName}`));
          }

          if(this.member.medium) {
            this.focussableElements.push(document.getElementById(`medium-${this.member.firstName}-${this.member.lastName}`));
          }

          if(this.member.instagram) {
            this.focussableElements.push(document.getElementById(`instagram-${this.member.firstName}-${this.member.lastName}`));
          }

          if(this.member.linkedIn) {
            this.focussableElements.push(document.getElementById(`linkedIn-${this.member.firstName}-${this.member.lastName}`));
          }

          const filteredFocussableElements = this.focussableElements.filter(
            (el) => el !== undefined
          );

          const activeElementIndex = filteredFocussableElements.indexOf(
            $event.target
          );

          if (activeElementIndex != filteredFocussableElements.length - 1) {
            if ($event.shiftKey) {
              if (activeElementIndex === 0) {
                filteredFocussableElements[
                  filteredFocussableElements.length - 1
                ].focus();
              } else {
                filteredFocussableElements[activeElementIndex - 1].focus();
              }
            } else {
              filteredFocussableElements[activeElementIndex + 1].focus();
            }
          } else {
            if ($event.shiftKey) {
              filteredFocussableElements[activeElementIndex - 1].focus();
            } else {
              filteredFocussableElements[0].focus();
            }
          }
        });
      }
    },
    close() {
      this.focussableElements = [];
      this.$emit("close");
    }
  },
};
</script>

<style lang="scss" scoped>
.fd-popup {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh + 1.25rem);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__box {
    position: relative;
    max-height: 80vh;
    overflow-y: scroll;
    width: 80vw;
    max-width: 80vw;
    background: #e2eeff;
    box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.25);
    border-radius: 1.125rem;
    overflow-y: auto;
    padding: 3.5rem 1.5rem 2rem;
  }

  &__exit {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 2.25rem;
    height: 2.25rem;
    right: 0.75rem;
    top: 0.75rem;
    padding: 0.375rem;
    cursor: pointer;
    color: #3e86ef;
    border: 0.125rem solid transparent;
    border-radius: 0.25rem;
    background: transparent;
    transition: all 0.5s linear;

    &:hover {
      color: #2865be;
    }

    &:active {
      color: #052e69;
    }

    &:focus {
      outline: none;
      color: #3e86ef;
      border-color: #7352ad;
    }
  }

  &__speaker-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  &__speaker-title {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #9679c5;
  }

  &__line {
    width: 8.3rem;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
  }

  &__role {
    font-family: "Ubuntu";
    font-size: 1.125rem;
    line-height: 1.32rem;
    color: #2865be;
    text-align: center;
  }

  &__picture {
    z-index: 4;
    margin: 2rem auto;
    text-align: center;
    position: relative;
    width: fit-content;

    &::after {
      left: 5rem;
      top: 0;
      z-index: 3;
      content: "";
      position: absolute;
      max-width: 4.5rem;
      min-width: 4.5rem;
      max-height: 4.5rem;
      min-height: 4.5rem;
      filter: blur(2.5rem);
      transform: rotate(180deg);
      mix-blend-mode: color-burn;
      background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
    }

    img {
      position: relative;
      border-radius: 9.375rem;
      max-width: 9.375rem;
      min-width: 9.375rem;
      max-height: 9.375rem;
      min-height: 9.375rem;
      z-index: 5;
    }
  }

  &__body {
    text-align: center;
  }

  &__member-socials {
    gap: 1rem;
    padding: 0;
    display: flex;
    margin: 1rem 0;
    list-style: none;
    justify-content: center;
    flex-wrap: wrap;

    a {
      width: 2rem;
      height: 2rem;
      display: flex;
      cursor: pointer;
      color: #3e86ef;
      border-radius: 0.25rem;
      transition: all 0.5s linear;
      border: 0.125rem solid transparent;

      span {
        display: flex;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        color: #2865be;
      }

      &:active {
        color: #052e69;
      }

      &:focus {
        outline: none;
        color: #3e86ef;
        border-color: #9747ff;
      }
    }
  }

  &__name {
    font-family: "Ubuntu";
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.5625rem;
    color: #2865be;
  }

  &__country {
    font-family: source-sans-3, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.15rem;
    text-transform: uppercase;
    color: #2865be;
    margin: 0.5rem 0;
  }

  &__paragraph {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375rem;
    letter-spacing: 0.01em;
    text-align: left;
    color: #2865be;
  }

  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
}

@media (min-width: 821px) {
  .fd-popup {
    &__box {
      gap: 2rem;
      display: flex;
      padding: 3rem;
      flex-direction: row;
      align-items: center;
      max-width: 69rem;
      flex-wrap: wrap;
    }

    &__speaker-title {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }

    &__speaker-box {
      align-items: flex-start;
      max-width: 35%;
    }

    &__picture {
      margin: 0;

      img {
        border-radius: 15rem;
        max-width: 15rem;
        min-width: 15rem;
        max-height: 15rem;
        min-height: 15rem;
      }

      &::after {
        left: 10rem;
        top: 0;
        z-index: 3;
        content: "";
        position: absolute;
        max-width: 6rem;
        min-width: 6rem;
        max-height: 6rem;
        min-height: 6rem;
        filter: blur(2.5rem);
        transform: rotate(180deg);
        mix-blend-mode: color-burn;
        background: linear-gradient(45deg, #2865be 0%, #82deff 100%);
      }
    }

    &__role {
      text-align: left;
      font-size: 1.75rem;
      line-height: 2rem;
    }

    &__desktopcol {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__member-socials {
      order: 2;
      margin: 0;
      margin-left: 1rem;
    }

    &__name {
      font-size: 1.75rem;
      line-height: 2rem;
    }

    &__country {
      text-align: left;
      font-size: 1.75rem;
      line-height: 2rem;
    }

    &__paragraph {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
}

@media (min-width: 1200px) {
  .fd-popup {
    &__box {
      flex-wrap: nowrap;
    }

    &__picture {
      margin: 0;

      img {
        border-radius: 18.75rem;
        max-width: 18.76rem;
        min-width: 18.76rem;
        max-height: 18.76rem;
        min-height: 18.76rem;
      }
    }
  }
}

.sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 0.0625rem;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 0.0625rem;
  }
</style>
