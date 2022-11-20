<script setup lang="ts">
import headerList from '../../constants/headerList';
import { useRouter } from 'vue-router'

const router = useRouter();
// 跳转各个页面
const handleRouteClick = (name: string) => {
  const url: string = `/${name}`;
  router.push(url);
}
</script>

<template>
  <div 
    v-for="item in headerList" 
    :key="item.name" 
    class="tab-name"
    @click="handleRouteClick(item.name)"
  >{{ item.showName }}</div>
</template>

<style scoped>
.tab-name {
  cursor: pointer;
  margin-right: 10px;
}
</style>
