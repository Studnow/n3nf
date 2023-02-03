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
      // console.log(data);
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    },
    onSubmit(value) {
      console.log(value);
      fetch("/", {
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" },
        // body: { email: value.email, firstName: value.name },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "heroForm",
          ...value,
          // name: value.firstName,
          // email: value.email,
        }),
      })
        .then(() => this.$emit("onsub"))
        .then(() => navigateTo("/thank/"))
        // .then((response) => {
        // if (response.ok) {
        //   myForm.reset();
        //   // console.log("form reset");
        //   this.formMessage = "Форма успешно отправлена";
        //   this.resetFields();
        // } else {
        //   this.formMessage = "Форма заполнена с ошибками";
        //   throw new Error(`Something went wrong: ${response.statusText}`);
        // }
        // })
        // .then(() => console.log("Form submitted"))
        .catch((error) => alert(error));
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
      class="border border-primary rounded-md px-2 py-1"
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
      class="border border-primary rounded-md px-2 py-1"
      aria-label="Email"
    />
    <p class="text-error text-xs py-2" x-cloak>
      <ErrorMessage name="email" />
    </p>
    <button class="btn">Отправить</button>
    <!--Footer-->
    <div class="flex justify-end pt-2">
      <!-- <span class="text-xs py-2 text-center text-error" x-text="formMessage">Form is not valid</span> -->
      <!-- <span class="text-primary text-xs py-2" x-text="formMessage">Форма успешно отправлена</span> -->
    </div>
  </Form>
</template>
