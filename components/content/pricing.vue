<script setup>
// import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-secondary pt-4 text-secondary-content">
    <h2 class="text-center">Какие задачи решает лендинг пейдж?</h2>
    <div class="reasons">
      <div class="reasons_icon-card">
        <!-- <Icon icon="ic:baseline-groups" class="reasons_icon-card__icon"></Icon> -->
        <div class="reasons_text">
          <h3>Привлекает посетителей</h3>
          <span>Рассказывает информацию о продукте или услуге.</span>
        </div>
      </div>
      <div class="reasons_icon-card">
        <!-- <Icon icon="clarity:form-line" class="reasons_icon-card__icon"></Icon> -->
        <div class="reasons_text">
          <h3>Принимает заявки</h3>
          <span>Заинтересованные посетители оставляют данные для обратной связи</span>
        </div>
      </div>
      <div class="reasons_icon-card">
        <!-- <Icon icon="carbon:test-tool" class="reasons_icon-card__icon"></Icon> -->
        <div class="reasons_text">
          <h3 class="reasons_text__header">Тестирует идеи</h3>
          <span>Проверяет интересен ли продукт или услуга целевой аудитории</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.reasons {
  @apply w-full p-4 flex flex-col md:flex-row gap-6 justify-center items-center container mx-auto;
}
.reasons_icon-card {
  @apply flex gap-4 items-center;
}
.reasons_icon-card__icon {
  @apply text-7xl;
}
.reasons_text {
  @apply w-3/4 max-w-sm;
}
.reasons_icon-card:hover > div > h3 {
  @apply text-accent;
}
.reasons_icon-card:hover .reasons_icon-card__icon {
  @apply text-accent;
}
</style>
