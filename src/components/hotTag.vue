<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-24gf-tags3" style="font-size: 18px"></span>热门标签
    <div class="tag-group" style="margin-top: 10px">
      <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="dark"
          style="margin: 2px;"
      >
        {{ item.label }}
      </el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "hotTag",
  data(){
    return{
      items: [
        {type: '', label: '标签一'},
        {type: 'success', label: '标签二'},
        {type: 'info', label: '标签三'},
        {type: 'danger', label: '标签四'},
        {type: 'warning', label: '标签五'},
        {type: '', label: '标签六'},
        {type: 'success', label: '标签七'},
        {type: 'info', label: '标签八'},
        {type: 'danger', label: '标签九'},
        {type: 'warning', label: '标签十'}
      ]
    }
  }
}
</script>

<style scoped>

</style>