<script>
export default {
  setup() {
    useHead({
      title: 'my Page',
      viewport: "width=device-widht, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content: "my site",
        },
      ],
    });
  },
};
</script>

<template>
  <Head>
    <Link rel="icon" type="image/png" href="/favicon.png"></Link>
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
