<script setup>
import { ref, computed } from "vue";
const queez = ref({
  guide: [
    {
      question: "Question one? (choose all that apply):",
      answerType: "checkbox",
      color: "-secondary",
      useranswer: [],
      answered: null,
      answers: [
        {
          text: "checkbox A",
          selected: false,
        },
        {
          text: "checkbox B",
          selected: false,
        },
        {
          text: "checkbox C",
          selected: false,
        },
        {
          text: "checkbox D",
          selected: false,
        },
        {
          text: "checkbox E",
          selected: false,
        },
        {
          text: "checkbox F",
          selected: false,
        },
      ],
    },

    {
      question: "Question Two? (choose all that apply):",
      answerType: "checkbox",
      color: "-secondary",
      useranswer: [],
      answered: null,
      answers: [
        {
          text: "box A",
          selected: false,
        },
        {
          text: "box B",
          selected: false,
        },
        {
          text: "box C",
          selected: false,
        },
        {
          text: "box D",
          selected: false,
        },
      ],
    },

    {
      question: "Question Three? (choose all that apply):",
      answerType: "checkbox",
      color: "-secondary",
      useranswer: [],
      answered: null,
      answers: [
        {
          text: "box 1",
          selected: false,
        },
        {
          text: "box 2",
          selected: false,
        },
        {
          text: "box 3",
          selected: false,
        },
        {
          text: "box 4",
          selected: false,
        },
      ],
    },
    {
      question: "Question Four? (choose one that apply):",
      answerType: "radio",
      color: "-secondary",
      useranswer: [],
      answered: null,
      answers: [
        {
          text: "box 1",
          selected: false,
        },
        {
          text: "box 2",
          selected: false,
        },
        {
          text: "box 3",
          selected: false,
        },
        {
          text: "box 4",
          selected: false,
        },
      ],
    },
  ],
});

// const queezCompleted = ref(false);
// const currentQuestion = ref(0);
// const score = computed(() => {
//   let value = 1;
//   queez.value.guide.map((q) => {
//     if (currentQuestion > queez.value.guide.length) {
//       queezCompleted = true;
//       return currentQuestion;
//     }
//   });
//   return value;
// });
// const getCurrentQuestion = computed(() => {
//   let question = queez.value.guide[currentQuestion.value].question;
//   question = currentQuestion.value;
//   return question;
// });
// const NextQuestion = () => {
//   if (currentQuestion.value < queez.value.guide.length) {
//     currentQuestion.value++;
//     return;
//   } else queezCompleted.value = true;
// };
</script>

<template>
  <div v-cloak>
    <div v-for="(q, index) in queez.guide" :key="index">
      <transition tag="div" name="fade">
        <div>
          <h3>{{ q.question }}</h3>
          <span class="score">Вопрос {{ currentQuestion }}/{{ queez.guide.length }}</span>
          <div class="choices form-control">
            <div class="choice" v-for="(answer, answerIndex) in q.answers" :key="answer">
              <label class="cursor-pointer label">
                <input
                  :type="q.answerType"
                  v-bind:id="'guide_' + index + answerIndex"
                  :value="answer.text"
                  v-model="q.useranswer"
                  :class="[q.answerType, q.answerType+q.color]"
                  class="checkbox-secondary"
                />
                <span class="label-text">{{answer.text}}</span>
              </label>
              <!-- <label v-bind:for="'guide_' + index + answerIndex">{{ answer.text }}</label> -->
            </div>
          </div>
          <p>{{ q.useranswer }}</p>
          <button class="btn btn-accent" @click="NextQuestion">Select an option</button>
        </div>
      </transition>
    </div>
  </div>
</template>
