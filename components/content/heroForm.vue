<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref, onMounted } from "vue";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {},
  data() {
    const simpleSchema = yup.object().shape({
      firstName: yup.string().required("Это обязательное поле").min(2, "Минимум 2 буквы"),
      email: yup.string().required("Это обязательное поле").email("Введите корректный адрес"),
    });
    return {
      simpleSchema,
      form: { heroForm: "" },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    },
    onSubmit(value, { resetForm }) {
      console.log(value);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "heroForm",
          ...value,
        }),
      })
        .then(() => navigateTo("/thank/"))
        .catch((error) => alert(error));

      resetForm();
    },
  },
};
</script>

<template>
  <Form
    id="heroForm"
    name="heroForm"
    method="POST"
    class="flex flex-col gap-4 w-1/2 items-center"
    novalidate="true"
    netlify
    netlify-honeypot="bot-field"
    action="/pages/thank.vue"
    @submit="onSubmit"
    :validation-schema="simpleSchema"
  >
    <input type="hidden" name="form-name" value="heroForm" />
    <p class="hidden">
      <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
    </p>
    <label for="firstName"></label>
    <Field
      tabindex="1"
      type="text"
      name="firstName"
      id="name"
      placeholder="Введите Ваше имя"
      class="input input-bordered input-secondary w-full max-w-xs"
    />
    <p class="text-error" x-cloak>
      <ErrorMessage name="firstName" />
    </p>
    <label for="email"></label>
    <Field
      tabindex="1"
      type="email"
      name="email"
      id="mail"
      placeholder="Введите ваш email"
      class="input input-bordered input-secondary w-full max-w-xs"
      aria-label="Email"
    />
    <p class="h-0 text-error" x-cloak>
      <ErrorMessage name="email" class="tooltip tooltip-top tooltip-primary" data-tip="example@mail.com" />
    </p>
    <button tabindex="1" class="mt-4 btn btn-accent">Отправить</button>
    <!--Footer-->
    <div class="flex justify-end pt-2"></div>
  </Form>
</template>
