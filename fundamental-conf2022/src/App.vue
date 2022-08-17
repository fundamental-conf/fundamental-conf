<template>
  <header id="header" :class="{ 'scrolled-nav': scrollPosition }">
    <nav id="navbar" class="fd-nav">
      <div class="fd-nav__left">
        <router-link to="/" aria-label="Home">
          <IconFig name="new_logo" />
          <IconFig name="new_logo_icon" />
        </router-link>
      </div>

      <ul v-show="!mobile" class="fd-nav__right">
       <li> <router-link to="/team" class="fd-nav__link" aria-label="Our Team"
          >Our Team</router-link
        ></li>
       <li>  <router-link to="/agenda" class="fd-nav__link" aria-label="Agenda"
          >Agenda</router-link
        ></li>
       <li> <a aria-label="open submit your topic form" class="fd-nav__link"
        target="_blank" href="https://fundamentalconf-2021.netlify.app">
        Previous Event</a>
        </li>
        
      </ul>


<div class="fd_menu_icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.22217 16C2.22217 15.059 2.98494 14.2963 3.92587 14.2963H23.3333C24.2742 14.2963 25.037 15.059 25.037 16C25.037 16.9409 24.2742 17.7037 23.3333 17.7037H3.92587C2.98494 17.7037 2.22217 16.9409 2.22217 16Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.22217 24.8889C2.22217 23.948 2.98494 23.1852 3.92587 23.1852H14.4444C15.3853 23.1852 16.1481 23.948 16.1481 24.8889C16.1481 25.8298 15.3853 26.5926 14.4444 26.5926H3.92587C2.98494 26.5926 2.22217 25.8298 2.22217 24.8889Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.22217 7.11105C2.22217 6.17012 2.98494 5.40735 3.92587 5.40735H27.7777C28.7187 5.40735 29.4814 6.17012 29.4814 7.11105C29.4814 8.05198 28.7187 8.81476 27.7777 8.81476H3.92587C2.98494 8.81476 2.22217 8.05198 2.22217 7.11105Z" fill="white"/>
</svg>

      </div>
      
    </nav>
    <transition name="fd-nav__mobile">
          <ul v-show="mobileNav" class="fd-nav__dropdown">
        <li> <router-link to="/team" class="fd-nav__link" aria-label="Our Team"
          >Our Team</router-link
        ></li>
       <li>  <router-link to="/agenda" class="fd-nav__link" aria-label="Agenda"
          >Agenda</router-link
        ></li>
       <li> <a aria-label="open submit your topic form" class="fd-nav__link"
        target="_blank" href="https://fundamentalconf-2021.netlify.app">
        Previous Event</a>
        </li>
      </ul>
      </transition>
  </header>

  <main id="main" class="fd-main">
    <router-view />
  </main>
</template>

<script>
import Home from "./views/Home.vue";
import IconFig from "./components/IconFig.vue";

export default {
   name: "App",
  components: {
    Home,
    IconFig,
  },
  data(){
    return {
      scrollPosition:null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };

  },
  created(){
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen (){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth<=750){
        this.mobile=true;
        return;
      }
      this.mobile = false;
      this.mobileNav=false;
      return;
    }
  },
};

</script>

<style lang="scss" scoped>
.fd-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/HomePageBackground_whole.png");
}
.fd_menu_icon {
 display:none;
}
.fd-nav {
  display: flex;
  padding: 0 1rem;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  background-color: $brand-color-black;
  position: -webkit-sticky;
	position: sticky;
	top: 0;


  @media only screen and (min-width: 600px) {

    padding: 0 3rem;
 
  }

  &__right {
    display: flex;
    gap: 1rem;
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
  transition: all .3s ease;
}
.fd-nav__mobile-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fd-nav__mobile-enter, 
.fd-nav__mobile-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  &__dropdown {
     display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #1A1126;
    align-items: center;
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
    width: fit-content;
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
 display:block;
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
