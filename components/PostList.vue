<script setup>
const props = defineProps(["list"]);
</script>

<template>
  <section class="mx-auto max-w-screen-xl prose prose-base">
    <div class="divider"></div>
    <h2 class="text-center text-2xl">Выполненные работы</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
      <div class="card w-64 md:w-80 lg:w-96 bg-base-100 shadow-md hover:shadow-sm" v-for="post in list" :key="post.title">
        <figure><img :src="post.thumbnail" :alt="post.title" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            <NuxtLink :href="post._path">{{ post.title }}</NuxtLink>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </section>
</template>
