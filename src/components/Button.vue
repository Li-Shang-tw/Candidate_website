<template>
  <div
    class="btn"
    :class="{ donate: type == 1, type2: type == 2, type3: type == 3 }"
  >
    <p class="btn__text">
      {{ text }}
      <img
        src="../../public/img/Arrow 2.png"
        alt="Arrow 2"
        class="arrow"
        v-if="type == 2"
      />
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["text", "type"]);
</script>

<style scoped>
.btn {
  transition: transform 0.3s;
  background-color: white;
}
/*---懸停效果--- */
.btn:hover {
  background-color: var(--secondary-bg-color);
}
/* 點擊時效果 */
.btn :active {
  transform: translateY(2px);
}

.btn__text {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.arrow {
  width: 20%;
}
.donate {
  color: var(--main-bg-color);
  /* border: 1px solid var(--main-bg-color); */
}
.type2,
.type3 {
  display: inline-flex;
  border: 1px solid var(--black);
  padding: 0.5em 1.5em;
  border-radius: 30px;
  gap: 0.5em;
  background-color: white;
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
