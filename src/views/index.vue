<template>
  <div>
    <div>
      <myNav></myNav>
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
import myNav from "@/components/myNav";
import home from '@/views/user/home'
import timeLine from '@/views/user/timeLine'
import about from '@/views/user/about'
import mine from '@/views/user/mine'
export default {
  name: 'index',
  components: {
    myNav,
  },
  data() {
    return {
    }
  },
  methods:{

  }
}
</script>

<style scoped>
</style>
