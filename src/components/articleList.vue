<template>
  <div>
    <div>
      <el-card :body-style="{ padding: '10px' }" shadow="hover" style="border-radius: 20px;margin-top: 10px" v-for="(item,index) in 6" :key="index">
        <div style="padding: 14px;">
          <span style="display: flex;justify-content: space-between">标题</span>
          <el-divider></el-divider>
          <div>content缩写</div>
          <el-divider></el-divider>
          <div style="display: flex;justify-content: space-between;">
            <div> 2023/6/25 | <span class="iconfont icon-wenjianjia" style="font-size: 18px"></span>分类 |
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
            <el-link :underline="false" type="primary" @click="goDetail(id)">阅读文章</el-link>
          </div>
        </div>
      </el-card>
    </div>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        style="margin-top: 10px;text-align: center"
    >
    </el-pagination>


  </div>
</template>

<script>
export default {
  name: "articleList",
  data() {
    return {
      currentDate: new Date(),
      items: [
        {type: '', label: '标签一'},
        {type: 'success', label: '标签二'},
      ]
    };
  },
  computed: {
    nowDate() {
      const eventDate = new Date(this.currentDate);
      const formattedDate = eventDate.toLocaleDateString('zh-CN');
      return formattedDate
    }
  },
  methods: {
    goDetail(id) {
      id = 0
      this.$router.push("articleDetail")
    }
  }
}
</script>

<style scoped>

</style>