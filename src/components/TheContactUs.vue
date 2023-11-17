<template>
  <div class="wrap">
    <div class="contact_section container">
      <div class="contact_content__block">
        <div class="heading">
          <h3 class="heading__subtitle subtite">tell us!</h3>
          <h2 class="heading__title">民意信箱</h2>
        </div>
        <div class="content">
          <p class="content__text">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </p>
          <h4 class="content__text-big">您的聲音，我們的行動！</h4>
        </div>
      </div>
      <div class="form">
        <div class="form__area-1 form__area">
          <label for="name" class="input_block input_block-name"
            >姓名:
            <input type="text" class="form_iput" id="name" />
          </label>
          <label for="phone" class="input_block input_block-phone"
            >電話:
            <input type="tel" class="form_iput" id="phone" />
          </label>
        </div>
        <div class="form__area-2 form__area">
          <label for="email" class="input_block"
            >信箱:
            <input type="email" class="form_iput" id="email" />
          </label>
          <label for="comment" class="comment_block"
            ><span class="comment__label">您的建議:</span>

            <textarea class="form_comment" id="comment" />
          </label>
        </div>
        <Button text="送出表單" type="3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style scoped>
.wrap {
  background-color: var(--secondary-bg-color);
  padding-bottom: 3em;
}

.heading {
  padding: 2em 0;
}
.heading__subtitle {
  margin-bottom: 0.5em;
  color: var(--secondary-bg-color);
  -webkit-text-stroke: 0.7px black;
}
.heading__title {
  color: black;
}

.content__text {
  text-align: left;
  margin-bottom: 1em;
}
.content__text-big {
  margin-bottom: 1em;
}

/*---form--- */
.form {
  margin: 0 auto;
  width: 80%;
}

.form__area {
  display: flex;
  flex-direction: column;
}
.input_block {
  background-color: #e6e6e6;
  border-bottom: 1px solid black;
  padding: 1em 1em;
  text-align: left;
  margin-bottom: 1em;
}
/**---移除input預設樣式----*/
.form_iput {
  background-color: #e6e6e6;
  border: 0px;
  width: 100%;
}
.comment_block {
  background-color: #e6e6e6;
  border-bottom: 1px solid black;
  padding: 1em;
  text-align: left;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
}

.form_comment {
  background-color: #e6e6e6;
  border: 0px;
  padding-bottom: 5em;
}
@media (min-width: 900px) {
  .contact_section {
    display: flex;
    padding-top: 2em;
    gap: 2em;
  }
  .contact_content__block {
    order: 1;
    width: 40%;
    display: flex;
    flex-direction: column;
  }
  .heading {
    padding: 0;
    margin-bottom: 2em;
  }
  .form {
    width: 60%;
  }

  .form__area-1 {
    flex-direction: row;
    gap: 1em;
  }
  .input_block-name {
    width: 50%;
  }
  .input_block-phone {
    width: 50%;
  }
}
</style>
