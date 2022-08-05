<template>
  <header id="header">
    <nav id="navbar" class="fd-nav">
      <div class="fd-nav__left">
        <router-link to="/" aria-label="Home">
          <IconFig name="new_logo" />
          <IconFig name="new_logo_icon" />
        </router-link>
      </div>

      <div class="fd-nav__right">
        <router-link to="/team" class="fd-nav__link" aria-label="Our Team"
          >Our Team</router-link
        >
      </div>
    </nav>
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
};
</script>

<style lang="scss" scoped>
.fd-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/HomePageBackground_whole.png");
}

.fd-nav {
  display: flex;
  padding: 0 1rem;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  background-color: $brand-color-black;

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
