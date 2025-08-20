<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-24gf-tags3" style="font-size: 18px"></span>热门标签
    <div class="tag-group" style="margin-top: 10px">
      <el-tag
          v-for="item in tags"
          :key="item.label"
          :type="item.type"
          effect="dark"
          style="margin: 2px; cursor: pointer;"
          @click="filterByTag(item.label)"
      >
        {{ item.label }}
      </el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "hotTag",
  computed: {
    tags() {
      return this.$store.getters.allTags
    }
  },
  mounted() {
    if (this.$store.getters.allTags.length === 0) {
      this.$store.dispatch('fetchTags')
    }
  },
  methods: {
    filterByTag(tagName) {
      this.$message({
        message: `筛选标签: ${tagName}`,
        type: 'info'
      })
      // TODO: Implement tag filtering
    }
  }
}
</script>

<style scoped>

</style>