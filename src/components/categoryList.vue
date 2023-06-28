<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-wenjianjia" style="font-size: 18px"></span>文章分类
    <div style="margin-top: 3px;padding: 2px" v-for="(item,index) in 10" :key="index" class="zuixin">
      <div style="display: flex;justify-content: space-between">
        <div><strong>name</strong></div>
        <div>[5]</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "categoryList"
}
</script>

<style scoped>

</style>