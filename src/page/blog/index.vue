<script setup lang="ts">
import articleList from '../../constants/articleList'
import { NCard } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleCardClick = (article: common.articleListItem) => {
  router.push({
    name: 'blogArticle',
    params: {
      fileName: article.fileName,
    }
  })
}

</script>

<template>
  <div class="blog">
    <NCard v-for="article in articleList" :title="article.title" @click="handleCardClick(article)">
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
  