<template>
  <div>
    <div>
      <myNav
          style="
          width: 90%;
          margin: 0 auto;
         border-radius: 20px;
          "
      ></myNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myNav from "@/components/myNav";
export default {
  name: 'index',
  components: {
    myNav,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
