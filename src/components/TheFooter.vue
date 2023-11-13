<template>
  <div class="footer">
    <div class="footer__content">
      <p class="footer__content__text">
        辦公室地址｜喵星區毛茸茸大道88號喵喵大樓3樓
      </p>
      <p class="footer__content__text">民意電話｜(02) 888-5678</p>
      <p class="footer__content__text">電子郵件｜meowoffice@linmeow.tw</p>
    </div>
    <ul class="footer__social_media_list">
      <li class="footer__social_media_item">
        <img
          src="../../public/img/Social Icons _fb.png"
          alt=""
          class="footer__social_media_item__img"
        />
      </li>
      <li class="footer__social_media_item">
        <img
          src="../../public/img/Social Icons _x.png"
          class="footer__social_media_item__img"
          alt=""
        />
      </li>
      <li class="footer__social_media_item">
        <img
          src="../../public/img/Social Icons _ig.png"
          class="footer__social_media_item__img"
          alt=""
        />
      </li>
      <li class="footer__social_media_item">
        <img
          src="../../public/img/Social Icons _linkden.png"
          class="footer__social_media_item__img"
          alt=""
        />
      </li>
      <li class="footer__social_media_item">
        <img
          src="../../public/img/Social Icons _youtube.png"
          class="footer__social_media_item__img"
          alt=""
        />
      </li>
    </ul>
    <div class="footer__bottom container">
      <p class="footer__bottom__copy">© 2023 喵立翰 版權所有</p>
      <ul class="footer__nav_list">
        <li class="footer__nav_list__item">首頁</li>
        <li class="footer__nav_list__item">最新活動</li>
        <li class="footer__nav_list__item">政策議題</li>
        <li class="footer__nav_list__item">小額捐款</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style scoped>
.footer {
  background-color: black;
  color: white;
  font-size: 0.8rem;
}
.footer__content {
  padding: 3em 0;
  width: 80%;
  margin: 0 auto;
}

.footer__content__text {
  margin-bottom: 1em;
}
.footer__social_media_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2em;
}
.footer__social_media_item__img {
  width: 70%;
}
.footer__bottom {
  border-top: 1px solid white;
  padding: 1em 0;
}
.footer__nav_list {
  display: none;
}

@media (min-width: 600px) {
  .footer__bottom {
    display: flex;
    justify-content: space-between;
  }
  .footer__nav_list {
    display: flex;
    gap: 1em;
  }
  .footer__content,
  .footer__social_media_list {
    width: 50%;
  }
}
</style>
