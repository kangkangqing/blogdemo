<template>
  <div id="bg">
    <div id="logo">KangKangQing's Blog</div>

      <div class="arrow-box" @click="back">
        <div class="arrow"></div><div class="stick"></div>
      </div>


    <div id="login">
      <el-card class="box-card">
        <div id="form">
          <el-input v-model="username" placeholder="请输入账号"></el-input>
          <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
          ></el-input>

          <div style="display: flex;justify-content: space-around;margin-top: 20px">
            <el-button type="primary" @click="submit">登陆</el-button>
            <el-button type="primary">注册</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div id="clock">
      <div id="time">{{ time }}</div>
      <div id="date">{{ date }}</div>
    </div>
    <div id="copy" style="text-align: center">Copyright @ 2022 kangkangqing.抗抗清网页版权归属 </div>
  </div>
</template>


<script>
import sendlogin from '../../api/login'
export default {
  data() {
    return {
      username: "",
      password: "",
      time: "",
      date: "",
      loading:false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.update_clock, 1000);
    });
  },
  methods: {
    back() {
      this.$router.push("home")
    }
    ,
    update_clock: function (e) {
      var d = new Date();
      var year = d.getFullYear();
      if (year < 10) {
        year = "0" + year;
      }
      var mon = d.getMonth() + 1;
      if (mon < 10) {
        mon = "0" + mon;
      }
      var day = d.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      var hour = d.getHours();
      if (hour < 10) {
        hour = "0" + hour;
      }
      var minute = d.getMinutes();
      this.time = hour + ":" + minute;
      this.date = year + "/" + mon + "/" + day;
    },
    submit() {
      // console.log(1111)
      if (this.password !== ''&&this.username!=='') {
        // this.$router.push('/home')
        const obj={
          username:this.username,
          password:this.password
        }
       sendlogin.login(obj).then(res=>{
         console.log(res)
       }).catch(error=>{
         console.log(error)
       })
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });



      }
    }
  }
}
  </script>

<!-- //css -->
<style scoped>
/* you can choose any color you want. don't be afraid to experiment  */
/*============*/

#bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  /* 渐变 */
  background-image: linear-gradient(90deg, cyan, rgb(249, 79, 249));
  background-size: 400%;
  animation: myanimation 10s infinite;
}
@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}

#logo {
  color: aliceblue;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  position: absolute;
  left: 15%;
  top: 15%;
}
#login {
  top: 30%;
  position: absolute;
  left: 38%;
}
.el-card {
  border-radius: 3%;
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 0.35);
  border: 0px;
}
#form {
  padding-bottom: 15px;
  line-height: 60px;
}
#clock{
  color: aliceblue;
  position:absolute;
  top: 70%;
  left: 15%;
  text-align: left;
}
#time{
  font-size: 100px;
}
#date{font-size: 35px;}
#copy{
  color:aliceblue;
  position:absolute;
  bottom: 5%;
  left: 0;
  right: 0;

}


.arrow-box{
  margin-top: 10px;
  margin-left: 10px;

  width: 40px; /*背景作为容器设置为方形*/
  height: 40px;
  position: relative; /*为箭头在容器中定位提供条件*/
  border-radius: 50%; /*将正方形变为圆形*/
  background: #6262bd; /*紫色背景*/
}

.arrow{
  width: 10px;
  height: 10px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(-135deg);
  margin: auto;
  position: absolute; /*用于定位*/
  top: 0; /*箭头上下都为0，可以将箭头垂直居中于容器*/
  left: 12px; /*箭头定位于背景偏左的地方*/
  bottom: 0;
}
.stick{
  width: 14px;
  background-color: #fff;
  height: 2px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.nav-left {
  float: left;
}
</style>


