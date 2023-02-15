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
  // {
  //   question: "Какая тематика сайта?",
  //   type: "radio",
  //   answers: [
  //     {
  //       text: "Продажа товаров",
  //       selected: false,
  //     },
  //     {
  //       text: "Услуги",
  //       selected: false,
  //     },
  //     {
  //       text: "Другое",
  //       selected: false,
  //     },
  //   ],
  //   useranswer: [],
  // },
  // {
  //   question: "Сколько планируете вложить в разработку?",
  //   type: "radio",
  //   answers: [
  //     {
  //       text: "до 500грн",
  //       selected: false,
  //     },
  //     {
  //       text: "от 500 до 1000 грн",
  //       selected: false,
  //     },
  //     {
  //       text: "от 1000 до 2000 грн",
  //       selected: false,
  //     },
  //     {
  //       text: "2000 грн или больше",
  //       selected: false,
  //     },
  //   ],
  //   useranswer: [],
  // },
  // {
  //   question: "Какой цели хотите достичь?",
  //   type: "checkbox",
  //   answers: [
  //     {
  //       text: "Привлечь внимание к продукту",
  //       selected: false,
  //     },
  //     {
  //       text: "Получить заказы",
  //       selected: false,
  //     },
  //     {
  //       text: "Протестировать нишу",
  //       selected: false,
  //     },
  //     {
  //       text: "Проанализировать потенциальных клиентов",
  //       selected: false,
  //     },
  //   ],
  //   useranswer: [],
  // },
]);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const result = ref({});

const getCurrentQuestion = computed(() => {
  let question = quiz.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});
const NextQuestion = () => {
  if (currentQuestion.value < quiz.value.length - 1) {
    console.log(quiz.value[currentQuestion.value].useranswer);
    currentQuestion.value++;
    return;
  }
  // quizCompleted.value = true;
};

const getResult = computed(() => {
  let answers = [];
  quiz.value.map((q) => answers.push(q.useranswer));
  return answers.toString();
});

const checkRadio = (evt) => {
  quiz.value[currentQuestion.value].answers.map((s) =>
    s.text == evt.target.value ? (s.selected = evt.target.checked) : (s.selected = false)
  );
};
const checkCheckbox = (evt) => {
  quiz.value[currentQuestion.value].answers.map((s) =>
    s.text == evt.target.value && s.selected == !evt.target.checked ? (s.selected = evt.target.checked) : s.selected
  );
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
      ...form,
      // ...evt,
      // name: evt.firstName,
      // email: evt.email,
    }),
  })
    .then(() => console.log("Form submitted"))
    .then(() => (quizCompleted.value = true))
    .catch((error) => alert(error));
};

const form = {};
const getRes = (evt) => {
  form[evt.target.name] = evt.target.value;
};
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto prose-lg h-screen" v-cloak>
    <h1 class="text-center">Опрос</h1>
    <form
      class="quiz flex flex-col items-center justify-evenly py-16 h-full"
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
      <div class="answers w-full py-20 flex justify-evenly items-center">
        <div class="card w-[20%] h-[12rem] shadow-xl">
          <label>
            <div class="card-body">
              <h2 class="card-title">Answer</h2>
              <input type="radio" name="clean-quiz-answer" class="border border-accent" @change="getRes" value="bla bla" />
            </div>
          </label>
          <p>{{ form }}</p>
        </div>
      </div>
      <button
        class="btn btn-accent btn-wide self-center"
        @click.prevent="NextQuestion"
        v-if="getCurrentQuestion.index != quiz.length - 1"
      >
        {{ !getCurrentQuestion.useranswer ? "Выберите варианты" : "Дальше" }}
      </button>
      <button class="btn btn-accent btn-wide self-center" @click="NextQuestion" v-else>Отправить</button>
    </form>
    <section class="quiz flex flex-col justify-center py-16" v-else>
      <h2>Вы прошли опрос!</h2>
      <p>Ваши ответы {{ result }}</p>
    </section>

    <!-- <form
      class="quiz flex flex-col justify-center py-16 h-full"
      name="quizForm"
      method="post"
      netlify
      netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
      v-if="!quizCompleted"
    >
      <input type="hidden" name="form-name" value="quizForm" />
      <p class="hidden">
        <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
      </p>
      <div class="quiz-info">
        <div class="quiz-questions">
          <span class="score">Вопрос {{ currentQuestion }} из {{ quiz.length }}</span>
          <span class="question">{{ getCurrentQuestion.question }}</span>
        </div>
      </div>
      <div class="answers w-full py-20 flex justify-evenly items-center">
        <div
          class="card w-[20%] h-[12rem] shadow-xl"
          :class="a.selected ? 'border border-2 border-info' : ''"
          v-for="(a, index) in getCurrentQuestion.answers"
          :key="index"
        >
        <input type="text" :name="'test-' + index" :id="'test-' + index">
          <label :for="'answer-' + index" class="h-full">
            <div class="card-body">
              <h2 class="card-title">{{ a.text }}</h2>
              <input
                v-if="getCurrentQuestion.type == 'radio'"
                :id="'answer-' + index"
                :name="getCurrentQuestion.index.toString()"
                type="radio"
                :value="a.text"
                class="radio hidden"
                v-model="getCurrentQuestion.useranswer"
                @change="checkRadio"
              />
              <input
                v-else
                :id="'answer-' + index"
                :name="getCurrentQuestion.index.toString()"
                type="checkbox"
                :value="a.text"
                class="checkbox hidden"
                v-model="getCurrentQuestion.useranswer"
                @change="checkCheckbox"
              />
              <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
            </div>
          </label>
        </div>
      </div>
      <button
        class="btn btn-accent btn-wide self-center"
        @click.prevent="NextQuestion"
        v-if="getCurrentQuestion.index != quiz.length - 1"
      >
        {{ !getCurrentQuestion.useranswer ? "Выберите варианты" : "Дальше" }}
      </button>
      <button class="btn btn-accent btn-wide self-center" @click="NextQuestion" v-else>Отправить</button>
    </form> -->
    <!-- <section class="quiz flex flex-col justify-center py-16" v-else>
      <h2>Вы прошли опрос!</h2>
      <p>Ваши ответы {{ result }}</p>
    </section> -->
  </main>
</template>
