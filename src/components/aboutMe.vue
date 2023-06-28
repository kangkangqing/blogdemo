<template>
  <el-card style="text-align: center;border-radius: 15px;font-size: 18px" shadow="hover">
    <div style="text-align: left;font-size: 17px">
      <span class="iconfont icon-xiaotiqin" style="font-size: 20px"></span>
      关于我
    </div>
    <div style="margin-top: 10px">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
    </div>
    <div>抗抗清</div>
    <div style="margin-top: 10px">个性签名</div>
  </el-card>
</template>

<script>
export default {
  name: "aboutMe",
  data(){
    return{
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  }
}
</script>

<style scoped>

</style>