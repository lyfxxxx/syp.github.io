<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { mdFileMap } from '../../../services/getArticles'

const router = useRoute();
let currentHtml = ref('');

watchEffect(() => {
  currentHtml.value = mdFileMap.get(router.params.fileName as string) || '';
})

</script>

<template>
  <div v-html="currentHtml"></div>
</template>

<style scoped>
</style>
