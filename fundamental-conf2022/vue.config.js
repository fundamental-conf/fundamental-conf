const { defineConfig } = require("@vue/cli-service");
const { HotModuleReplacementPlugin } = require("webpack");
module.exports = {

// pages: {
//   'index': {
//     entry: '/src/view/Home/main.js',
//     template: 'public/index.html',
//     title: 'Home',
//     chunks: ['chunk-vendors', 'chunk-common', 'index']

//   },
//   'index': {
//     entry: '/src/view/About.vue',
//     template: 'public/index.html',
//     title: 'About',
//     chunks: ['chunk-vendors', 'chunk-common', 'index']

//   }
// },
 
// webpack: (config, options) =>
// {
//     config.module.rules.push({
//         test: /\.pdf$/i,
//         type: 'asset/source'
//     })

//     return config
// },
  

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
