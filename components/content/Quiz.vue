<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const quiz = ref([
  {
    question: "Какой продукт или услугу Вы хотели бы продвигать с помощью лендинга?",
    type: ["text"],
    validateName: yup.string().required("Введите ответ").min(3, "Минимум 3 буквы"),
    answers: [
      {
        atype: "text",
        text: "",
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
        text: "Проанализировать целевую аудиторию",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Какую функциональность Вы хотите использовать?",
    type: "checkbox",
    answers: [
      {
        text: "Интеграция социальных сетей",
        selected: false,
      },
      {
        text: "Возможность оплаты",
        selected: false,
      },
      {
        text: "Подписка на рассылку",
        selected: false,
      },
      {
        text: "Обратный звонок",
        selected: false,
      },
      {
        text: "Получение контактов",
        selected: false,
      },
    ],
    useranswer: [],
  },
  {
    question: "Есть ли у Вас готовый контент для лендинга?",
    type: "radio",
    answers: [
      {
        text: "Есть текст",
        selected: false,
      },
      {
        text: "Есть изображения",
        selected: false,
      },
      {
        text: "Есть видео",
        selected: false,
      },
      {
        text: "Есть готовый дизайн с необходимым контентом",
        selected: false,
      },
      {
        text: "Ничего нет",
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
    question: "Сколько времени планируете на создание лендинга?",
    type: "radio",
    answers: [
      {
        text: "На вчера",
        selected: false,
      },
      {
        text: "Не больше недели",
        selected: false,
      },
      {
        text: "Неделя-две",
        selected: false,
      },
      {
        text: "Две три недели",
        selected: false,
      },
      {
        text: "Месяц или больше",
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
    answers: [
      {
        atype: "text",
        text: "Имя",
      },
      {
        atype: "email",
        text: "Email",
      },
      {
        atype: "file",
        text: "Загрузите файл с техническим заданием или готовым дизайном",
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
  if (currentQuestion.value < quiz.value.length) {
    currentQuestion.value++;
    return;
  }
};
const PrevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--;
    return;
  }
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};
const onSubmit = (value) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "quizForm",
      ...value,
    }),
  })
    .then(() => console.log("Form submitted"))
    .then(() => (quizCompleted.value = true))
    .catch((error) => alert(error));
};

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
  } else {
    quiz.value[currentQuestion.value].answers.map((s) =>
      evt.target.value.length >= 3 ? (s.selected = true) : (s.selected = false)
    );
  }
};
const radialProgress = computed(() => {
  let result = (currentQuestion.value / quiz.value.length) * 100;
  return "--value:" + result;
});
</script>

<template>
  <main class="app max-w-screen-2xl mx-auto mt-10" v-cloak>
    <!-- <progress class="progress" :value="currentQuestion" :max="quiz.length"></progress> -->
    <div class="quiz-heading relative">
      <h2 class="text-center text-secondary">Опрос</h2>
      <div
        class="radial-progress absolute right-6 top-6 sm:top-0 sm:right-20"
        :style="radialProgress"
        :value="currentQuestion"
        :max="quiz.length"
      >
        {{ currentQuestion }} из {{ quiz.length }}
      </div>
    </div>
    <Form
      class="quiz flex flex-col items-center justify-center mb-20"
      id="quizForm"
      name="quizForm"
      method="post"
      netlify
      netlify-honeypot="bot-field"
      @submit="onSubmit"
      v-if="!quizCompleted"
    >
      <input type="hidden" name="form-name" value="quizForm" />
      <p class="hidden">
        <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
      </p>
      <!-- <progress class="progress w-56" :value="currentQuestion" :max="quiz.length"></progress> -->
      <div class="quiz-info">
        <div class="quiz-questions">
          <div class="flex flex-col">
            <span class="question">{{ getCurrentQuestion.question }}</span>
          </div>
          <!-- <span class="score">Вопрос {{ currentQuestion }} из {{ quiz.length }}</span> -->
        </div>
      </div>

      <span class="answer-helper">{{
        getCurrentQuestion.type == "radio"
          ? "Выберите один из вариантов"
          : getCurrentQuestion.type == "checkbox"
          ? "Выберите один или несколько вариантов"
          : "Введите ответ"
      }}</span>
      <div
        class="answers"
        :class="getCurrentQuestion.index == index ? 'pb-4 md:py-12' : ''"
        v-for="(q, index) in quiz"
        :key="index"
      >
        <div
          class="card answers__card"
          :class="an.selected ? 'answers__card--checked' : ''"
          v-for="(an, idx) in q.answers"
          :key="idx"
          v-show="currentQuestion == index"
        >
          <label class="h-full" v-if="!Array.isArray(q.type)">
            <div class="card-body answers__card-body">
              <span class="card-title">{{ an.text }}</span>
              <Field
                class="hidden"
                :type="q.type"
                :name="'a' + '-' + (index + 1)"
                :value="an.text"
                @change="checkInput"
              />
              <!-- <Field type="range" :name="'a' + '-' + (index + 1)" class="range" min="0" max="100" value="20" /> -->
            </div>
          </label>
          <div class="card-body gap-8" v-else>
            <label class="h-full flex flex-col">
              <div class="msg">
                <span class="card-title">{{ an.text }}</span>
                <Field
                  class=""
                  :type="an.atype"
                  :name="'user-' + an.atype + '-' + index"
                  :class="
                    an.atype == 'file'
                      ? 'file-input file-input-bordered file-input-secondary w-full max-w-xs'
                      : 'input input-bordered input-secondary w-full max-w-xs'
                  "
                  :rules="an.atype == 'text' ? q.validateName : an.atype == 'email' ? q.validateEmail : ''"
                  @input="checkInput"
                />
                <ErrorMessage
                  class="answers__card-body--error"
                  :name="'user-' + an.atype + '-' + index"
                  :data-tip="an.atype == 'email' ? 'Пример: example@mail.com' : '2 буквы или больше'"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="quiz-actions">
        <button
          class="quiz-actions__btn justify-evenly"
          @click.prevent="PrevQuestion"
          v-if="getCurrentQuestion.index > 0"
        >
          <Icon icon="material-symbols:arrow-circle-left-outline" class="text-4xl" />
          Предыдущий
        </button>
        <button
          class="quiz-actions__btn justify-evenly"
          @click.prevent="NextQuestion"
          v-if="getCurrentQuestion.index != quiz.length - 1"
          :disabled="getCurrentQuestion.answers.map((s) => s.selected).includes(true) ? false : true"
        >
          Дальше
          <Icon class="text-4xl" icon="material-symbols:arrow-circle-right-outline" />
        </button>
        <button class="quiz-actions__btn" @click="NextQuestion" v-else>
          {{ "Отправить" }}
        </button>
      </div>
    </Form>
    <section class="quiz flex flex-col justify-center py-16" v-else>
      <h2>Вы прошли опрос!</h2>
      <!-- <p>Ваши ответы {{ form }}</p> -->
    </section>
  </main>
</template>

<style scoped>
.question {
  @apply font-semibold text-xl mt-10;
}
.answers {
  @apply w-full flex flex-col gap-4 md:flex-row justify-evenly items-center;
}
.answers__card {
  @apply min-w-[60%] md:min-w-[20%] max-w-[35%] shadow-xl overflow-hidden;
}
.answers__card--checked {
  @apply border border-2 border-info;
}
.answers__card-body {
  @apply p-4 md:p-8 items-center;
}
.answers__card-body--error {
  @apply answers__card-body p-4 md:p-8 items-center;
}
.answer-helper {
  @apply text-xl mt-20;
}
.quiz-questions {
  @apply text-center;
}
.quiz-info {
  @apply w-2/3;
}
.quiz-actions {
  @apply w-full flex justify-evenly;
}
.quiz-actions__btn {
  @apply btn btn-accent btn-wide self-center;
}
</style>
