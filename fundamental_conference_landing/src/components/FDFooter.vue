<template>
  <footer class="fd-footer" id="footer" role="contentinfo">
    <div class="fd-footer__left">
      <a
        href="https://sap.github.io/fundamental/"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Fundamental Library Home</a
      >
      <a
        href="https://www.youtube.com/c/FundamentalLibrary"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Youtube</a
      >
      <a
        href="https://medium.com/fundamental-library"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Medium</a
      >
      <a
        href="https://www.linkedin.com/company/sap-graph/"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >LinkedIn</a
      >
      <a
        href="https://twitter.com/fundamental_lib"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Twitter</a
      >

      <!-- <a href="https://community.sap.com/topics/fundamental-library" rel="noopener noreferrer" target="_blank" hreflang="en">SAP Community</a> -->
    </div>
    <div class="fd-footer__right">
      <a
        href="https://www.sap.com/about/legal/privacy.html"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Privacy</a
      >
      <a
        href="https://www.sap.com/corporate/en/legal/terms-of-use.html"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Terms of Use</a
      >
      <a
        href="https://www.sap.com/about/legal/impressum.html"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        >Legal Disclosure</a
      >
      <p>© Copyright 2022, SAP SE</p>
      <p>Fundamental Library is released under the Apache License 2.0</p>
      <img
        alt="SAP logo"
        src="@/assets/images/SAP_Best_R_grad_blk_scrn.png"
        class="fd-sap-logo"
      />
      <img
        alt="SAP logo"
        aria-hidden="true"
        src="@/assets/images/SAP_Best_R_grad_blk_scrn.png"
        class="fd-sap-logo-mobile"
      />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fd-footer {
  display: flex;
  background: #f5f6f7;
  justify-content: space-between;
  padding: 5.625rem 5rem;

  font-family: "72";

  &__nav {
    color: black;
    display: none;
    cursor: pointer;
    font-size: 1.2rem;

    width: fit-content;
    align-self: center;

    div {
      margin: 2rem;
      border-bottom: 0.125rem solid blue;
    }
  }

  &__left,
  &__right {
    gap: 0.25rem;
    display: flex;
    color: black;
    flex-direction: column;

    p {
      padding: 0;
      font-size: 1rem;
    }
  }

  &__right {
    align-items: flex-end;
  }

  a {
    color: black;
    outline: none;
    position: relative;
    width: fit-content;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.25rem;
    outline-offset: 1.25rem;
    transition: all 0.3s ease-in-out;
    border: 0.125rem solid transparent;
    font-family: "72-Light";

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
      background-color: #2cacd1;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      color: #007ea3;

      &::after {
        transform: scale(1);
      }
    }

    &:active {
      color: #fff;
    }

    &:focus {
      border-color: #82deff;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }
  }
}

.fd-sap-logo {
  fill: #008fd3;
  max-width: 10rem;
  display: none;
}

.fd-sap-logo-mobile {
  fill: #008fd3;
  max-width: 10rem;
  margin: 1rem auto;
  display: block;
}

@media (max-width: 734px) {
  .fd-footer {
    flex-direction: column;
    padding: 3rem 1rem;
    gap: 3.5rem;

    &__nav,
    &__left,
    &__right {
      align-items: center;
      text-align: center;
    }
  }

  .fd-footer__nav {
    display: block;
  }
}

@media only screen and (min-width: 600px) {
  .fd-sap-logo {
    display: block;
  }

  .fd-sap-logo-mobile {
    width: 4rem;
    fill: #008fd3;
    max-width: 6.25rem;
    display: none;
    margin: 1rem auto;
  }
}
</style>
