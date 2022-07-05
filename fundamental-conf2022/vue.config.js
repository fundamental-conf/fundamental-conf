const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/styles.scss";
        `,
      },
    },
  },
};
