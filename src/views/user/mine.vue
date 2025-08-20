<template>
<div>
  <not-login v-if="!login"></not-login>
  <div v-else style="margin-top: 10px">
    <!-- User Profile Section -->
    <el-card style="margin: 20px; border-radius: 15px" shadow="hover">
      <div style="text-align: center; padding: 20px">
        <el-avatar :size="80" :src="currentUser.avatar"></el-avatar>
        <h2 style="margin: 15px 0 5px 0">{{ currentUser.nickname }}</h2>
        <p style="color: #666; margin-bottom: 20px">@{{ currentUser.username }}</p>
        <p style="color: #999">{{ currentUser.email }}</p>
        
        <div style="margin-top: 20px; display: flex; justify-content: space-around">
          <div style="text-align: center">
            <div style="font-size: 24px; font-weight: bold; color: #409EFF">{{ userStats.articles }}</div>
            <div style="color: #666">文章</div>
          </div>
          <div style="text-align: center">
            <div style="font-size: 24px; font-weight: bold; color: #67C23A">{{ userStats.views }}</div>
            <div style="color: #666">浏览量</div>
          </div>
          <div style="text-align: center">
            <div style="font-size: 24px; font-weight: bold; color: #E6A23C">{{ userStats.likes }}</div>
            <div style="color: #666">点赞</div>
          </div>
        </div>
        
        <div style="margin-top: 20px">
          <el-button type="primary" @click="logout">退出登录</el-button>
          <el-button>编辑资料</el-button>
        </div>
      </div>
    </el-card>
    
    <!-- User Articles Management -->
    <el-card style="margin: 20px; border-radius: 15px" shadow="hover">
      <div slot="header" style="display: flex; justify-content: space-between; align-items: center">
        <span style="font-size: 18px; font-weight: bold">我的文章</span>
        <el-button type="primary" size="small">写文章</el-button>
      </div>
      
      <el-table :data="userArticles" style="width: 100%">
        <el-table-column prop="title" label="标题" min-width="200"></el-table-column>
        <el-table-column prop="category" label="分类" width="120"></el-table-column>
        <el-table-column prop="publishDate" label="发布日期" width="120"></el-table-column>
        <el-table-column prop="views" label="浏览量" width="100"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="editArticle(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteArticle(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</div>
</template>

<script>
import notLogin from "@/components/notLogin";
export default {
  name: "mine",
  components:{notLogin},
  computed:{
    login(){
      return this.$store.getters.isAuthenticated
    },
    currentUser(){
      return this.$store.getters.currentUser || {
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        nickname: '用户',
        username: 'user',
        email: 'user@example.com'
      }
    },
    userArticles(){
      // Filter articles by current user
      return this.$store.getters.allArticles.filter(article => 
        article.author === this.currentUser.nickname
      )
    },
    userStats(){
      const articles = this.userArticles
      return {
        articles: articles.length,
        views: articles.reduce((total, article) => total + article.views, 0),
        likes: Math.floor(Math.random() * 100) + 50 // Mock data
      }
    }
  },
  methods: {
    logout(){
      this.$confirm('确定要退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logout')
        this.$message({
          type: 'success',
          message: '已退出登录'
        })
        this.$router.push('/login')
      })
    },
    editArticle(article){
      this.$message({
        message: `编辑文章: ${article.title}`,
        type: 'info'
      })
    },
    deleteArticle(article){
      this.$confirm(`确定要删除文章"${article.title}"吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>