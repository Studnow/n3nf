<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
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
const onSubmit = (evt) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": evt.target.name,
      ...form.value,
    }),
  })
    .then(() => console.log("Form submitted"))
    .then(() => (quizCompleted.value = true))
    .catch((error) => alert(error));
};

const form = ref({});
const checkInput = (evt) => {
  if (evt.target.type == "radio") {
    quiz.value[currentQuestion.value].answers.map((s) =>
      s.text == evt.target.value ? (s.selected = evt.target.checked) : (s.selected = false)
    );
    form.value[evt.target.name] = evt.target.value;
  } else if (evt.target.type == "checkbox") {
    quiz.value[currentQuestion.value].answers.map((s) =>
      s.text == evt.target.value && s.selected == !evt.target.checked ? (s.selected = evt.target.checked) : s.selected
    );
    quiz.value[currentQuestion.value].answers.map((a) =>
      a.selected ? (form.value[evt.target.name] = [...quiz.value[currentQuestion.value].useranswer].toString()) : ""
    );
  }
};
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto prose-lg" v-cloak>
    <h1 class="text-center">Опрос</h1>
    <form
      class="quiz flex flex-col items-center justify-evenly py-16"
      id="testForm"
      name="testForm"
      method="post"
      netlify
      netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
      v-if="!quizCompleted"
    >
      <input type="hidden" name="form-name" value="testForm" />
      <p class="hidden">
        <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
      </p>
      <div class="quiz-info">
        <div class="quiz-questions">
          <span class="score">Вопрос {{ currentQuestion }} из {{ quiz.length }}</span>
          <span class="question">{{ getCurrentQuestion.question }}</span>
        </div>
      </div>
      <div
        class="answers w-full flex justify-evenly items-center"
        :class="getCurrentQuestion.index == index ? 'py-12' : ''"
        v-for="(q, index) in quiz"
        :key="index"
      >
        <div
          class="card w-[20%] h-[12rem] shadow-xl"
          :class="an.selected ? 'border border-2 border-info' : ''"
          v-for="(an, idx) in q.answers"
          :key="idx"
          v-show="currentQuestion == index"
        >
          <label>
            <div class="card-body">
              <h2 class="card-title">{{ an.text }}</h2>
              <input
                :type="q.type"
                :name="'a' + '-' + (index + 1)"
                class="hidden"
                @change="checkInput"
                :value="an.text"
                v-model="getCurrentQuestion.useranswer"
              />
            </div>
          </label>
        </div>
      </div>
      <button
        class="btn btn-accent btn-wide self-center"
        @click.prevent="NextQuestion"
        v-if="getCurrentQuestion.index != quiz.length - 1"
      >
        {{ getCurrentQuestion.useranswer < 1 ? "Выберите варианты" : "Дальше" }}
      </button>
      <button class="btn btn-accent btn-wide self-center" @click="NextQuestion" v-else>Отправить</button>
    </form>
    <section class="quiz flex flex-col justify-center py-16" v-else>
      <h2>Вы прошли опрос!</h2>
      <p>Ваши ответы {{ form }}</p>
    </section>
  </main>
</template>
