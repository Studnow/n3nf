<script setup>
const clickLabelHeader = () => {
  const label = document.getElementById("my-modal-6");
  label.click();
};
</script>

<template>
  <header class="header">
    <div class="navbar navbar_custom">
      <div class="navbar-start">
        <div class="dropdown">
          <label class="btn btn-ghost lg:hidden" tabindex="0">
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
            <li><a>Верх</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Выбрать
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li><a>Опрос</a></li>
                <li><a>Портфолио</a></li>
              </ul>
            </li>
            <li><a>Блог</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="/">tkeld.com</a>
      </div>
      <div class="navbar-center hidden lg:flex font-medium text-lg">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#r">Верх</a></li>
          <li>
            <a href="#r">Портфолио</a>
          </li>
          <li><a href="#r">Блог</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <label
          class="btn btn-accent modal-button w-32 self-center"
          tabindex="0"
          for="my-modal-6"
          @keyup.enter="clickLabelHeader"
          @keyup.esc="clickLabelHeader"
          >Заказать</label
        >
      </div>
    </div>
  </header>
</template>

<style>
.header {
  @apply h-20 w-full sticky top-0 z-20 bg-base-100 text-base-content;
}
.navbar_custom {
  @apply py-4 max-w-screen-xl mx-auto;
}
</style>
