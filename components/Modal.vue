<template>
  <!-- The button to open modal -->
  <!-- <label for="my-modal-6" class="btn modal-button">open modal</label> -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <label for="my-modal-6" class="modal cursor-pointer modal-bottom sm:modal-middle">
      <label class="modal-box relative flex flex-col justify-between items-center">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <Form />
      </label>
    </label>
</template>
