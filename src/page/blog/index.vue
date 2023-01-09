<script setup lang="ts">
import { NCard } from 'naive-ui'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getArticleList } from '../../utils/index'

const router = useRouter()
const handleCardClick = (article: common.articleListItem) => {
  
}

let articleList = reactive(new Array<common.articleListItem>());

onMounted(async () => {
  let list = await getArticleList()
  articleList.push(...list)
})

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
  