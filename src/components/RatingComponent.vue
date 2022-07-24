<script setup>
import { ref } from "vue";

import RatingRow from "./RatingRow.vue";
import RatingThankYou from "./RatingThankYou.vue";

const submitted = ref(false);
const currentRating = ref(null);

function submitRating() {
  submitted.value = !submitted.value;
}

function setRating(rating) {
  currentRating.value = rating;
}
</script>

<template>
  <div class="rating-container">
    <div class="form-container" v-if="!submitted">
      <header class="form-header">
        <div class="icon-container">
          <img src="../assets/icon-star.svg" alt="weenus" />
        </div>
        <h2>How did we do?</h2>
      </header>
      <fieldset class="rating-body">
        <legend>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </legend>
        <div>
          <RatingRow @rating-selected="setRating" />
        </div>
        <div>
          <button type="submit" @click="submitRating">Submit</button>
        </div>
      </fieldset>
    </div>
    <div>
      <RatingThankYou :selected-rating="currentRating || 3" v-if="submitted" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating-container {
  width: 327px;
  height: 360px;
  background: var(--color-form);
  border-radius: 15px;
  padding: 24px;
}
.form-header {
  display: flex;
  flex-direction: column;

  .icon-container {
    width: 40px;
    height: 40px;
    background-color: var(--color-circle);
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: var(--color-heading);
    font-size: 24px;
    font-weight: 700;

    height: 37px;
    margin-top: 16px;
    margin-bottom: 10px;
  }
}

.rating-body {
  border: none;
  padding: 0;

  legend {
    color: var(--color-text);
    font-size: 14px;

    height: 66px;
    line-height: 22px;
    padding: 0;
    margin-bottom: 24px;
  }
}

button {
  width: 279px;
  height: 45px;
  background-color: var(--color-button);
  border: none;
  border-radius: 22.5px;
  color: var(--color-heading);
  text-transform: uppercase;
  font-weight: 700px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.9px;
}

button:hover {
  background-color: var(--color-heading);
  color: var(--color-button);
}

@media screen and (min-width: 1024px) {
  .rating-container {
    width: 412px;
    height: 416px;
    padding: 32px;
    border-radius: 30px;
  }
  .form-header {
    .icon-container {
      width: 48px;
      height: 48px;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;

      height: 43px;
      margin-top: 30px;
      margin-bottom: 7px;
    }
  }

  .rating-body {
    legend {
      font-size: 15px;

      height: 72px;
      line-height: 24px;
      padding: 0;
      margin-bottom: 24px;
    }
  }

  button {
    width: 348px;
    font-size: 15px;
    letter-spacing: 2px;
  }
}
</style>
