// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/scss/style.scss"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});