import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  meta: {
    title: "Разработка web сайтов"
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
