<template>
  <!-- Fundamental Icons -->
  <svg
    v-if="name === 'logo'"
    viewBox="0 0 33 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 14.6249V31.125L33 16.4375V0L0 14.6249Z"
      fill="url(#paint0_linear_41_400)"
    />
    <path
      d="M0 49.5628L33 64V47.4999L18.5822 41.3127L33 34.8753V18.4378L0 33.0627V49.5628Z"
      fill="url(#paint1_linear_41_400)"
    />
    <path d="M0 33.0627V49.5628L33 64V47.5" fill="url(#paint2_linear_41_400)" />
    <defs>
      <linearGradient
        id="paint0_linear_41_400"
        x1="33.6146"
        y1="1.08782"
        x2="-1.1523"
        y2="30.0955"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#077EA4" stop-opacity="0.9" />
        <stop offset="0.13" stop-color="#077EA4" stop-opacity="0.9" />
        <stop offset="0.39" stop-color="#1F9ABF" stop-opacity="0.9" />
        <stop offset="0.76" stop-color="#4DB5D3" stop-opacity="0.8" />
        <stop offset="1" stop-color="#4DB5D3" stop-opacity="0.7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_41_400"
        x1="6.31196"
        y1="57.1272"
        x2="41.0789"
        y2="28.1195"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.26" stop-color="#4DB5D3" stop-opacity="0.7" />
        <stop offset="0.68" stop-color="#1F9ABF" stop-opacity="0.9" />
        <stop offset="0.87" stop-color="#077EA4" stop-opacity="0.9" />
        <stop offset="1" stop-color="#077EA4" stop-opacity="0.9" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_41_400"
        x1="5.71442"
        y1="29.744"
        x2="27.4685"
        y2="67.2106"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#077EA4" stop-opacity="0.9" />
        <stop offset="0.22" stop-color="#1F9ABF" stop-opacity="0.9" />
        <stop offset="0.39" stop-color="#1F9ABF" stop-opacity="0.9" />
        <stop offset="0.76" stop-color="#4DB5D3" stop-opacity="0.8" />
        <stop offset="1" stop-color="#4DB5D3" stop-opacity="0.7" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: ["name"],
};
</script>
