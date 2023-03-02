<script setup>
// const { data } = await useAsyncData('home', () => queryContent().only(['title', 'thumbnail', 'description', "_path"]).find())

console.log(data)
</script>

<template>
  <!-- <section class="mx-auto max-w-screen-xl">
    <slot />
    <div class="grid grid-cols-3 gap-8">
      <PostList :posts="data" />
    </div>
  </section> -->
</template>
