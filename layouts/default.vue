<script setup>
</script>

<template>
  <div
    data-theme="fantasy"
    class="grid grid-cols-[100%] min-h-screen grid-rows-[auto_1fr_auto] justify-items-center mx-auto"
  >
    <TheHeader />
    <!-- <GetPosts /> -->
    <slot />
    <MyFooter />
  </div>
</template>
