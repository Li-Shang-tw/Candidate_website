<template>
  <div class="activity__content">
    <div class="photo_block">
      <template v-if="position == '1'">
        <img src="../../public/img/活動圈圈01.png" alt="" class="photo" />
        <p class="photo_date">12/26</p>
      </template>
      <template v-else-if="position == '2'">
        <img src="../../public/img/活動照片02.png" alt="" class="photo" />
        <p class="photo_date">12/24</p>
      </template>
      <template v-if="position == '3'">
        <img src="../../public/img/活動照片03.png" alt="" class="photo" />
        <p class="photo_date">12/20</p>
      </template>
    </div>
    <div class="activity_text_block">
      <h4 class="activity_text_block__title">
        參與台北寵物論壇<br />爭取貓咪友善環境
      </h4>
      <p class="activity_text_block__text">
        炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
        VIP 休憩空間。
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["position"]);
</script>

<style scoped>
.photo_block {
  margin: 1em 0;
}

.activity_text_block__title {
  margin-bottom: 1em;
}
.activity_text_block__text {
  margin-bottom: 1em;
}
.photo_date {
  font-weight: 800;
  font-size: 1.5rem;
  margin-top: 1em;
}
@media (min-width: 900px) {
  .activity__content {
    display: flex;
    justify-content: space-between;
  }
  .photo_block {
    width: 40%;
    order: 1;
    display: flex;
    flex-direction: column;
    margin-top: -5em;
  }
  .photo {
    order: 1;
    margin-top: 1em;
  }
  .activity_text_block {
    width: 40%;
    text-align: left;
  }
}
</style>
