<template>
  <section class="header">
    <div class="header__logo_hamburger">
      <div class="logo">
        <img src="../../public/img/喵立翰_logo 1.png" alt="logo" />
      </div>
      <div class="hamburger">
        <img
          src="../../public/img/漢堡圖示.png"
          alt="hamburger"
          class="hamburger"
          @click="toggleNavList"
        />
      </div>
    </div>
    <ul class="header__nav_list" v-show="showNavlist">
      <li class="header__nav_list__item">
        <Button text="最新活動" />
      </li>
      <li class="header__nav_list__item">
        <Button text="政策議題" />
      </li>
      <li class="header__nav_list__item">
        <Button text="小額捐款" type="1" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watchEffect } from "vue";
//----import component-----
import Button from "./Button.vue";

//--import composables
import { useMediaDetative } from "../composables/useMediaDetative";

const showNavlist = ref(false);

//監聽裝置，當不是手機時，顯示navList
const { mediaType } = useMediaDetative();
watchEffect(() => {
  if (mediaType.value !== "mobile") {
    showNavlist.value = true;
  } else {
    //預設手機板都不顯示navList
    showNavlist.value = false;
  }
});

const toggleNavList = () => {
  showNavlist.value = !showNavlist.value;
};
</script>

<style scoped>
.header {
  background-color: var(--black);
}

.header__logo_hamburger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}
.header__nav_list__item {
  color: var(--white);
  display: flex;
  justify-content: center;
  padding: 1em 0;
}

@media (min-width: 600px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__nav_list {
    display: flex;
  }
  .hamburger {
    display: none;
  }
  .header__nav_list__item {
    padding: 0 1em;
  }
}
</style>
