<script setup lang="ts">
import headerList from '../constants/headerList';
import { useRouter } from 'vue-router'

const router = useRouter();
// 跳转各个页面
const handleRouteClick = (name: string) => {
  const url: string = `/${name}`;
  router.push(url);
}

let isShowMobileNav: boolean = false;
// 图标跳转
const handleNavClick = () => {
  isShowMobileNav = true;
}
</script>

<template>
  <div class="header-container">
    <div class="content">
      <div class="left">SuYP</div>
      <div class="right">
        <div class="pc-nav">
          <div 
            v-for="item in headerList" 
            :key="item.name" 
            class="tab-name"
            @click="handleRouteClick(item.name)"
          >{{ item.showName }}</div>
        </div>
        <div class="mobile-nav" >
          <Icon iconClass="#icon-category" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #20232a;
  color: white;
  & .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
    height: 50px;
    & .left {
      font-size: 20px;
      font-weight: bold;
    }
    & .right {
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.pc-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  & .tab-name {
    margin-right: 10px;
  }
}
@media screen and (max-width: 780px) {
  .pc-nav {
    display: none;
  }
}

@media screen and (min-width: 780px) {
  .content {
    width: 90%;
  }
  .mobile-nav {
    display: none;
  }
}

@media screen and (min-width: 1340px) {
  .content {
    max-width: 1260px;
  }
}
</style>
  