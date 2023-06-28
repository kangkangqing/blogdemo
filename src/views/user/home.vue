<template>
  <div class="contianer">
    <div style="margin-top: 10px;display: flex;justify-content: center;">
     <home-left></home-left>
    <home-right></home-right>
  </div>
</div>
</template>

<script>
import homeLeft from "@/components/homeLeft/homeLeft";
import homeRight from "@/components/homeRight/homeRight";
export default {
  components: {homeLeft,homeRight},
  data() {
    return {
    };
  }
}
</script>
<style scoped>
</style>

