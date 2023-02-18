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
  // props: ["onsub"],
  setup() {},
  data() {
    const simpleSchema = yup.object({
      firstName: yup.string().required().min(2),
      email: yup.string().required().email(),
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
        .then(() => this.$emit("onsub"))
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
      type="text"
      name="firstName"
      id="name"
      placeholder="Введите Ваше имя"
      class="input input-bordered input-secondary w-full max-w-xs"
    />
    <p class="text-error text-xs py-2" x-cloak>
      <ErrorMessage name="firstName" />
    </p>
    <label for="email"></label>
    <Field
      type="email"
      name="email"
      id="mail"
      placeholder="Введите ваш email"
      class="input input-bordered input-secondary w-full max-w-xs"
      aria-label="Email"
    />
    <p class="text-error text-xs py-2" x-cloak>
      <ErrorMessage name="email" />
    </p>
    <button class="btn btn-primary">Отправить</button>
    <!--Footer-->
    <div class="flex justify-end pt-2">
    </div>
  </Form>
</template>
