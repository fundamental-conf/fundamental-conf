<template>
  <footer class="fd_footer">
    <div class="fd_copyright">
      <a href=""> Fundamental Library </a>
    </div>
    <div class="fd_copyright--center">
      <a href=""> Fundamental Library </a>
    </div>
    <div class="fd_copyright--right">
      <p>
        Copyright 2022 <br /><br />
        Legal Disclaimer Statements
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fd_footer {
  height: 9em;
  background-color: $brand-color-black;
  padding: 4em;
  color: white;
  .fd_copyright {
    text-align: left;

    &--center {
      text-align: center;
    }
    &--right {
      text-align: right;
    }
  }
}
</style>
