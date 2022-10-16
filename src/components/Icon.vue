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
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  font-size: 25px;
  fill: currentColor;
  overflow: hidden;
}
</style>
