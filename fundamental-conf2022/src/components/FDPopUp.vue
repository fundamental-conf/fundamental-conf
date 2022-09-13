<template>
  <!-- " -->

  <transition name="modal-animation">
    <div class="fd-popup" v-show="modalActive">
      <div class="fd-popup__box">
        <span
          @click="close"
          class="fd-popup__exit"
          v-html="svgs.exit"
          aria-hidden="true"
        ></span>

        <div class="fd-popup__speaker-box">
          <h3 class="fd-popup__speaker-title">Speaker</h3>
          <div class="fd-popup__line"></div>
          <p class="fd-popup__role">{{member.role}}</p>
        </div>
        <figure class="fd-popup__picture">
          <img
          :src=getIconPath(member.photo)
                :alt="`Portrait of ${member.firstName} ${member.lastName}`"
              />
        </figure>

        <div class="fd-popup__body">
          <div class="fd-popoup__desktopcol">
            <ul class="fd-popup__member-socials">
              <!-- !!member.twitter check if there is getting any twitter from dynamic data -->
              <li  v-if="!!member.twitter"> 
                <a
                :href="member.twitter"
                  :aria-label="`Twitter Profile of`"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                >
                  <span v-html="svgs.twitter" aria-hidden="true"></span>
                </a>
              </li>


              <li  v-if="!!member.github">
                <a
                 :href="member.github"
                  :aria-label="`Github Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                >
                  <span v-html="svgs.github" aria-hidden="true"></span>
                </a>


              </li>
              <li  v-if="!!member.medium" >
                <a
                 :href="member.medium"
                  :aria-label="`Medium Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                >
                  <span v-html="svgs.medium" aria-hidden="true"></span>
                </a>
              </li>


              <li  v-if="!!member.instagram" >
                <a
                 :href="member.instagram"
                  :aria-label="`Instagram Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                >
                  <span v-html="svgs.instagram" aria-hidden="true"></span>
                </a>
              </li>


              <li  v-if="!!member.linkedIn">
                <a
                :href="member.linkedIn"
                  :aria-label="`LinkedIn Profile of `"
                  rel="nofollow"
                  target="_blank"
                  class="fd-popup__social-item"
                >
                  <span v-html="svgs.linkedin" aria-hidden="true"></span>
                </a>
              </li>
            </ul>
            <h2 class="fd-popup__name">{{ member.firstName }} {{ member.lastName }}</h2>
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
    member:{},
    modalActive: Boolean,
    
  },
  data() {
    return {
      showItem:true,
      svgs,
    };
  },
  methods: {
    getIconPath(iconName) {
      return iconName ? require("@/assets/images/speakers/" + iconName) : ''
    },

  
  
  
  },

 
//close button function 
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
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
  height: calc(100vh + 20px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;


  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    isolation: isolate;

    position: relative;

    width: 312px;
    padding-top: 10%;
    padding-bottom: 3%;

    /* Blue/100 Pale */

    background: #e2eeff;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    overflow-y: auto;
  }

 

  &__exit {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 1.125rem;
    top: 1.125rem;

    /* Blue/500 Regular */
    color: #2865be;
  }

  &__speaker-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }

  &__speaker-title {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #9679c5;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &__line {
    width: 8.3rem;
    height: 0.0625rem;
    background: linear-gradient(63.69deg, #2865be 16.54%, #82deff 83.46%);
    background-size: 400% 400%;
    -webkit-animation: gradient-17d1a7e2 3s ease infinite;
    animation: gradient-17d1a7e2 3s ease infinite;
    margin-bottom: 0.25rem;
    order: 2;
  }

  &__role {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: justify;

    /* Blue/500 Regular */
    color: #2865be;

    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0 60px 0;
  }

  &__picture {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    isolation: isolate;
    &::after {
      content: "";

      right: -2rem;

      filter: blur(20px);
    }
    img {
      border-radius: 9.375rem;

      max-width: 9.375rem;
      min-width: 9.375rem;
      max-height: 9.375rem;
      min-height: 9.375rem;
   
    }
  }

  &__body {
    text-align: center;
  }
  &__desktopcol {
    display: flex;
  }

  &__member-socials {
    width: 100%;
    gap: 1rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    list-style: none;
    justify-content: center;
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

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;

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

  &__name {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Blue/500 Regular */
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
    padding-bottom: 4%;
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
    text-align: left;
    padding: 0.8rem;

    /* Blue/500 Regular */
    color: #2865be;

    /* Inside auto layout */
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
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

@media (min-width: 892px) {
  .fd-popup {
    display: flex;
    flex-direction: row;

    &__box {
      flex-direction: row;
      width: 69rem;
    height: 41%;
      padding: 3rem 3rem 2rem 3rem;
    }

    &__body {
      display: flex;
      flex-direction: column;
      text-align: left;

      div{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        
      }
    }

    &__speaker-title {
      font-size: 1.5rem;
    }
&__speaker-box{
  width: 11rem;
    justify-content: left;
    align-items: self-start;
    align-content: flex-end;
    text-align: left;
}

&__picture {

  img{
    border-radius: 22.9rem;

max-width: 22.9rem;
min-width: 22.9rem;
max-height:22.9rem;
min-height: 22.9rem;

  }
}
    &__paragraph {

      padding:0;
      font-size: 1.25rem;
    }

    &__role {

   text-align: left;
   margin: 0;
   font-size: 1.75rem;
   
    }
    &__member-socials{

      justify-content: right;
      width:60%;
    }
&__name {
  text-align: left;
  width: 100%;
    justify-content: left;
    font-size: 1.75rem;
}
&__country {
  padding-top: 0%;
  font-size: 1.5rem;
}
    
  }
}
</style>
