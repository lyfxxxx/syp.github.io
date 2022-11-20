<script setup lang="ts">
import { ref } from 'vue';

// 设置招呼语
const timeKey = 'last-visit-time';
const week = 60*60*24*7*1000;

const curTime = new Date().getTime();
const lastTime = localStorage && localStorage.getItem(timeKey) || curTime;
const duration = Math.abs(curTime - Number(lastTime));
let helloWord = ref('');

if (duration >= week) {
  helloWord.value = '好久不见！';
} else if (duration > 0) {
  helloWord.value = '你好,';
} else {
  helloWord.value = '初次见面！';
}

localStorage && localStorage.setItem(timeKey, String(curTime));

</script>

<template>
  <div class="banner-container">
    <div class="banner-content">
      <div>{{ helloWord }}</div>
      <div>欢迎来到我的个人博客。</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  background-image: url(../../../assets/DSCF6605-1.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  & .banner-content {
    position: relative;
    top: 25vh;
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 0 10px
  };
}

@media screen and (max-width: 750px) {
  .banner-container {
    & .banner-content {
      font-size: 30px;
      top: 30vh;
    }
  }
}
</style>
  