<template>
<div>
  <div class="nav">
    <ul class="item">
      <li>
        <router-link to="home">首页</router-link>
      </li>
      <li><router-link to="timeLine">时间轴</router-link></li>
      <li><router-link to="about">关于</router-link></li>
      <li><router-link to="mine">我的</router-link></li>
      <li><router-link to="login">登陆</router-link></li>

      <div class="search" style="margin-left: 10px;margin-top: 7px">
        <form class="form">
          <button>
            <svg width="17" height="16" fill="none"  role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <input class="input" placeholder="请输入要搜索的内容" required="" type="text">
          <button class="reset" type="reset">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </form>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "myNav"
}
</script>

<style scoped>
.nav{
  /*display: flex;*/
  /*position: absolute;*/
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background-color:#ffffff;
  position:sticky;
}
.item{
  /*position: fixed;*/
  /*top:10px;*/
  /*right:20px;*/
  margin-top: 100px;
  margin: 0;
  padding: 0;
  display: flex;/*弹性布局，使li排成一行*/
  justify-content: center;
  /*background-color:#ffffff;*/
}
.item li{
  list-style: none;
}
.item li a{
  position: relative;
  display: block;
  padding: 10px 20px;
  margin: 20px 0;
  text-decoration: none;
  text-transform: uppercase;/*将字符转为大写*/
  color: #262626;
  font-weight: bold;
  font-size: 20px;
  /* transition: 0.5s; */
}
.item li a:hover{
  color:#fff;
}
.item li a:before{
  /*a:before，在a链接之前添加新内容，这里添加上下边框*/
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top:1px solid #000;
  border-bottom:1px solid #000;
  transform: scaleY(2);/*拉长边框两倍*/
  opacity: 0;/*边距不显示*/
  transition: 0.5s;
  z-index: -1;
}
.item li a:hover:before{
  transform: scaleY(1);/*拉长边框两倍*/
  opacity:1;
}
.item li a:after{
  content:'';
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transform: scale(0);
  transition: 0.5s;
  z-index: -1;
}
.item li a:hover:after{
  transform: scale(1);
}


/* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  margin-top: 20px;
  margin-left: 10px;

  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg,#fff);
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}
</style>