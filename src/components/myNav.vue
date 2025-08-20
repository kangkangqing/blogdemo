<template>
  <div class="contianer">
    <ul class="nav">
      <h3 class="title">{{ title }}</h3>
      <div style="width: 5%"></div>
      <li
          v-for="item in tabs"
          :key="item.url"
          @click="go(item)"
      >
        {{ item.name }}
      </li>
    </ul>



      <el-input placeholder="Search..."
                v-model="keyWords"
                maxlength="10"
                suffix-icon="el-icon-search"
                style="width: 20%"
                class="search"
                @keyup.enter="search"
                >
      </el-input>

      <!-- User Section -->
      <div style="margin-left: auto; display: flex; align-items: center;">
        <div v-if="isLoggedIn" style="display: flex; align-items: center; color: #d3d3d4;">
          <el-avatar :size="30" :src="currentUser.avatar" style="margin-right: 10px;"></el-avatar>
          <span style="margin-right: 15px;">{{ currentUser.nickname }}</span>
          <el-button size="mini" @click="goToMine">个人中心</el-button>
        </div>
        <div v-else>
          <el-button size="mini" type="primary" @click="goToLogin">登录</el-button>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "myNav",
  data() {
    return {

      title: "KANGKANGQING's Blog",
      keyWords: "",
      tabs: [
        {
          url: "home",
          name: "首页"
        }, {
          url: "category",
          name: "分类"
        },
        {
          url: "timeLine",
          name: "时间线"
        }, {
          url: "about",
          name: "关于"
        }
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    currentUser() {
      return this.$store.getters.currentUser || {
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        nickname: '用户'
      }
    }
  },
  methods: {
    go(tab) {
      this.$router.push({
        path: tab.url
      })
    },
    search() {
      if (this.keyWords.trim()) {
        const results = this.$store.dispatch('searchArticles', this.keyWords)
        this.$message({
          message: `搜索"${this.keyWords}"完成`,
          type: 'success'
        })
        // TODO: Show search results in a dedicated page
        console.log('搜索结果:', results)
      } else {
        this.$message({
          message: '请输入搜索关键词',
          type: 'warning'
        })
      }
    },
    goToLogin() {
      this.$router.push('/login')
    },
    goToMine() {
      this.$router.push('/mine')
    }
  }
}
</script>

<style scoped>
.contianer {
  display: flex;
  align-items: center;
  background-color: #1b1c1d;
  height: 50px;
}

.title {
  color: #48dbfb;
  margin-left: 5%;
}

.nav {
  display: flex;
  align-items: center;
  width: 60%;
}

li {
  list-style: none;
  color: #d3d3d4;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  border-left: 1px solid #2d2e2f;
  border-right: 1px solid #2d2e2f;
}
li:hover{
  background-color: #3d3e3f;
}
</style>