<template>
  <div class="policy_content">
    <h3 class="heading">{{ policyData[policy].heading }}</h3>
    <ul class="policy_content__list">
      <li
        class="policy_content__item"
        v-for="item in policyData[policy].content"
        :key="item.no"
      >
        <div class="policy_content__item__no">{{ item.no }}</div>
        <div class="policy_content__item__content">
          <h4 class="policy_content__item__content__title">{{ item.title }}</h4>
          <p class="policy_content__item__content__text">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["policy"]);
const policyData = {
  1: {
    heading: "為毛孩子謀福利！推動寵物醫療保障方案",
    content: [
      {
        no: 1,
        title: "設立寵物醫療基金",
        text: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
      },
      {
        no: 2,
        title: "提供醫療補助",
        text: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
      },
      {
        no: 3,
        title: "合作動物醫院",
        text: "每目前已有和超過 200 家動物醫院進行初步的合作討論。",
      },
    ],
  },
  2: {
    heading: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    content: [
      {
        no: 1,
        title: "建立寵物公園",
        text: "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
      },
      {
        no: 2,
        title: "提供醫療補助",
        text: "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
      },
      {
        no: 3,
        title: "舉辦寵物活動和工作坊",
        text: "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
      },
    ],
  },
  3: {
    heading: "推廣寵物飼養教育，讓愛更加專業",
    content: [
      {
        no: 1,
        title: "建立寵物飼養教育中心",
        text: "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
      },
      {
        no: 2,
        title: "推廣寵物飼養課程",
        text: "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
      },
      {
        no: 3,
        title: "製作教育資料",
        text: "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。",
      },
    ],
  },
};
</script>

<style scoped>
.policy_content {
  border: 1px solid var(--main-bg-color);
  margin-top: 1em;
  border-radius: 10px;
  padding: 2em;
  color: white;
}
.heading {
  color: var(--main-bg-color);
  margin-bottom: 2em;
}

.policy_content__item {
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 2em;
}
.policy_content__item__no {
  color: var(--main-bg-color);
  font-weight: 800;
  border: 1px solid var(--main-bg-color);
  border-radius: 50%;
  padding: 0.25em 0.5em;
  margin-right: 1em;
}
.policy_content__item__content__title {
  margin-bottom: 0.5em;
}
</style>
