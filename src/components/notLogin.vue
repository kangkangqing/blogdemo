<template>
<div>
  <el-result icon="error" title="错误提示" subTitle="请先登录...">
    <template slot="extra">
      <el-button type="primary" size="medium" @click="backlogin">返回登陆</el-button>
    </template>
  </el-result>
</div>
</template>

<script>
export default {
  name: "notLogin",
  methods:{
    backlogin(){
      this.$router.replace("login")
    }
  }
}
</script>

<style scoped>

</style>