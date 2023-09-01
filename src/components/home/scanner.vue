<template>
<div>

  <div class="swiper">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
       <el-image
           :src="imageUrl"
       ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>


</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "scanner",
  data(){
    return{
      imageUrl:require('@/assets/pic/wallhaven-ex9gwo.png')
    }
  },
}
</script>

<style scoped>
    .swiper{

    }
</style>