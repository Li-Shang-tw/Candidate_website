<template>
  <div class="wrap">
    <div class="activity_section container">
      <div class="heading">
        <h3 class="heading__subtitle subtite">policy</h3>
        <h2 class="heading__title">政策議題</h2>
      </div>
      <ul class="policy_selection">
        <li
          class="policy_selection__btn"
          @click="
            () => {
              ChangePolicy(1);
            }
          "
        >
          <img
            src="../../public/img/政策一.png"
            alt="政策一"
            :class="{ filter: policy !== 1 }"
          />
        </li>
        <li
          class="policy_selection__btn"
          @click="
            () => {
              ChangePolicy(2);
            }
          "
        >
          <img
            src="../../public/img/政策二.png"
            alt="政策二"
            :class="{ filter: policy !== 2 }"
          />
        </li>
        <li
          class="policy_selection__btn"
          @click="
            () => {
              ChangePolicy(3);
            }
          "
        >
          <img
            src="../../public/img/政策三.png"
            alt="政策三"
            :class="{ filter: policy !== 3 }"
          />
        </li>
      </ul>
      <PolicyContent :policy="policy" />
      <Button type="2" text="了解更多" class="btn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PolicyContent from "./PolicyContent.vue";
import Button from "./Button.vue";

const policy = ref(1);
function ChangePolicy(num) {
  policy.value = num;
}
</script>

<style scoped>
.wrap {
  background-color: black;
  padding-bottom: 2em;
}
.heading {
  padding: 2em 0;
}
.heading__subtitle {
  margin-bottom: 0.5em;
  color: black;
  -webkit-text-stroke: 0.7px var(--main-bg-color);
}
.heading__title {
  color: var(--main-bg-color);
}

.policy_selection {
  display: flex;
  width: 50%;
  margin: 0 auto;
}
.btn {
  margin-top: 2em;
}
.filter {
  filter: brightness(0.5);
}
</style>
