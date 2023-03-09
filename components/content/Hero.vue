<script setup>
const clickLabelHero = () => {
  const box = document.getElementById("my-modal-6");
  box.click();
};
</script>

<template>
  <div class="hero">
    <div class="hero_left-img">
      <div class="decor">
        <div class="w-[16rem] h-[9rem] bg-accent shadow"></div>
        <div class="w-[9rem] h-[16rem] bg-accent shadow"></div>
        <picture
          class="decor__top-pic absolute w-[20rem] h-[10rem] top-8 -left-4 shadow hover:scale-150 hover:translate-x-5 hover:-translate-y-5 transition-transform ease-out duration-500"
        >
          <source type="image/webp" srcset="/img/md-first-prev/funiro-firstmed.webp" alt="Пример сайта мебели" />
          <img
            src="/img/md-first-prev/funiro-firstmed.jpg"
            width="428"
            height="230"
            alt="Пример сайта мебели"
            class=""
          />
        </picture>
        <picture
          class="decor__bot-pic absolute w-[18rem] h-[8rem] bottom-8 left-4 shadow hover:scale-150 hover:translate-x-5 transition-transform ease-out duration-500"
        >
          <source
            type="image/webp"
            srcset="/img/md-first-prev/slik-first-md.webp"
            alt="Пример сайта магазина автомобильных шин и дисков"
          />
          <img
            src="/img/md-first-prev/slik-first-md.jpg"
            width="428"
            height="230"
            alt="Пример сайта магазина автомобильных шин и дисков"
            class=""
          />
        </picture>
      </div>
    </div>
    <div class="content z-10">
      <!-- <div class="description"> -->
        <!-- <p class="prose prose-base text-xl">Разработочная tkeld.com</p> -->
        <h1 class="content__header">Разработаю лендинг под ключ</h1>
        <p class="content__text">
          Лендинг - это одностраничный сайт, на котором представлены конкретные предложения продукта или услуги с целью
          привлечения потенциальных клиентов и увеличения продаж.
        </p>
        <!-- <p class="text-xl w-full sm:ml-20">Привлекайте посетителей, которые могут стать клиентами.</p> -->
        <!--<p class="prose prose-base text-xl">
            Побуждает посетителей купить продукт или подписаться на рассылку.
          </p> -->
        <!-- <ul class="list-disc prose prose-base text-xl marker:text-primary">
            <li>Одностраничный, быстродействующий сайт - помогает продвигать продукт или услугу.</li>
            <li>Побуждает посетителей купить продукт или подписаться на рассылку.</li>
            <li>Увеличивает количество посетителей, которые могут стать потенциальными клиентами.</li>
          </ul> -->
        <!-- <p class="hero_text__description">
          </p> -->
        <label
          tabindex="0"
          @keyup.enter="clickLabelHero"
          @keyup.esc="clickLabelHero"
          for="my-modal-6"
          class="btn btn-accent modal-button w-32 self-center"
          >Заказать</label
        >
        <!-- <button class="btn btn-accent">Get Started</button> -->
      <!-- </div> -->
    </div>
    <!-- <div class="hero_right-img">
        <div class="decor">
          <div class="w-[9rem] h-[16rem] bg-primary relative -right-[7rem]"></div>
          <div class="w-[16rem] h-[9rem] bg-primary"></div>
          <picture class="bg-dbco absolute w-[20rem] h-[12rem] bottom-8 -left-12">
            <source type="image/webp" srcset="/img/md-first-prev/dbco-firstmed.webp" alt="Пример сайта" />
            <img
              src="/img/md-first-prev/dbco-firstmed.jpg"
              width="288"
              height="186"
              alt="Пример сайта"
              class=""
            />
          </picture>
        </div>
      </div> -->
  </div>
</template>

<style scoped>
.hero {
  @apply flex justify-evenly items-center h-[70vh] mt-24 md:mt-0 md:px-4 w-full;
}
.content {
  font-family: Inter, sans-serif;
  @apply flex flex-col gap-16 md:gap-10 items-center max-w-xl;
}
.content__header {
  @apply text-5xl font-bold text-center text-secondary;
}
.content__text {
  @apply text-xl w-full px-4 md:px-0 md:ml-20;
}
.hero_text__description {
  @apply font-normal text-xl md:max-w-[2/3];
}
.hero_left-img .hero_right-img {
  @apply w-1/3 h-screen;
}
.decor {
  @apply hidden lg:block relative;
}
.decor__top-pic {
  animation: to-r 1.2s ease-out;
}
.decor__bot-pic {
  animation: to-r 1.5s ease-out;
}
@keyframes to-r {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
