<script setup lang="ts">
import { ref, computed, onBeforeUnmount, effect } from 'vue';
import { debounce } from 'lodash';
import ListItem from './ListItem.vue';
import ThemeControllerVue from './ThemeController.vue';

// 移动端展示相关处理
const isShowMobileNav = ref(false);
// 图标跳转
const handleMobileIconClick = () => {
  isShowMobileNav.value = !isShowMobileNav.value;
}
const handleMobileNavClick = () => {
  isShowMobileNav.value = false;
}
const iconClass = computed(() => isShowMobileNav.value ? '#icon-close' : '#icon-category');

// top时特殊样式处理
// fixme: 只需要在首页时展示ontop样式
const getScrollTop = () => window.pageYOffset  //用于FF
  || document.documentElement.scrollTop  
  || document.body.scrollTop  
  || 0;
let isOnTop = ref(getScrollTop() === 0 ? true : false);
const scrollHandler = debounce(() => {
  const scrollTop = getScrollTop();
  isOnTop.value = scrollTop === 0 ? true : false;
}, 100);
window.addEventListener('scroll', scrollHandler);

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler);
})

</script>

<template>
  <div class="header-container" :class="{'on-top': isOnTop}">
    <div class="content">
      <div class="left">SuYP</div>
      <div class="right">
        <div class="pc-nav">
          <ListItem />
        </div>
        <ThemeControllerVue></ThemeControllerVue>
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
  background-color: var(--c-background);
  color: var(--c-text-1);
  border-bottom: 1px solid var(--c-divider);
  transition: border-color .5s,background-color .5s;
  z-index: 1;
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
  background: var(--c-background);
  color: var(--c-text-1);
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  transition: background-color .5s;
  z-index: 1;
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

.on-top {
  background-color: transparent;
  color: var(--c-white-soft);
  border: none;
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
  