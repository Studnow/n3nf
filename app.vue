<script setup>
import Queez from "./components/Queez.vue";
useHead({
  title: "my Page",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "my site",
    },
  ],
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      body: true,
    },
  ],
});
</script>

<template>
  <Head>
    <!-- Google Tag Manager -->
    <Script
      >(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
      f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M7KHCN9');</Script
    >
    <!-- End Google Tag Manager -->
    <Link rel="icon" type="image/png" href="/favicon.png"></Link>
    <Title>Разработка web сайтов</Title>
    <!-- Google tag (gtag.js) -->
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LH2VSYHL92"></Script>
    <Script>
      window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date());
      gtag("config", "G-LH2VSYHL92");
    </Script>
  </Head>
  <NuxtLayout>
    <!-- Google tag (gtag.js) -->
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LH2VSYHL92"></Script>
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-LH2VSYHL92");
    </Script>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M7KHCN9"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <NuxtPage />
    <Modal />
  </NuxtLayout>
</template>
