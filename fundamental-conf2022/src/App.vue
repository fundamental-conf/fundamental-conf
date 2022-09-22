<template>
  <header id="header">
    <nav id="navbar" class="fd-nav" :class="{ 'hidden-navbar': !showNavbar }">
      <div class="fd-nav__left">
        <router-link to="/" aria-label="Home">
          <IconFig name="new_logo" />
          <IconFig name="new_logo_icon" />
        </router-link>
      </div>

      <ul v-if="!mobile" class="fd-nav__right">
        <li>
          <router-link to="/agenda" class="fd-nav__link" aria-label="Agenda"
            >Agenda</router-link
          >
        </li>
        <li>
          <router-link to="/team" class="fd-nav__link" aria-label="Our Team"
            >Our Team</router-link
          >
        </li>
        <li>
          <a
            aria-label="open submit your topic form"
            class="fd-nav__link"
            target="_blank"
            href="https://fundamentalconf-2021.netlify.app"
          >
            Previous Event</a
          >
        </li>
      </ul>

      <div
        class="fd_menu_icon"
        @click="toggleMobileNav"
        v-if="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
        <!-- menu -->
        <svg
          v-if="!mobileNav"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 16C2.22217 15.059 2.98494 14.2963 3.92587 14.2963H23.3333C24.2742 14.2963 25.037 15.059 25.037 16C25.037 16.9409 24.2742 17.7037 23.3333 17.7037H3.92587C2.98494 17.7037 2.22217 16.9409 2.22217 16Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 24.8889C2.22217 23.948 2.98494 23.1852 3.92587 23.1852H14.4444C15.3853 23.1852 16.1481 23.948 16.1481 24.8889C16.1481 25.8298 15.3853 26.5926 14.4444 26.5926H3.92587C2.98494 26.5926 2.22217 25.8298 2.22217 24.8889Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 7.11105C2.22217 6.17012 2.98494 5.40735 3.92587 5.40735H27.7777C28.7187 5.40735 29.4814 6.17012 29.4814 7.11105C29.4814 8.05198 28.7187 8.81476 27.7777 8.81476H3.92587C2.98494 8.81476 2.22217 8.05198 2.22217 7.11105Z"
            fill="white"
          />
        </svg>

        <!-- exit -->
        <svg
          v-if="mobileNav"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.79504 6.20471C9.46038 5.53937 10.5391 5.53937 11.2044 6.20471L27.6324 22.6325C28.2977 23.2978 28.2977 24.3766 27.6324 25.0419C26.967 25.7072 25.8883 25.7072 25.223 25.0419L8.79504 8.61411C8.12971 7.94877 8.12971 6.87005 8.79504 6.20471Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.20496 25.2047C8.53962 24.5394 8.53962 23.4606 9.20496 22.7953L25.7048 6.29529C26.3702 5.62995 27.4489 5.62995 28.1142 6.29529C28.7796 6.96063 28.7796 8.03935 28.1142 8.70469L11.6144 25.2047C10.949 25.87 9.87029 25.87 9.20496 25.2047Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>

    <transition name="fd-nav__mobile">
      <ul v-if="mobileNav" class="fd-nav__dropdown">
        <li>
          <router-link
            to="/"
            @click="close"
            class="fd-nav__link"
            aria-label="Agenda"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/agenda"
            @click="close"
            class="fd-nav__link"
            aria-label="Agenda"
            >Agenda</router-link
          >
        </li>
        <li>
          <router-link
            to="/team"
            @click="close"
            class="fd-nav__link"
            aria-label="Our Team"
            >Our Team</router-link
          >
        </li>
        <li>
          <a
            @click="close"
            aria-label="open submit your topic form"
            class="fd-nav__link"
            target="_blank"
            href="https://fundamentalconf-2021.netlify.app"
          >
            Previous Event</a
          >
        </li>
      </ul>
    </transition>
  </header>

  <main id="main" class="fd-main">
    <router-view/>
  </main>
  <button @click="toTop" class="fd-main__backToTop" v-if="scrollValue > 500">
    <svg
      height="25"
      viewBox="0 0 47 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.6667 61.6666C21.5496 61.6666 19.8334 59.9504 19.8334 57.8333L19.8334 4.16663C19.8334 2.04953 21.5496 0.333293 23.6667 0.333293C25.7838 0.333293 27.5 2.04953 27.5 4.16663L27.5 57.8333C27.5 59.9504 25.7838 61.6666 23.6667 61.6666Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.78944 26.0439C0.292433 24.5469 0.292433 22.1197 1.78944 20.6227L20.9561 1.45605C22.4531 -0.0409591 24.8803 -0.0409592 26.3773 1.45605L45.5439 20.6227C47.0409 22.1197 47.0409 24.5469 45.5439 26.0439C44.0469 27.5409 41.6198 27.5409 40.1228 26.0439L23.6667 9.58778L7.21059 26.0439C5.71359 27.5409 3.28645 27.5409 1.78944 26.0439Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script>
import Home from "./views/Home.vue";
import IconFig from "./components/IconFig.vue";
import svgs from "@/assets/svg/svgs.js";

export default {
  name: "App",
  components: {
    Home,
    IconFig,
    svgs,
  },
  //close button function
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,

      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      this.scrollValue = window.scrollY;
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },

    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
      if (this.scTimer) {
        document.documentElement.style.overflow = "hidden";
      } else document.documentElement.style.overflow = "auto";
    },
    
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    //this hides also the scrolling part when the dropdown is open
    toggleMobileNav(e) {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        document.documentElement.style.overflow = "hidden";
      } else document.documentElement.style.overflow = "auto";
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.mobileNav = !this.mobileNav;
        document.documentElement.style.overflow = "auto"
      }
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>

.fd-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/HomePageBackground_whole.png");

  &__backToTop {
    bottom: 1vh;
    height: 3rem;
    right: 0.1rem;
    width: 2.75rem;
    cursor: pointer;
    position: fixed;
    color: #3e86ef;
    box-sizing: border-box;
    background: transparent;
    border-radius: 2.375rem;
    transition: all 0.2s linear;
    border: 1px solid transparent;
    

    &:active,
    &:hover {
      color: #7352ad;
    }

    &:focus {
      color: #2865be;
      border-color: #7352ad;
      box-shadow: 1.54842px 3.09685px 9.29055px rgb(123 92 178 / 35%),
        0 0 0 0.0625rem #7352ad;
    }
  }
}

.fd_menu_icon {
  display: none;
}

nav#navbar.fd-nav.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

.fd-nav {
  display: flex;
  padding: 0 1rem;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  width: 96vw;
  z-index: 9999;
  position: fixed;
  top: 0;
  background: rgba(26, 17, 38, 0.75);
  /* Nav Background Blur */
  backdrop-filter: blur(8px);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  .fd-nav__mobile-enter-active,
  .fd-nav__mobile-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .fd-nav__mobile-enter-from,
  .fd-nav__mobile-leave-to {
    opacity: 0;
  }
  
  .fd-nav__mobile-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .fd-nav__mobile-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .fd-nav__mobile-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  .fd-nav__mobile-inner-leave-to {
    transform: scale(0.8);
  }

  @media only screen and (min-width: 1000px) {
    padding: 0 3rem;
  }

  &__right {
    display: flex;
    gap: 0.5rem;
    min-width: 23rem;
  }

  &__left {
    a:focus {
      outline: none;
    }

    ::v-deep .fd-conf-logo {
      display: block;
    }

    ::v-deep .fd-conf-logo-mobile {
      display: none;
    }
  }

  .fd-nav__mobile-enter-active {
    transition: all 0.3s ease;
  }
  
  .fd-nav__mobile-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .fd-nav__mobile-enter, 
  .fd-nav__mobile-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  &__dropdown {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("@/assets/images/team_members/MobileNav_Background.png");
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    overflow: hidden;
    /* Nav Background Blur */
    backdrop-filter: blur(8px);
    line-height: 5rem;
    padding: 10rem 0;
    opacity: 1;
    font-size: 2rem;
    height: 100vh;
    z-index: 1;
  }

  &__link {
    color: $text-color;
    outline: none;
    position: relative;
    min-width: 10rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.25rem;
    outline-offset: 1.25rem;
    transition: all 0.3s ease-in-out;
    border: 0.125rem solid transparent;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;

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
      background-color: #c5a4fa;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      color: #c5a4fa;
      &::after {
        transform: scale(1);
      }
    }

    &:focus {
      color: #fff;
      border-color: #82deff;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }

    &.router-link-active {
      &::after {
        transform: scale(1);
      }
    }
  }
}

.container {
  max-height: calc(100vh - 3.75rem);
  overflow-y: scroll;
}

.normal {
  scroll-snap-align: start;
  scroll-snap-type: none;
}

@media (max-width: 650px) {
  .fd-nav {
    &__left {
      a:focus {
        outline: none;
      }

      ::v-deep .fd-conf-logo {
        display: none;
      }

      ::v-deep .fd-conf-logo-mobile {
        display: block;
      }
    }
  }

  .fd_menu_icon {
    display: flex;
  }

  .fd-conf-logo-mobile {
    display: none;
  }

  .container {
    scroll-snap-type: none;
  }

  .container .panel {
    scroll-snap-align: start;
    scroll-snap-type: none;
  }
}
</style>
