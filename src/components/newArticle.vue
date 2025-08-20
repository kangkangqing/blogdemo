<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-rili" style="font-size: 18px"></span>最新文章
    <div style="margin-top: 3px;padding: 2px" v-for="article in recentArticles" :key="article.id" class="zuixin" @click="goToArticle(article.id)">
      <div style="display: flex;justify-content: space-between;font-size: 13px">
        <div>{{ article.publishDate }}</div>
        <div>{{ article.category }}</div>
      </div>
      <div>
        <strong>{{ article.title }}</strong>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "newArticle",
  computed: {
    recentArticles() {
      return this.$store.getters.allArticles.slice(0, 4)
    }
  },
  mounted() {
    if (this.$store.getters.allArticles.length === 0) {
      this.$store.dispatch('fetchArticles')
    }
  },
  methods: {
    goToArticle(id) {
      this.$router.push({
        name: 'articleDetail',
        query: { id: id }
      })
    }
  }
}
</script>

<style scoped>
.zuixin:hover {
  background: #f4f4f4;
  cursor: pointer;
  transform: translateX(5px);
  transition: all 0.3s ease;
}
</style>