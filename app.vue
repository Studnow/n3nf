<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);

useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Разрабатываю одностраничные сайты для привлечения аудитории к продукту/компании",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
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

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <Head>
    <!-- <Link rel="icon" type="image/png" href="/favicon.png"></Link> -->
    <Title>Разработка одностраничного сайта для бизнеса</Title>
  </Head>
  <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"></div>
  <NuxtLayout>
    <Modal />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
