<template>
  <div class="w-full">
    <!-- <PortfolioFrames /> -->
    <Hero />
    <Quiz />
    <!-- <CleanQuiz /> -->
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
