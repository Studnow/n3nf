<script setup>
import { Icon } from "@iconify/vue";

const pricingCards = ref([
  {
    title: "Старт",
    list: [
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
    ],
  },
  {
    title: "Старт",
    list: [
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
    ],
  },
  {
    title: "Старт",
    list: [
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
      {
        name: "Верстка",
      },
    ],
  },
]);
</script>

<template>
  <div class="pricing">
    <h2 class="pricing_header">Сколько стоит разработка лендинга</h2>
    <div class="pricing__cards">
      <div class="card pricing__cards__card" v-for="card in pricingCards">
        <div class="card-body">
          <h2 class="card-title">{{ card.title }}</h2>
          <ul class="card-list">
            <li class="card-list__item" v-for="item in card.list">
              <Icon class="icon" icon="basil:checked-box-outline" />{{ item.name }}
            </li>
          </ul>
          <div class="card-actions justify-center">
            <button class="btn btn-accent mt-8">Посмотреть пример</button>
          </div>
        </div>
      </div>
    </div>
    <p class="ml-16"
      >*Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рекламных великий все предложения текстами, ipsum страну своего взгляд всеми повстречался вершину дорогу курсивных текст грустный, злых встретил буквенных моей!</p
    >
  </div>
</template>

<style scoped>
.pricing {
  @apply mx-auto;
}
.pricing_header {
  @apply text-center;
}
.pricing__cards {
  @apply flex justify-evenly;
}
.pricing__cards__card {
  @apply w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-110 transition duration-300 ease-out;
}
.card-body:hover button {
  @apply animate-pulse;
}
.card-list__item {
  @apply flex justify-start text-lg;
}
.icon {
  @apply w-6 h-6 text-success mr-2;
}
</style>
