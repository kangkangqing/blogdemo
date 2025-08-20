<template>
  <div>
    <div v-loading="isLoading">
      <el-card :body-style="{ padding: '10px' }" shadow="hover" style="border-radius: 20px;margin-top: 10px" v-for="article in articles" :key="article.id">
        <div style="padding: 14px;">
          <span style="display: flex;justify-content: space-between">{{ article.title }}</span>
          <el-divider></el-divider>
          <div>{{ article.summary }}</div>
          <el-divider></el-divider>
          <div style="display: flex;justify-content: space-between;">
            <div> {{ article.publishDate }} | <span class="iconfont icon-wenjianjia" style="font-size: 18px"></span>{{ article.category }} |
              <el-tag
                  v-for="tag in article.tags"
                  :key="tag"
                  :type="getTagType(tag)"
                  effect="dark"
                  style="margin: 2px;"
              >
                {{ tag }}
              </el-tag>
            </div>
            <el-link :underline="false" type="primary" @click="goDetail(article.id)">阅读文章</el-link>
          </div>
        </div>
      </el-card>
    </div>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="totalArticles"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handlePageChange"
        style="margin-top: 10px;text-align: center"
    >
    </el-pagination>


  </div>
</template>

<script>
export default {
  name: "articleList",
  data() {
    return {
      currentDate: new Date(),
      currentPage: 1,
      pageSize: 5
    };
  },
  computed: {
    nowDate() {
      const eventDate = new Date(this.currentDate);
      const formattedDate = eventDate.toLocaleDateString('zh-CN');
      return formattedDate
    },
    articles() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.$store.getters.allArticles.slice(start, end)
    },
    totalArticles() {
      return this.$store.getters.allArticles.length
    },
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  mounted() {
    // Load articles when component mounts
    this.$store.dispatch('fetchArticles')
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        name: 'articleDetail',
        query: { id: id }
      })
    },
    handlePageChange(page) {
      this.currentPage = page
    },
    getTagType(tag) {
      const types = ['', 'success', 'info', 'warning', 'danger']
      return types[tag.length % types.length]
    }
  }
}
</script>

<style scoped>
.el-card:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
</style>