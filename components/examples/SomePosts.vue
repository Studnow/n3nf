<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent().only(["title", "thumbnail", "description", "_path"]).find()
);
</script>

<template>
  <section class="mx-auto max-w-screen-xl">
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
  </section>
</template>
