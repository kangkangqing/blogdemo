<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-wenjianjia" style="font-size: 18px"></span>文章分类
    <div style="margin-top: 3px;padding: 2px" v-for="category in categories" :key="category.name" class="zuixin" @click="filterByCategory(category.name)">
      <div style="display: flex;justify-content: space-between">
        <div><strong>{{ category.name }}</strong></div>
        <div>[{{ category.count }}]</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "categoryList",
  computed: {
    categories() {
      return this.$store.getters.allCategories
    }
  },
  mounted() {
    if (this.$store.getters.allCategories.length === 0) {
      this.$store.dispatch('fetchCategories')
    }
  },
  methods: {
    filterByCategory(categoryName) {
      this.$message({
        message: `筛选分类: ${categoryName}`,
        type: 'info'
      })
      // TODO: Implement category filtering
    }
  }
}
</script>

<style scoped>
.zuixin:hover {
  background: #f4f4f4;
  cursor: pointer;
}
</style>