<script setup>
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
    <Link rel="icon" type="image/png" href="/favicon.png"></Link>
    <Title>Разработка web сайтов</Title>
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
  </Head>
  <NuxtLayout>
    <NuxtPage />
    <Modal />
  </NuxtLayout>
</template>
