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
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      justify-content: center;
      transition: all .3s ease;
      border: 0.125rem solid transparent;
      
      svg {
        color: $brand-color-blue;
        transition: all .3s ease;
      }

      &:hover {
        svg {
          color: #977DC1;
        }
      }

      &:active {
        svg {
          color: #7B5CB2;
        }
      }

      &:focus {
        outline: none;
        border-color: #82DEFF;
        svg {
          color: $brand-color-blue;
        }
      }
    }

    h3 {
      font-size: 2rem;
      margin: 2rem 0 1rem 0;
      color: $brand-color-dark-blue;
      font-family:Ubuntu
    }

    p {
      font-size: 1.25rem;
      color: $brand-color-darkest-blue;
      line-height: 4.5vh;
    }

    @media (max-width: 768px) {
      align-items: center;
    }
  }
</style>
