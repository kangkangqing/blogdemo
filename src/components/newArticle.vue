<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-rili" style="font-size: 18px"></span>最新文章
    <div style="margin-top: 3px;padding: 2px" v-for="(item,index) in 4" :key="index" class="zuixin">
      <div style="display: flex;justify-content: space-between;font-size: 13px">
        <div>2023-05-03</div>
        <div>分类名</div>
      </div>
      <div>
        <strong>content</strong>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "newArticle"
}
</script>

<style scoped>
.zuixin:hover {
  background: #f4f4f4;
}
</style>