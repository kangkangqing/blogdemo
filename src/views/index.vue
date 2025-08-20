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
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
export default {
  name: 'index',
  components: {
    myNav,
    myFooter
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
