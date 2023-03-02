<script setup>
useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Разрабатываю одностраничные сайты для привлечения аудитории к продукту/компании",
    },
  ],
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      body: true,
    },
  ],
  htmlAttrs: {
    lang: "ru",
  },
});
</script>

<template>
  <Head>
    <Link rel="icon" type="image/png" href="/favicon.png"></Link>
    <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></Script>
    <Title>Разработка одностраничного сайта для бизнеса</Title>
  </Head>
  <NuxtLayout>
    <Modal />
    <NuxtPage />
  </NuxtLayout>
</template>
