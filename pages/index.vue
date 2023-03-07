<template>
  <div class="w-full">
    <div class="top">
      <Hero />
      <Reasons />
    </div>
    <Quiz />
    <!-- <div class="divider"></div>
    <Carousel /> -->
    <div class="divider"></div>
    <ContentList>
      <template v-slot="{ list }">
        <PostList :contentList="list" />
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
    <div class="divider"></div>
    <Pricing />
  </div>
</template>

<style scoped>
.top {
  @apply bg-gradient-to-t from-secondary to-base-100 shadow-lg;
}
</style>