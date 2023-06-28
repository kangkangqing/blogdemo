<template>
  <div style="width: 70%;margin: 20px auto">
    <el-card :body-style="{ padding: '10px' }" shadow="hover" style="border-radius: 20px;" >
      <div style="padding: 14px;">
         <span style="display: flex;justify-content: space-between">标题</span>
        <div id="div1">
          <img src="../assets/1.jpg" alt="图片占位">
        </div>
        <el-divider></el-divider>

        <div>content</div>

        <el-divider></el-divider>
        <div style="font-size: 10px">
        浏览量99+ | 发布于2023/06/26 | 作者zhangsan
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "articleDetail"
}
</script>

<style scoped>
#div1{
  /*border: #000 solid 1px;*/
  overflow: hidden;
}
#div1 img{
  width: 100%;
  height: 200px;
  cursor: pointer;
  transition: all 0.6s;
}
#div1 img:hover{
  transform: scale(1.1);
}
</style>