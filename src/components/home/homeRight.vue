<template>
  <div class="right" style="width: 15%;margin-left: 10px;margin-top: 10px">
    <!--        关于我-->
    <about-me></about-me>

    <!--        联系我-->
    <contact-me></contact-me>

    <!--        最新文章-->
    <new-article></new-article>

    <!--        文章分类-->
    <category-list></category-list>

    <!--        热门标签-->
    <HotTag></HotTag>

    <!--        友链-->
    <friends></friends>

  </div>
</template>

<script>
import aboutMe from "@/components/aboutMe";
import newArticle from "@/components/newArticle";
import contactMe from "@/components/contactMe";
import categoryList from "@/components/categoryList";
import hotTag from "@/components/hotTag";
import HotTag from "@/components/hotTag";
import friends from "@/components/friends";
export default {
  name: "homeRight",
  components: {HotTag,aboutMe,newArticle,contactMe,categoryList,hotTag,friends},
}
</script>

<style scoped>

</style>