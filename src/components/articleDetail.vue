<template>
  <div style="width: 70%;margin: 20px auto">
    <el-card :body-style="{ padding: '10px' }" shadow="hover" style="border-radius: 20px;" v-if="article">
      <div style="padding: 14px;">
         <span style="display: flex;justify-content: space-between">
           <h1>{{ article.title }}</h1>
           <el-button @click="goBack" size="small">返回</el-button>
         </span>
        <div id="div1" v-if="article.image">
          <img :src="article.image" alt="文章配图">
        </div>
        <el-divider></el-divider>

        <div style="line-height: 1.8; font-size: 16px;">{{ article.content }}</div>

        <el-divider></el-divider>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 14px; color: #666;">
            浏览量 {{ article.views }}+ | 发布于 {{ article.publishDate }} | 作者 {{ article.author }}
          </div>
          <div>
            <el-tag
                v-for="tag in article.tags"
                :key="tag"
                :type="getTagType(tag)"
                effect="dark"
                style="margin-left: 5px;"
            >
              {{ tag }}
            </el-tag>
          </div>
        </div>
      </div>
    </el-card>
    
    <el-card style="margin-top: 20px; border-radius: 20px;" shadow="hover" v-if="!article">
      <div style="text-align: center; padding: 50px;">
        <i class="el-icon-document" style="font-size: 64px; color: #ddd;"></i>
        <p style="color: #999; margin-top: 20px;">文章不存在或已被删除</p>
        <el-button @click="goBack" style="margin-top: 20px;">返回首页</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "articleDetail",
  computed: {
    article() {
      const id = parseInt(this.$route.query.id)
      return this.$store.getters.allArticles.find(article => article.id === id)
    }
  },
  mounted() {
    // Load articles if not already loaded
    if (this.$store.getters.allArticles.length === 0) {
      this.$store.dispatch('fetchArticles')
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getTagType(tag) {
      const types = ['', 'success', 'info', 'warning', 'danger']
      return types[tag.length % types.length]
    }
  }
}
</script>

<style scoped>
#div1{
  /*border: #000 solid 1px;*/
  overflow: hidden;
}
#div1 img{
  width: 100%;
  height: 200px;
  cursor: pointer;
  transition: all 0.6s;
}
#div1 img:hover{
  transform: scale(1.1);
}
</style>