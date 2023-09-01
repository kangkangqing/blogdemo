<template>
  <div class="contianer">
<!--    <scanner></scanner>-->
    <div style="margin-top: 10px;display: flex;justify-content: center;">
     <home-left></home-left>
    <home-right></home-right>
  </div>
</div>
</template>

<script>
import homeLeft from "@/components/home/homeLeft";
import homeRight from "@/components/home/homeRight";
import scanner from "@/components/home/scanner";
export default {
  components: {homeLeft,homeRight,scanner},
  data() {
    return {
    };
  }
}
</script>
<style scoped>
</style>

