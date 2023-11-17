<template>
  <div class="donate_option">
    <p class="title-pre" v-if="plan == 'cutomize'">心意無價</p>
    <p class="title-pre" v-else>{{ value }}人已成為</p>
    <h4 class="title" v-if="plan == 'lv1'">喵星人之友</h4>
    <h4 class="title" v-else-if="plan == 'lv2'">喵星大使</h4>
    <h4 class="title" v-else-if="plan == 'lv3'">喵星傳奇</h4>
    <h4 class="title" v-else-if="plan == 'cutomize'">自訂金額</h4>
    <div class="donate__price">
      <h4 class="price-prefix">NT$</h4>
      <h4 class="price" v-if="plan == 'lv1'">600</h4>
      <h4 class="price" v-else-if="plan == 'lv2'">6000</h4>
      <h4 class="price" v-else-if="plan == 'lv3'">60000</h4>
      <p v-else-if="plan == 'cutomize'">_____________</p>
    </div>
    <Button text="我要贊助" type="2" class="donate_btn" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Button from "./Button.vue";
const props = defineProps(["value", "plan"]);
</script>

<style scoped>
.donate_option {
  border: 1px solid black;
  border-radius: 50%;
  display: inline-flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.75em 3.5em;
  align-items: center;
}
.price,
.price-prefix {
  font-family: "futur";
  color: white;
  -webkit-text-stroke: 0.7px black;
}
</style>
