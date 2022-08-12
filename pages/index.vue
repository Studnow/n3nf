<template>
  <article>
    <h3>Index.vue</h3>
    <ContentList>
      <template v-slot="{ list }">
        <PostList :list="list" />
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </article>
</template>
