<template>
  <div class="btn" :class="{ donate: type == 1 }">
    <p class="btn__text">{{ text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["text", "type"]);
</script>

<style scoped>
.donate {
  color: var(--main-bg-color);
  /* border: 1px solid var(--main-bg-color); */
}

@media (min-width: 600px) {
  .btn {
    padding: 0.5em;
  }
  .donate {
    border: 1px solid var(--main-bg-color);
    padding: 0.5em 1.5em;
    border-radius: 30px;
  }
}
</style>
