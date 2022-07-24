<script setup>
defineProps({
  ratingValue: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="rating-circle">
    {{ ratingValue }}
  </div>
</template>

<style lang="scss" scoped>
.rating-circle {
  background-color: var(--color-circle);
  color: var(--color-text);
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-top: 2px;
}
.rating-circle:hover {
  background-color: var(--color-button);
  color: var(--color-heading);
}
@media screen and (min-width: 1024px) {
  .rating-circle {
    height: 51px;
    width: 51px;
    font-size: 16px;
  }
}
</style>
