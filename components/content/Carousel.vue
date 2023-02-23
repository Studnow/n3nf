<template>
  <div class="container mx-auto">
    <h3 class="text-center text-2xl font-medium">Выполненные работы</h3>
    <div class="carousel carousel-center mx-auto">
      <div id="slide1" class="carousel-item relative w-full">
        <!-- <img src="/img/first-full/dbco-first.webp" class="w-full" /> -->
        <!-- <PortfolioFrames /> -->
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="/img/first-full/funiro-first.webp" class="w-full object-contain" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="/img/first-full/houseVOP-first.webp" class="w-full object-contain" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="/img/first-full/funiro-first.webp" class="w-full object-contain" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>
