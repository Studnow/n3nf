<template>
  <div class="w-full">
    <!-- <Modal /> -->
    <!-- <PortfolioFrames /> -->
    <Hero />
    <Pricing />
    <Quiz />
    <!-- <CleanQuiz /> -->
    <!-- <HeroWithImg /> -->
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
