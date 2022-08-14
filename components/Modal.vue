<script setup>
const emit = defineEmits(['onsub'])
function myModal() {
  console.log(modalCheck._value.checked)
}
function closeModal() {
  modalCheck._value.checked = false;
}
  let modalCheck = ref(null)
onMounted(() => {
  // console.log(modalCheck._value.checked)
  if (modalCheck._value.checked !== null) {
    // console.log(modalCheck._value.checked)
    return modalCheck._value.checked
  } else {
    console.log("modalCheck is null")
  }
})
</script>

<template>
  <!-- The button to open modal -->
  <!-- <label for="my-modal-6" class="btn modal-button">open modal</label> -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-6" class="modal-toggle" ref="modalCheck" @change="myModal" />
    <label for="my-modal-6" class="modal cursor-pointer modal-bottom sm:modal-middle">
      <label class="modal-box relative flex flex-col justify-between items-center">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <HeroForm @onsub="closeModal" />
        <!-- <HeroForm /> -->
      </label>
    </label>
</template>
