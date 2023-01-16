<script setup>
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
  quizCompleted.value = true;
};
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto prose-lg" v-cloak>
    <h1 class="text-center">The Quiz</h1>
    <section class="quiz flex flex-col justify-center py-16" v-for="(q, index) in quiz" :key="q + index">
      <div class="quiz-info">
        <div class="quiz-questions">
          <span class="score">Вопрос {{}} из {{}}</span>
          <span class="question">{{ getCurrentQuestion.question }}</span>
        </div>
      </div>
      <div class="answers w-full py-20 flex justify-evenly items-center">
        <div class="card w-96 bg-base-100 shadow-xl" v-for="(a, aIndex) in getCurrentQuestion.answers" :key="aIndex">
          <label :for="'a-' + index + aIndex">
            <div class="card-body">
              <h2 class="card-title">{{ a.text }}</h2>
              <p>{{ q.useranswer }}</p>
              <input
                :id="'a-' + index + aIndex"
                :type="q.type"
                :class="q.type"
                :value="a.text"
                v-model="q.useranswer"
              />
              <!-- <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> -->
            </div>
          </label>
        </div>
      </div>
      <button class="btn btn-accent btn-wide self-center" @click="NextQuestion">
        {{
          getCurrentQuestion.index == quiz.length - 1
            ? "finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next Question"
        }}
      </button>
    </section>
  </main>
</template>
