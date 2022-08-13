<template>
  <form
    id=""
    name=""
    method="POST"
    class="flex flex-col gap-4 w-1/2 items-center my-4"
    x-data="contactForm"
    x-ref="form"
    novalidate
    netlify
    action="success"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label for="username">Введите имя</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Введите Ваше имя"
      class="border border-primary rounded-md px-2 py-1"
      required
      aria-label="Имя"
      x-model="fields.name.value"
    />
    <p class="text-error text-xs py-2" x-cloak>
      <span x-text="fields.name.errorMsg"></span>
    </p>
    <label for="email">Введите email</label>
    <input
      type="email"
      name="email"
      id="mail"
      placeholder="Введите ваш email"
      class="border border-primary rounded-md px-2 py-1"
      required
      aria-label="Email"
      x-model="fields.email.value"
    />
    <p class="text-error text-xs py-2" x-cloak>
      <span x-text="fields.email.errorMsg"></span>
    </p>
    <button form="{{formId}}" class="btn" type="submit">Отправить</button>
    <!--Footer-->
    <div class="flex justify-end pt-2">
      <span class="text-xs py-2 text-center text-error" x-text="formMessage">Form is not valid</span>
      <!-- <span class="text-primary text-xs py-2" x-text="formMessage">Форма успешно отправлена</span> -->
    </div>
  </form>
</template>
