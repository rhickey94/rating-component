<script setup>
import RatingComponent from "./components/RatingComponent.vue";
</script>

<template>
  <main><RatingComponent /></main>
</template>

<style lang="scss">
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
