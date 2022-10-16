<script setup lang="ts">
import ListItem from './ListItem.vue';
import { ref, computed } from 'vue';

const isShowMobileNav = ref(false);
// 图标跳转
const handleMobileIconClick = () => {
  isShowMobileNav.value = !isShowMobileNav.value;
}

const handleMobileNavClick = () => {
  isShowMobileNav.value = false;
}

const iconClass = computed(() => isShowMobileNav.value ? '#icon-close' : '#icon-category');
</script>

<template>
  <div class="header-container">
    <div class="content">
      <div class="left">SuYP</div>
      <div class="right">
        <div class="pc-nav">
          <ListItem />
        </div>
        <div class="mobile-icon" @click="handleMobileIconClick">
          <Icon :iconClass="iconClass"/>
        </div>
      </div>
    </div>
  </div>
  <Transition>
    <div class="mobile-nav" v-if="isShowMobileNav" @click="handleMobileNavClick">
      <ListItem />
    </div>
  </Transition>
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

.mobile-nav {
  position: fixed;
  width: 100%;
  background: #20232a;
  color: white;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  transition: background-color .5s;
  & :deep(.tab-name) {
    margin: 10px 0;
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
// 注意引入位置，必须要等mobile-nav声明完后再进行才有效
@import '../../styles/animation.scss';

@media screen and (max-width: 780px) {
  .pc-nav {
    display: none;
  }
}

@media screen and (min-width: 780px) {
  .content {
    width: 90%;
  }
  .mobile-icon {
    display: none;
  }
}

@media screen and (min-width: 1340px) {
  .content {
    max-width: 1260px;
  }
}
</style>
  