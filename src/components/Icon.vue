<script setup lang="ts">
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
    default: '',
  }
})
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="props.iconClass"></use>
  </svg>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
