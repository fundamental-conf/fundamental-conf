const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/styles.scss";
        `,
      },
    },
  },
};
