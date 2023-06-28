<template>
  <div class="footer" style="margin-top: 20px;width: 100%">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :xs="24" :sm="12">
        <p>备案号：{{ recordNumber }}</p>
      </el-col>
      <el-col :xs="24" :sm="12">
        <p><a :href="recordLink" target="_blank">备案信息</a></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordNumber: '蜀ICP备2023014459号-1',
      recordLink: 'http://beian.miit.gov.cn'
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #f2f2f2;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
}
</style>