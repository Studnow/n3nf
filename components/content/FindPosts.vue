<script setup>
const content = await queryContent("blog").only(["_path", "title"]).find();
// const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());
</script>

<template>
  <section class="mx-auto max-w-screen-xl">
    <slot name="FindPostsTitle" />
    <div class="grid grid-cols-3 gap-8">
      <ul>
        <li v-for="post in content">
          <a :href="post._path">{{ post.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>
