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
                >
      </el-input>



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
  methods: {
    go(tab) {
      this.$router.push({
        path: tab.url
      })
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