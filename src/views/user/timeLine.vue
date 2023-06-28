<template>
  <div>

    <div style="display: flex;justify-content: center">
      <el-card style="margin-top: 20px;width: 80%;border-radius: 15px">
        <h1>2022</h1>
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
              class="item"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>

        <el-divider></el-divider>
        <h1>2023</h1>
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
              class="item"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  data() {
    return {
      activities: [
        {
          content: 'java基础',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: 'py爬虫',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: 'linux基础',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }]
    }
  },
  methods:{
    goDetail(){
      console.log(111)
      this.$router.push('articleDetail')
    }
  }
}
</script>

<style scoped>
.item:hover {
  background: #f4f4f4;
}

.item {
  padding: 2px;
  font-size: 18px;
}
h1{
  margin-bottom: 10px;
}
</style>