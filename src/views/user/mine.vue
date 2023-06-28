<template>
<div>
  <not-login v-if="!login"></not-login>
</div>
</template>

<script>
import notLogin from "@/components/notLogin";
export default {
  name: "mine",
  components:{notLogin},
  computed:{
    login(){
      return true
    }
  }
}
</script>

<style scoped>

</style>