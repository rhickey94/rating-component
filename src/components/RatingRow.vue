<script setup>
import { ref } from "vue";
import RatingCircle from "../components/RatingCircle.vue";

defineProps({
  maxRating: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["ratingSelected"]);

const activeItem = ref(5);

function selected(index) {
  activeItem.value = index;
  emit("ratingSelected", index + 1);
}
</script>

<template>
  <div class="rating-row">
    <RatingCircle
      v-for="(rating, index) in maxRating"
      :rating-value="rating"
      :key="index"
      @click="selected(index)"
      :class="{ active: activeItem === index }"
    />
  </div>
</template>

<style lang="scss" scoped>
.rating-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.active {
  background-color: var(--color-text);
  color: var(--color-heading);
}
@media screen and (min-width: 1024px) {
  .rating-row {
    margin-bottom: 30px;
  }
}
</style>
