<script setup lang="ts">
import { NSwitch } from 'naive-ui';
import { ref, watchEffect, CSSProperties } from 'vue';
import Icon from '../Icon.vue';

const classList = document.documentElement.classList;

const query = window.matchMedia(`(prefers-color-scheme: light)`);
let systemTheme: string = query.matches ? 'light' : 'dark';
let curTheme = ref(systemTheme);

let switchValue = ref(curTheme.value === 'dark');

watchEffect(() => {
  classList[curTheme.value === 'dark' ? 'add' : 'remove']('dark');
})

query.onchange = (e) => {
  curTheme.value = e.matches ? 'dark' : 'light';
}

const toggleSwitch = (val: Boolean) => {
  curTheme.value = val ? 'dark' : 'light';
}

const railStyle = ({ checked }: { checked: boolean }) => {
  const style: CSSProperties = {};
  const light = '#242424';
  const dark = '#e5e5e5';
  style.background = checked ? light : dark;
  return style;
}

</script>

<template>
  <NSwitch v-model:value="switchValue" @update-value="toggleSwitch" :rail-style="railStyle" class="switch-container">
    <template #checked-icon>
      <Icon icon-class="#icon-moon" class="switch-icon"></Icon>
    </template>
    <template #unchecked-icon>
      <Icon icon-class="#icon-sun" class="switch-icon"></Icon>
    </template>
  </NSwitch>
</template>

<style lang="scss" scoped>
.switch-icon {
  font-size: 12px;
  width: 12px;
  height: 12px;
}
.switch-container {
  margin-right: 10px;
}
</style>
  