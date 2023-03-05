import VueGtag from "vue-gtag-next";
import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(VueGtag, {
  //   property: {
  //     id: "G-LH2VSYHL92",
  //   },
  // });
  nuxtApp.vueApp.use(
    createGtm({
      id: "GTM-M7KHCN9",
    })
  );
});
