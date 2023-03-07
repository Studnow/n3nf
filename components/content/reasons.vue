<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class=" pt-4 text-secondary-content">
    <h2 class="text-center">Какие задачи решает лендинг пейдж?</h2>
    <div class="reasons">
      <div class="icon-card" data-aos="fade-right" data-aos-delay="5" data-aos-duration="700">
        <Icon icon="ic:baseline-groups" class="icon"></Icon>
        <div class="reasons_text">
          <h3>Привлекает посетителей</h3>
          <span>Рассказывает информацию о продукте или услуге.</span>
        </div>
      </div>
      <div class="icon-card" data-aos="fade-up" data-aos-delay="5" data-aos-duration="700">
        <Icon icon="clarity:form-line" class="icon"></Icon>
        <div class="reasons_text">
          <h3>Принимает заявки</h3>
          <span>Заинтересованные посетители оставляют данные для обратной связи</span>
        </div>
      </div>
      <div class="icon-card" data-aos="fade-left" data-aos-delay="5" data-aos-duration="700">
        <Icon icon="carbon:test-tool" class="icon"></Icon>
        <div class="reasons_text">
          <h3 class="reasons_text__header">Тестирует идеи</h3>
          <span>Проверяет интересен ли продукт или услуга целевой аудитории</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reasons {
  @apply w-full p-4 flex flex-col md:flex-row gap-6 justify-center items-center container mx-auto overflow-hidden;
}
.icon-card {
  @apply flex gap-4 items-center;
}
.icon {
  @apply text-7xl;
}
.reasons_text {
  @apply w-3/4 max-w-sm;
}
</style>
