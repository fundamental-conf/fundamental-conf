<template>
  <div class="fd-agenda__wrap">
    <div class="fd-agenda__buttons" v-for="filter in filters" :key="filter">
      <button class="fd-agenda__button" :class="{active: filteredValue==filter.name}" @click="() => filterPosts(filter.name)">
        <span
          class="fd-agenda__icon"
          v-html="filter.icon"
          aria-hidden="true"
        ></span>
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<script>
import svgs from "@/assets/svg/svgs.js";
const filters = [
  { name: "All", icon: svgs.all },
  { name: "Design", icon: svgs.paintbrush },
  { name: "Development", icon: svgs.development },
  { name: "Accessibility", icon: svgs.accessibility },
];
export default {
  props: ["filterPosts", "filteredValue"],
  data() {
    return {
      svgs,
      filters,
    };
  },
};
</script>

<style lang="scss" scoped>
.fd-agenda {
  &__wrap {
    justify-content: center;
    gap: 5%;
    display: flex;
    flex-direction: row;
    flex: wrap;
    flex-wrap: wrap;
  }

  &__buttons {
    display: flex;
    margin: 1%;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    flex-direction: column;
  }

  &__button {
    gap: 0.5rem;
    display: flex;
    height: 3.375rem;
    font-weight: 500;
    color: #2865BE;
    padding: 0 1.25rem;
    font-size: 1.125rem;
    border-radius: 3rem;
    align-items: center;
    background: #E3EEFF;
    line-height: 1.375rem;
    transition: all 0.25s linear;
    border: 0.125rem solid #3E86EF;

    &:hover {
      background: #E3EEFF;
      border-color: #2865BE;
      box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
    }

    &:active {
      color: white;
      background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);

      svg {
        color: white;
      }
    }

    &:focus {
      border-color: #2865BE;
      outline-offset: 0.125rem;
      outline: 0.125rem solid #7352AD;
    }

    &.active {
      color: white;
      background: linear-gradient(73.81deg, #7843D5 0.22%, #1DC4FF 99.78%);

      svg {
        color: white;
      }
    }

  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.625rem;
    height: 2.625rem;
  }
}

@media (min-width: 750px) {
  .fd-agenda {
    &__wrap {
      gap: 0;
    }
  }
}
</style>
