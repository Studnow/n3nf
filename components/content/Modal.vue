<template>
  <!-- The button to open modal -->
  <!-- <label for="my-modal-6" class="btn modal-button">open modal</label> -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
  <label tabindex="0" for="my-modal-6" class="modal cursor-pointer modal-bottom sm:modal-middle">
    <label class="modal-box relative flex flex-col justify-between items-center">
      <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 class="font-bold text-lg">Давайте начнём!</h3>
      <p class="py-4">Оставьте свои контактные данные и я предложу Вам варианты лендингов для Вашего бизнеса</p>
      <HeroForm />
      <p class="py-4">
        Ваши данные обрабатываются согласно
        <a href="#Privacy-policy" class="text-secondary hover:text-accent">Политике конфиденциальности</a>
      </p>
    </label>
  </label>
</template>
