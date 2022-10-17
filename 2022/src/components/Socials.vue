<template>
  <div class="fd-social">
    <div class="fd-social__logos">
      <slot name="logos"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Socials",
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles.scss";

  ::v-deep.fd-social {
    display: flex;
    flex-direction: column;
    
    &__logos {
      gap: 1rem;
      display: flex;
      align-items: center;
    }

    a {
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      border-radius: 0.3125rem;
      justify-content: center;
      transition: all .3s ease;
      border: 0.125rem solid transparent;
      
      svg {
        color: #3E86EF;
;
        transition: all .3s ease;
      }

      &:hover {
        svg {
          color: #2865BE;
        }
      }

      &:active {
        svg {
          color: #052E69;
        }
      }

      &:focus {
        outline: none;
        border-color: #9747FF;
        svg {
          color: #3E86EF;
        }
      }
    }

    h3 {
      font-weight: 400;
      font-size: 1.125rem;
      margin: 1rem 0 0.5rem 0;
      color: $brand-color-dark-blue;
       font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    }

    p {
      line-height: 1.4375rem;
      font-size: 1rem;
      letter-spacing: 0.01em;
      color: $brand-color-darkest-blue;
    }

    @media only screen and (min-width: 600px) {
      a {
        width: 4rem;
        height: 4rem;
      }

      h3 {
        font-size: 2rem;
        margin: 2.25rem 0 1rem 0;
        color: $brand-color-dark-blue;
        font-family:Ubuntu
      }

      p {
        line-height: 1.65;
        font-size: 1.25rem;
        letter-spacing: 0.01em;
      }
    }
  }


</style>
