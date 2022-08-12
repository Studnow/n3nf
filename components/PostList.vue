<script setup>
const props = defineProps(["list"]);
</script>

<template>
  <section class="mx-auto max-w-screen-2xl">
    <div class="grid grid-cols-3 gap-8">
      <div class="card w-96 bg-base-100 shadow-xl" v-for="post in list" :key="post.title">
        <figure><img :src="post.thumbnail" alt="Shoes" /></figure>
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
  </section>
</template>
