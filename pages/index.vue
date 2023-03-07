<template>
  <div class="w-full">
    <Pricing />
    <div class="top">
      <Hero />
      <Reasons />
    </div>
    <Quiz />
    <Carousel />
    <ContentList>
      <template v-slot="{ list }">
        <PostList :contentList="list" />
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>

<style scoped>
.top {
  @apply bg-gradient-to-t from-secondary to-base-100 shadow-lg;
}
</style>