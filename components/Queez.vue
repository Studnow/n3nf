<script setup>
import { ref, computed } from "vue";
const questions = ref([
  {
    question: "Какой тип сайта Вам нужен?",
    answer: 0,
    options: ["Лендинг", "Визитка", "Многостраничный"],
    selected: null,
  },
  {
    question: "На какой бюджет рассчитываете?",
    answer: 2,
    options: ["до 2000", "до 1000", "до 500"],
    selected: null,
  },
  {
    question: "Сколько времени до запуска?",
    answer: 1,
    options: ["Месяц", "Неделя", "Сегодня", "Вчера"],
    selected: null,
  },
]);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected != null && q.answer == q.selected) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (evt) => {
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
};

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }
  quizCompleted.value = true;
};
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto prose-lg">
    <h1 class="text-center">The Quiz</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <div class="quiz-questions flex flex-col">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="score">Вопрос {{ score }}/{{ questions.length }}</span>
        </div>

        <div class="options flex justify-evenly">
          <div
            class="card w-96 bg-base-100 shadow-xl"
            v-for="(option, index) in getCurrentQuestion.options"
            :key="index"
          >
            <label
              :for="'option-' + index"
              :class="`option ${
                getCurrentQuestion.selected == index ? (index == getCurrentQuestion.answer ? 'correct' : 'wrong') : ''
              } ${getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''}`"
            >
              <div class="card-body">
                <h2 class="card-title">{{ option }}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
                <input
                  type="radio"
                  :id="'option-' + index"
                  class="radio radio-secondary hidden"
                  :name="getCurrentQuestion.index"
                  :value="index"
                  v-model="getCurrentQuestion.selected"
                  :disabled="getCurrentQuestion.selected"
                  @change="SetAnswer"
                />
                <!-- <span>{{ option }}</span> -->
              </div>
            </label>
          </div>
        </div>
        <button class="btn btn-accent" @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
          {{
            getCurrentQuestion.index == questions.length - 1
              ? "finish"
              : getCurrentQuestion.selected == null
              ? "Select an option"
              : "Next Question"
          }}
        </button>
      </div>
    </section>
    <section v-else>
      <h2>You have finished the quiz!</h2>
      <p>Your score is {{ score }} / {{ questions.length }}</p>
    </section>
  </main>
</template>
