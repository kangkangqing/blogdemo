<template>
  <el-card style="margin-top: 10px;border-radius: 15px" shadow="hover">
    <span class="iconfont icon-ku" style="font-size: 20px"></span>联系我
    <div
        style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-around;text-align: center;">
      <div class="lianxi" style="width: 25%;padding: 5px">
        <span class="iconfont icon-github" style="font-size: 30px"></span>
        <div>github</div>
      </div>
      <div class="lianxi" style="width: 25%;padding: 5px">
        <span class="iconfont icon-gitee-fill-round" style="font-size: 30px"></span>
        <div>gitee</div>
      </div>
      <div class="lianxi" style="width: 25%;padding: 5px">
        <span class="iconfont icon-QQ" style="font-size: 30px"></span>
        <div>QQ</div>
      </div>
      <div class="lianxi" style="width: 25%;padding: 5px">
        <span class="iconfont icon-weixin" style="font-size: 30px"></span>
        <div>weixin</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "contactMe"
}
</script>

<style scoped>
.lianxi:hover {
  background: #f4f4f4;
}
</style>