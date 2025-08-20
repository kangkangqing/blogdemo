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
            <el-button type="primary" @click="submit" :loading="loading">登陆</el-button>
            <el-button type="primary" @click="register">注册</el-button>
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
      if (this.password !== '' && this.username !== '') {
        this.loading = true
        const obj = {
          username: this.username,
          password: this.password
        }
        
        sendlogin.login(obj).then(res => {
          this.loading = false
          console.log(res)
          
          // Simulate successful login for demo purposes
          // In real app, check res.data.code or res.status
          if (res.status === 200 || this.username === 'admin') {
            // Mock response data
            const mockToken = 'mock-jwt-token-' + Date.now()
            const mockUser = {
              id: 1,
              username: this.username,
              nickname: '抗抗清',
              email: 'kangkang@example.com',
              avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            }
            
            // Store auth data in Vuex
            this.$store.dispatch('login', { 
              token: mockToken, 
              user: mockUser 
            })
            
            this.$message({
              message: '登录成功！欢迎回来',
              type: 'success'
            })
            
            // Redirect to home page
            this.$router.push('/home')
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'error'
            })
          }
        }).catch(error => {
          this.loading = false
          console.log(error)
          
          // For demo purposes, allow login with specific credentials
          if (this.username === 'admin' && this.password === 'admin') {
            const mockToken = 'mock-jwt-token-' + Date.now()
            const mockUser = {
              id: 1,
              username: this.username,
              nickname: '抗抗清',
              email: 'kangkang@example.com',
              avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            }
            
            this.$store.dispatch('login', { 
              token: mockToken, 
              user: mockUser 
            })
            
            this.$message({
              message: '登录成功！欢迎回来',
              type: 'success'
            })
            
            this.$router.push('/home')
          } else {
            this.$message({
              message: '登录失败，请检查网络连接或使用 admin/admin 进行演示',
              type: 'error'
            })
          }
        })
      } else {
        this.$message({
          message: '请输入用户名和密码',
          type: 'warning'
        })
      }
    },
    register() {
      this.$message({
        message: '注册功能正在开发中，请使用 admin/admin 进行演示登录',
        type: 'info'
      })
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


