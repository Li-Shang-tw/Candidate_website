<template>
  <div class="hero">
    <div class="eyes_section">
      <img class="eyes" src="../../public/img/貓眼.png" alt="" />
      <div class="overlay"></div>
    </div>
    <div class="heading_section">
      <div class="heading">
        <img
          src="../../public/img/從喵的眼中看台灣.png"
          alt=""
          class="heading_photo"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.eyes_section {
  position: relative;
  background-color: black;
}
.eyes {
  width: 80%;
}
.eyes:hover {
  animation-name: close;
  animation-duration: 5s;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: black;
  animation-name: open;
  animation-duration: 4s;
  border-radius: 20%;
}

/*----heading----*/
.heading_section {
  background-color: var(--main-bg-color);
}
.heading {
  background-color: black;
  border-radius: 0 0 50% 50%;
  padding-top: 2em;
}
.heading_photo {
  width: 60%;
}
@keyframes open {
  from {
    height: 100%;
  }
  to {
    height: 0px;
  }
}

@keyframes close {
  from {
    height: 100px;
  }
  to {
    height: 0px;
    margin-top: 70px;
  }
}
</style>
