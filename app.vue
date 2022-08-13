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
  </Head>
  <NuxtLayout>
    <NuxtPage />
    <Modal />
  </NuxtLayout>
</template>
