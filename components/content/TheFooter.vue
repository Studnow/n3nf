<script setup>
// const props = defineProps(["posts"]);
// const { data } = await useAsyncData("home", () => queryContent().only(["title", "thumbnail", "description"]).find());
// const { data } = await useAsyncData('home', () => queryContent().only(['title', 'thumbnail', 'description', "_path"]).find())
</script>

<template>
  <footer class="flex flex-col justify-between max-w-screen-lg mx-auto">
    <a href="/"><slot /></a>
    <!-- <section class="mx-auto max-w-screen-xl">
      <slot />
      <div class="grid grid-cols-3 gap-8">
        <div class="card card-side bg-base-100 shadow-xl" v-for="post in data" :key="post.title">
          <figure><img :src="post.thumbnail" alt="Movie" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              <NuxtLink :href="post._path">{{ post.title }}</NuxtLink>
            </h2>
            <p>{{ post.description }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <slot name="text" />
    <!-- <div v-for="post in data" :key="post.title">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div> -->
  </footer>
</template>
