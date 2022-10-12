<template>
  <div class="w-full">
    <Queez />
    <Hero />
    <!-- <HeroWithImg /> -->
    <Carousel />
    <ContentList>
      <template v-slot="{ list }">
        <PostList :list="list" />
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
