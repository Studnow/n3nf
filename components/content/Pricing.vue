<template>
  <div class="pricing">
    <h3 class="pricing_header">Сколько стоит разработка и настройка лендинга</h3>
    <div class="pricing__cards">
      <div class="card pricing__cards__card">
        <div class="card-body">
          <h2 class="card-title">Простой шаблон</h2>
          <ul>
            <li>Шаблон из 4 блоков</li>
            <li>Установка на хостинг</li>
            <li>Помощь с покупкой домена</li>
            <li>Регистрация аккаунтов*</li>
            <li>Подбор изображений/видео материалов</li>
            <li>Текстовое наполнение</li>
          </ul>
          <div class="card-actions justify-center">
            <button class="btn btn-accent">Посмотреть пример</button>
          </div>
        </div>
      </div>
      <div class="card pricing__cards__card">
        <div class="card-body">
          <h2 class="card-title">Шаблон с формой</h2>
          <ul>
            <li>Простой шаблон +</li>
            <li>Форма обратной связи</li>
            <li>Простая анимация</li>
            <li>четыре</li>
            <li>пять</li>
            <li>шесть</li>
          </ul>
          <div class="card-actions justify-center">
            <button class="btn btn-accent">Посмотреть пример</button>
          </div>
        </div>
      </div>
      <div class="card pricing__cards__card">
        <div class="card-body">
          <h2 class="card-title">Расширенный шаблон</h2>
          <ul>
            <li>Шаблон с формой +</li>
            <li>Вёрстка по Вашему макету</li>
            <li>настройка рекламы</li>
            <li></li>
            <li>пять</li>
            <li>шесть</li>
          </ul>
          <div class="card-actions justify-center">
            <button class="btn btn-accent">Посмотреть пример</button>
          </div>
        </div>
      </div>
    </div>
    <span class="ml-16">*Регистрация аккаунтов для разработки, размещения на хостинге, аккаунт Google для подключения аналитики и рекламы.</span>
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
</style>
