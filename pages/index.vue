<template>
  <div class="w-full">
    <Hero />
    <Pricing />
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
