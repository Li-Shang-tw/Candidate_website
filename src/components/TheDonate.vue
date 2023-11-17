<template>
  <div class="wrap">
    <div class="donate_section container2">
      <div class="heading">
        <h3 class="heading__subtitle subtite">sponsorship</h3>
        <h2 class="heading__title">小額贊助</h2>
      </div>
      <ul class="donate_options">
        <li
          class="donate_option"
          v-for="(value, key) in donateStore.numberPeopleOfPlan"
        >
          <DonateOption :value="value" :plan="key" />
        </li>
        <li class="donate_option">
          <DonateOption plan="cutomize" />
        </li>
      </ul>
      <div class="donate_content">
        <p class="donate_content__text">
          目前小額贊助總金額：<br v-if="mediaType == 'mobile'" />NT$ 987,655,873
        </p>
        <p class="donate_content__text">
          您的小筆捐款
          <br v-if="mediaType == 'mobile'" />
          <span v-else>,</span> 是每隻毛孩未來的大大動力！
        </p>
      </div>
      <div class="donate_photo">
        <img src="../../public/img/手勢插畫 1.png" alt="手勢插畫" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DonateOption from "./DonateOption.vue";
import { useDonateStore } from "../stores/donate";

import { useMediaDetative } from "../composables/useMediaDetative";
const { mediaType } = useMediaDetative();

const donateStore = useDonateStore();
</script>

<style scoped>
.wrap {
  background-color: var(--main-bg-color);
}

.container2 {
  width: 70%;
  margin: 0 auto;
}

.heading {
  padding: 2em 0;
}
.heading__subtitle {
  margin-bottom: 0.5em;
}

.donate_option {
  margin-bottom: 1em;
}

.donate_content__text {
  font-weight: 800;
  margin-bottom: 1em;
}

@media (min-width: 900px) {
  .donate_options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .donate_option {
    width: 50%;
  }
}
</style>
