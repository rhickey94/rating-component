<script setup>
defineProps({
  selectedRating: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="icon-container">
      <img src="../assets/illustration-thank-you.svg" alt="weenus" />
    </div>
  </div>
  <div class="selected-rating">You selected {{ selectedRating }} out of 5</div>
  <div class="thank-you">Thank you!</div>
  <div class="appreciation">
    We appreciate you taking the time to give a rating. If you ever need more
    support, don't hesitate to get in touch!
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  width: 144px;
  height: 96px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 24px;
}

.selected-rating {
  margin: 0 auto;
  padding: 5px 12px;
  line-height: 22px;
  font-size: 14px;
  text-align: center;
  width: 168px;
  height: 30px;
  background-color: var(--color-circle);
  color: var(--color-button);
  border-radius: 22.5px;
  margin-bottom: 24px;
}

.thank-you {
  font-size: 24px;
  color: var(--color-heading);
  text-align: center;
  margin-bottom: 17px;
}

.appreciation {
  line-height: 22px;
  font-size: 14px;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .icon-container {
    width: 162px;
    height: 108px;
    margin-top: 13px;
    margin-bottom: 32px;
  }

  .selected-rating {
    padding: 6px 10px;
    line-height: 24px;
    font-size: 15px;
    width: 193px;
    height: 32px;
    margin-bottom: 32px;
  }

  .thank-you {
    font-size: 28px;
    margin-bottom: 15px;
    line-height: 35px;
  }

  .appreciation {
    line-height: 24px;
    font-size: 15.5px;
  }
}
</style>
