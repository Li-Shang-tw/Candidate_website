<template>
  <div class="wrap">
    <div class="container activity_section">
      <div class="heading">
        <h3 class="heading__subtitle subtite">NEWS</h3>
        <h2 class="heading__title">最新活動</h2>
      </div>
      <ActivityContent :position="position" />
      <div class="btn_block">
        <img
          src="../../public/img/向後.png"
          alt=""
          class="btn--back btn_move"
          @click="() => movePosition('back')"
        />
        <span class="position">{{ position }}-3</span>
        <img
          src="../../public/img/向前.png"
          alt=""
          class="btn--ahead btn_move"
          @click="() => movePosition('ahead')"
        />
      </div>
      <Button text="所有活動" type="2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//元件
import ActivityContent from "./ActivityContent.vue";
import Button from "./Button.vue";

const position = ref(1);

function movePosition(directon) {
  if (directon == "ahead") {
    if (position.value !== 3) {
      position.value += 1;
    }
  } else if (directon == "back") {
    if (position.value !== 1) {
      position.value -= 1;
    }
  }
}
</script>

<style scoped>
.wrap {
  background-color: var(--secondary-bg-color);
  padding: 2em 0;
}

.heading__subtitle {
  margin-bottom: 0.5em;
  color: var(--secondary-bg-color);
  -webkit-text-stroke: 0.7px black;
}

/*-----btn----*/
.btn_block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 1em 0;
}
.btn_move {
  width: 40px;
  height: 40px;
}

@media (min-width: 900px) {
  .heading {
    text-align: left;
    margin-bottom: 2em;
  }

  .btn_move {
    width: 60px;
    height: 60px;
  }
  .position {
    font-size: 1.5em;
  }
}
</style>
