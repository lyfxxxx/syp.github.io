<script setup lang="ts">
import headerList from '../constants/headerList';
</script>

<template>
  <div class="header-container">
    <div class="content">
      <div class="left">SuYP</div>
      <div class="right">
        <div 
          v-for="name in headerList" 
          :key="name" 
          class="tab-name"
        >{{ name }}</div>
        <div class="search">
          <Icon iconClass="#icon-search" />
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
      & .tab-name {
        margin-right: 10px;
      }
      & .search {
        border: white 3px solid;
        border-radius: 5px;
        width: 100px;
      }
    }
  }
}
</style>
  