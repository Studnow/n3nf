<script setup>
import { Form, Field, ErrorMessage, useField } from "vee-validate";
import * as yup from "yup";
import { ref, computed } from "vue";

const quiz = ref([
  {
    question: "Какой тип сайта Вам нужен?",
    type: "radio",
    answers: [
      {
        text: "Одностраничный",
        selected: false,
      },
      {
        text: "Многостраничный",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Какая тематика сайта?",
    type: "radio",
    answers: [
      {
        text: "Продажа товаров",
        selected: false,
      },
      {
        text: "Услуги",
        selected: false,
      },
      {
        text: "Другое",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Сколько планируете вложить в разработку?",
    type: "radio",
    answers: [
      {
        text: "до 500грн",
        selected: false,
      },
      {
        text: "от 500 до 1000 грн",
        selected: false,
      },
      {
        text: "от 1000 до 2000 грн",
        selected: false,
      },
      {
        text: "2000 грн или больше",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Какой цели хотите достичь?",
    type: "checkbox",
    answers: [
      {
        text: "Привлечь внимание к продукту",
        selected: false,
      },
      {
        text: "Получить заказы",
        selected: false,
      },
      {
        text: "Протестировать нишу",
        selected: false,
      },
      {
        text: "Проанализировать потенциальных клиентов",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Как с Вами связаться?",
    type: ["text", "email"],
    validateName: yup.string().required("Введите имя").min(2, "Минимум 2 буквы"),
    validateEmail: yup.string().required("Введите адрес").email("Введите корректный адрес"),
    answers: [{}],
    useranswer: [],
  },
]);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
// const result = ref({});

const getCurrentQuestion = computed(() => {
  let question = quiz.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});
const NextQuestion = () => {
  if (currentQuestion.value < quiz.value.length - 1) {
    currentQuestion.value++;
    return;
  }
};

const encode = (data) => {
  console.log(data);
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};
const onSubmit = (value) => {
  console.log(value);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "testForm",
      ...value,
    }),
  })
    .then(() => console.log("Form submitted"))
    .then(() => (quizCompleted.value = true))
    .catch((error) => alert(error));
};

// const form = ref({});
const checkInput = (evt) => {
  if (evt.target.type == "radio") {
    quiz.value[currentQuestion.value].answers.map((s) =>
      s.text == evt.target.value ? (s.selected = evt.target.checked) : (s.selected = false)
    );
    // form.value[evt.target.name] = evt.target.value;
  } else if (evt.target.type == "checkbox") {
    quiz.value[currentQuestion.value].answers.map((s) =>
      s.text == evt.target.value && s.selected == !evt.target.checked ? (s.selected = evt.target.checked) : s.selected
    );
  }
};
const radialProgress = computed(() => {
  let result = (currentQuestion.value / quiz.value.length) * 100;
  return "--value:" + result;
});
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto prose-lg" v-cloak>
    <progress class="progress" :value="currentQuestion" :max="quiz.length"></progress>
    <h3 class="text-center">Опрос</h3>
    <Form
      class="quiz flex flex-col items-center justify-evenly"
      id="testForm"
      name="testForm"
      method="post"
      netlify
      netlify-honeypot="bot-field"
      @submit="onSubmit"
      v-if="!quizCompleted"
    >
      <input type="hidden" name="form-name" value="testForm" />
      <p class="hidden">
        <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
      </p>
      <!-- <progress class="progress w-56" :value="currentQuestion" :max="quiz.length"></progress> -->
      <div class="quiz-info">
        <div class="quiz-questions">
          <div class="flex flex-col">
            <span class="question">{{ getCurrentQuestion.question }}</span>
          </div>
          <div class="radial-progress" :style="radialProgress" :value="currentQuestion" :max="quiz.length">
            {{ currentQuestion }} из {{ quiz.length }}
          </div>
          <!-- <span class="score">Вопрос {{ currentQuestion }} из {{ quiz.length }}</span> -->
        </div>
      </div>
            <span class="question">{{
              getCurrentQuestion.type == "radio" ? "Выберите один из вариантов" : "Выберите несколько вариантов"
            }}</span>
      <div
        class="answers w-full flex flex-col gap-4 md:flex-row justify-evenly items-center"
        :class="getCurrentQuestion.index == index ? 'py-4 md:py-12' : ''"
        v-for="(q, index) in quiz"
        :key="index"
      >
        <div
          class="card min-w-[60%] md:min-w-[20%] max-w-[35%] shadow-xl overflow-hidden"
          :class="an.selected ? 'border border-2 border-info' : ''"
          v-for="(an, idx) in q.answers"
          :key="idx"
          v-show="currentQuestion == index"
        >
          <label class="h-full" v-if="!Array.isArray(q.type)">
            <div class="card-body p-4 md:p-8 items-center">
              <span class="card-title">{{ an.text }}</span>
              <Field
                :type="q.type"
                :name="'a' + '-' + (index + 1)"
                class="hidden"
                :value="an.text"
                @change="checkInput"
              />
              <!-- <Field type="range" :name="'a' + '-' + (index + 1)" class="range" min="0" max="100" value="20" /> -->
            </div>
          </label>
          <div class="card-body gap-8" v-else>
            <label class="h-full flex flex-col" v-for="(f, i) in q.type" :key="i">
              <div class="msg">
                <span class="card-title">{{ f == "text" ? "Имя" : "Email" }}</span>
                <Field
                  :type="f"
                  :name="'user-' + f"
                  class="input input-bordered input-secondary w-full max-w-xs"
                  :rules="f == 'text' ? q.validateName : q.validateEmail"
                />
                <ErrorMessage
                  :name="'user-' + f"
                  class="text-error tooltip tooltip-bottom tooltip-error max-w-xs"
                  :data-tip="f == 'email' ? 'Пример: example@mail.com' : '2 буквы или больше'"
                />
                <!-- :class="f == 'email' ? 'tooltip tooltip-bottom tooltip-error' : ''" -->
              </div>
            </label>
          </div>
        </div>
      </div>
      <button
        class="btn btn-accent btn-wide self-center"
        @click.prevent="NextQuestion"
        v-if="getCurrentQuestion.index != quiz.length - 1 && getCurrentQuestion.type == 'radio'"
        :disabled="getCurrentQuestion.answers.map((s) => s.selected).includes(true) ? false : true"
      >
        {{ getCurrentQuestion.answers.map((s) => s.selected).includes(true) ? "Дальше" : "Выбрать один" }}
      </button>
      <button
        class="btn btn-accent btn-wide self-center"
        @click.prevent="NextQuestion"
        v-else-if="getCurrentQuestion.index != quiz.length - 1 && getCurrentQuestion.type == 'checkbox'"
        :disabled="getCurrentQuestion.answers.map((s) => s.selected).includes(true) ? false : true"
      >
        {{ getCurrentQuestion.answers.map((s) => s.selected).includes(true) ? "Дальше" : "Выбрать несколько" }}
      </button>
      <button class="btn btn-accent btn-wide self-center" @click="NextQuestion" v-else>
        {{ "Отправить" }}
      </button>
    </Form>
    <section class="quiz flex flex-col justify-center py-16" v-else>
      <h2>Вы прошли опрос!</h2>
      <!-- <p>Ваши ответы {{ form }}</p> -->
    </section>
  </main>
</template>
