<template>
  <header :class="{ 'scrolled-nav': scrollPosition }" id="navbar">
    <nav>
      <div class="branding">
        <icon-fig name="logo"></icon-fig>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Past Events' }"
            >Past Events</router-link
          >
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
     <transition name="fd_mobile_nav">
          <ul v-show="mobileNav" class="fd_dropdown_nav">
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Past Events' }"
            >Past Events</router-link
          >
        </li>
      </ul>
      </transition>
  </header>
  
</template>

<script>
import IconFig from "./IconFig.vue";

export default {
  components: {
    IconFig,
  },
  name: "navigation",
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


header {
  background-color: $brand-color-black;
  width: 100%;
  //   position: fixed; //are we keeping the nav bar at all time?
  transition: 0.5s ease all;
  color: #fff;
  height: 12vh;
  flex: none;
  order: 0;

  nav {
  transition: 0.5s ease all;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
@media (max-width:767px) {
  max-width: 1140px;
  
}
  .branding {
    padding-left: 3%;
    padding-top: 1%;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
      padding-top: 2%;
    font-size: 2.5vw;
  font-weight: 400;
  font-family: Ubuntu;
  font-style: normal;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  li {
  // list-style-type: none;
  padding-right:5%;
}
.link {
  transition: .5s ease all;
  border-bottom: 1px solid transparent;
  &:hover{
    border-color:silver;
  }
}

}
.fd_menu_icon {
     position: absolute;
     right: 3%;
     cursor: pointer;
// &:mobileNav ~ .fd_dropdown_nav {
//   opacity: 1;
//   clip-path: circle (100% at center);
// }
}


}
.fd_dropdown_nav{
 display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    background-color: #1A1126;
    align-items: center;
    line-height: 5rem;
    padding: 10rem 0; 
    width: 100vw;
    opacity: 1;
    font-size: 2rem;
    height: 100vh;
    top: 12vh;
    right: 0;
    z-index: 1;

    opacity: 98%;
  
}


.fd_mobile_nav-enter-active {
  transition: all .3s ease;
}
.fd_mobile_nav-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fd_mobile_nav-enter, 
.fd_mobile_nav-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
}

</style>
