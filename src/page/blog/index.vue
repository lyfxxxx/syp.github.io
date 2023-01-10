<script setup lang="ts">
import { NCard } from 'naive-ui'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { articleList } from '../../services/getArticles'

const router = useRouter()
const handleCardClick = (article: common.articleListItem) => {
  router.push({ name: 'blogArticle', params: { fileName: article.fileName } })
}

let localArticles: common.articleListItem[] = reactive([...articleList]);

</script>

<template>
  <div class="blog">
    <NCard v-for="article in localArticles" :title="article.title" @click="handleCardClick(article)">
      <template #header-extra>{{ article.createTime }}</template>
      <div>{{ article.intro }}</div>
    </NCard>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
  