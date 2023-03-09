import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "blog", mode: "out-in" },
  },
  nitro: {
    extends: {
      compressPublicAssets: true,
    },
  },
  // target: "static",
  meta: {
    title: "Разработка web сайтов",
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
