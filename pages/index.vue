<template>
  <div class="w-full">
    <div class="top">
      <Hero />
      <Reasons />
    </div>
    <Carousel />
    <!-- <div class="divider"></div> -->
    <!-- <PostList /> -->
    <div class="divider"></div>
    <Pricing />
    <div class="divider"></div>
    <Quiz />
  </div>
</template>

<style scoped>
.top {
  @apply bg-gradient-to-t from-secondary to-base-100 shadow-lg;
}
</style>
