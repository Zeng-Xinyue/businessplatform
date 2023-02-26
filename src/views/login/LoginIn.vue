<template>
  <nav-bar></nav-bar>
  <div class="login">
    <div class="login-inner">
      <div class="login-content">
        <div class="login-tit">账户登录</div>

        <div class="login-input">
          <div class="login-input-name">
            <input type="text" placeholder="手机号/同户名/绑定邮箱" v-model="values.phone">
          </div>
          <div class="login-input-secrete">
            <input type="text" placeholder="密码" v-model="values.password">
          </div>
        </div>

        <div class="lohin-agreement">
          <div class="login-agreement-inner">
            <div class="login-agreement-inner-checkbox">
              <input type="checkbox" id="login-agree" @click="Agree">
              <label for="login-agree"></label>
            </div>
            <div class="login-agreement-inner-content">
              <label for="login-agree">我已阅读并接受以下条款： 
                <a href="">《Buy服务条款》</a>
                <a href="">《Buy基本功能隐私政策》</a>
              </label>
            </div>
          </div>
        </div>

        <div class="login-submit">
          <div class="login-submit-btn">
            <button type="submit" @click="onSubmit()">登录</button>
            <div @click="LoginIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-intro></footer-intro>
</template>

<script>
import FooterIntro from '@/views/home/FooterIntro.vue';
import NavBar from '@/components/common/headerNav/NavBar.vue';

import axios from 'axios';

// 调用登录接口
import { login } from '@/api/user'

import { isToken } from '@/network/api';

export default {
  components: { FooterIntro, NavBar },
  created(){
    /* axios.post('http://192.168.224.168:8084/login', 
    {//
    "phone":"15839998449",
    "password":"123456"
    }).then(res => {
    console.log(res.data)
    let token=res.data.data.token
    console.log(token)
    //this.$store.commit('setToken',this.$store.state,token);
  })
  .catch(err => {
    console.log(err)
  })  */

  },
  data(){
    return {
      values:{
        phone:'',
        password:'',
      },
      token:'',
      disabled:false,
    }
  },
  methods:{
    Agree(){
      this.disabled = !this.disabled
    },  

    /*   axios.post('http://192.168.224.168:8084/login', {//
    "phone":"15839998449",
    "password":"123456"
    }).then(res => {
    console.log(res.data)
    let token=res.data.data.token
    console.log(token)
    //this.$store.commit('setToken',this.$store.state,token);
  })
  .catch(err => {
    console.log(err)
  }) */
    async onSubmit () {
      if(this.values.phone == ''){
        alert('手机号/同户名/绑定邮箱不能同时为空')
        return
      }else if(this.values.password == ''){
        alert('密码不能为空')
        return
      }else if(!this.disabled){
        alert('请先同意协议')
        return
      }
      // 手动输入提交的数据：登录、注册、修改密码等提交的值
      const { data } = await login(this.values)
      //console.log(data)
      //console.log(data.data.token)
      if(data.code == 200){
      //将token存入本地
        this.token=data.data.token
        //console.log(data.data.token)
        //this.$store.commit('getToken',data.data.token)
        this.$store.commit("changeLogin",{ Authorization: this.token });
        console.log(this.$store.state.Authorization)
        this.$store.password = this.values.password
        console.log(this.$store.password)
        alert("登陆成功！")
        //isToken();

        /* axios.post('http://192.168.224.168:8084/info',{
          Authorization:this.token
        }).then(res =>{
          console.log("post succeed!")
          console.log(res)
        }).catch(err => console.log(err)) */

      //返回首页
      this.$router.push('/home')
      } else if(data.code == 201){
      alert("手机号或密码错误")
      this.values.password=''
      this.values.phone=''
      }
    }
  }
    
}
</script>

<style>
.login{
  background-image: url('@/assets/img/login-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 650px;
}
.login-inner{
  height: 650px;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 20px;
}
.login-content{
  background-color: white;
  height: 500px;
  width: 400px;
  float: right;
  margin-right: 40px;
  margin-top: 50px;
  border-radius: 5px;
}
.login-tit{
  width: 400px;
  height: 75px;
  border-bottom: 1px rgb(189, 186, 186) solid;
  font-size: 30px;
  color: #ff6700;
  line-height: 75px;
  text-align: center;
}
.login-input{
  width: 400px;
  height: 175px;
  /*border-bottom: 1px #000 solid;*/
}
.login-input input{
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding-left:10px ;
}
.login-input-name{
  height: 50px;
  width: 40px;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 40px;
}
.login-input-secrete{
  height: 50px;
  width: 40px;
  margin-left: 50px;
  margin-right: 50px;
}
.lohin-agreement{
  width: 400px;
  height: 100px;
  /*border-bottom: 1px #000 solid;*/
}
.login-agreement-inner{
  height: 80px;
  width: 200px;
  margin-left: 50px;
  padding: 30px 0;
}
.login-agreement-inner-checkbox input{
  width: 20px;
  height: 20px;
  position: relative;
  left: 0;
}
.login-agreement-inner-content{
  width: 250px;
  position: relative;
  left: 35px;
  top: -22px;
  font-size: 14px;
}
.login-agreement-inner-content a{
  color: #1d94d1;
}
.login-submit{
  width: 400px;
  height: 100px;
}
.login-submit-btn button{
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #ff6700;
  color: #fff;
  border-radius: 5px;
  margin: 5px 50px 0 50px;
  border-color: #fff;
}
.login-submit-btn button:hover{
  cursor:pointer;
}
</style>