<template>
  <div class="personal_intro">
    <div class="donate_icon">
      <img
        src="../../public/img/小額捐款.png"
        alt="小額捐款"
        class="donate_icon__photo"
      />
    </div>
    <div class="photo_area">
      <div class="photo_area__personal">
        <img src="../../public/img/候選人照片.png" alt="候選人照片" />
      </div>
      <div class="photo_area__name">
        <div class="photo_area__name__title">
          <img src="../../public/img/[立法委員候選人].png" alt="" />
        </div>
        <div class="photo_area__name__pictures">
          <img
            src="../../public/img/喵 立 翰.png"
            class="photo_area__name__picture-1"
            alt=""
          />
          <img
            src="../../public/img/喵立翰名字 h2.png"
            class="photo_area__name__picture-2"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="personal_info_content container">
      <p class="personal_info_content__text">
        我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。
        透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
      </p>
      <p class="personal_info_content__text">
        因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
      </p>
    </div>
    <div class="btn_area">
      <Button text="了解更多" type="2" class="btn" />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Button from "./Button.vue";
//----import component-----
</script>

<style scoped>
.personal_intro {
  background-color: var(--main-bg-color);
  padding-bottom: 2em;
}

.donate_icon {
  display: flex;
  justify-content: flex-end;
}
.donate_icon__photo {
  width: 20%;
}
.photo_area__personal {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2em;
}
.photo_area__name {
  width: 60%;
  margin: 0 auto;
}
.photo_area__name__title {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 1em;
}
.photo_area__name__pictures {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5em;
}
.photo_area__name__picture-1 {
  width: 30%;
}
.photo_area__name__picture-2 {
  width: 50%;
}

.personal_info_content__text {
  margin-bottom: 2em;
}

.btn_area {
  display: flex;
  justify-content: center;
}
@media (min-width: 600px) {
  .photo_area {
    display: flex;
    width: 70%;
    margin: 0 auto;
  }
  .personal_info_content {
    text-align: left;
  }
  .donate_icon {
    width: 50%;
    margin: 0 1em 0 auto;
  }
}
</style>
