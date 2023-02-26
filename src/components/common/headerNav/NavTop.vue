<template>
  <div class="nav-top">
    <div class="nav-top-left">
      <a href="javascript:;" @click="Login">{{this.loginMessage}}</a>
      <a href="javascript:;" class="loginto" @click="this.$router.push('/login')">登录</a>
      <a href="javascript:;" class="register" @click="this.$router.push('/register')">注册</a>
    </div>
    <div class="nav-top-right">
      <a href="javascript:;" class="business-car" @click="GoCart">购物车<i class="fas fa-cart-arrow-down"></i></a>
      <a href="javascript:;" class="my-order" @click="GoMyOrder" :class="{isShow:!isLogin}" >我的订单</a>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    isLogin:false,
    loginMessage:this.isLogin?"欢迎您！":"亲，请登录",
  }
},
created(){
  this.isLoginF()
  console.log(this.isLogin)
},
methods:{
  Login(){
    if(this.isLogin){
      this.$router.push('/home/perinfo')
    }else 
    this.$router.push('/login')
  },
  GoCart(){
    this.$router.push('/home/cart')
  },
  GoMyOrder(){
    this.$router.push('/home/myorder')
  },
  isLoginF(){
    if(this.$store.state.Authorization != ''){
      this.isLogin = true
      this.loginMessage="欢迎您！"
    }else{
      this.isLogin = false
      this.loginMessage="亲，请登录"
    }
  }
}
}
</script>

<style>
.nav-top{
    height: 40px;
    width: 100%;
    background-color: #F5f5f5;
    border-bottom: #cbcbcb 1px solid;
}
.nav-top-left{
  margin-left: 200px;
  height: 40px;
  line-height: 40px;
}
.nav-top-left a{
  color: #f22e00 !important;
}
.nav-top-right{
  margin-right: 200px;
  position: absolute;
  right: 10%;
  top: 0;
  height: 40px;
  line-height: 40px;
  display: inline-block;
}
.nav-top-right a{
  float: right;
  margin: 0 20px;
}
.register{
  color: #f22e00;
}
.business-car i{
  color: #f22e00;
}
.isShow{
  display: none;
}
.loginto{
  margin: 0 10px;
}
</style>