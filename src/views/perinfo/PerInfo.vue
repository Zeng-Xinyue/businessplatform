<template>
  <div class="per-info">
    <div class="content">
      <div class="info clearfix">
          <div class="left">
              <div class="info-header">
                      <span>个人信息</span>
              </div>
              <div class="body">

                  <ul class="user-info">
                      <li>id号
                          <div class="back">{{getUserData.userid}}</div>
                      </li>
                      <li>姓名
                          <div class="back">{{getUserData.name}}</div>
                      </li>
                      <li>性别
                          <div class="back">{{getUserData.gender}}</div>
                      </li>
                      <li>号码
                          <div class="back">{{getUserData.phone}}</div>
                      </li>
                  </ul>
              </div>


          </div>
              
          <div class="right">
               <div class="body">
                  <div class="right-top">
                      <div :class="{activetab: isactiveTab}" @click="isactiveTab = true">基本资料</div>
                      <div :class="{activetab: !isactiveTab}" @click="isactiveTab = false">修改密码</div>
                  </div>
                  <div class="form" v-if="isactiveTab">
                      <div class="form-item">
                          <div class="text">姓名</div>
                          <input type="text" v-model="getUserData.name">
                      </div>

                      <div class="form-item">
                          <div class="text">号码</div>
                          <input type="text" v-model="getUserData.phone">
                      </div>


                      <div class="gender clearfix">
                          <div class="text">
                              性别
                          </div>
                          <div class="choose">
                            <form action="">
                              <label for="male">
                              <input type="radio" name="sex" id="male" @click="this.getUserData.gender='男'">
                              <span>男</span>
                              </label>
                              <label for="female">
                              <input type="radio" name="sex" id="female" @click="this.getUserData.gender='女'">
                              <span>女</span>
                              </label>
                            </form>
                          </div>
                      </div>
                       
                      <div class="btn">
                          <button type="button" class="save" @click="saveInfo">
                           保存
                          </button>
                            <button type="button" class="close" @click="this.$router.replace('/home')">
                           关闭
                          </button>
                        
                      </div>
                  </div>
                  <div div class="form" v-else>
                     <change-password></change-password>
                  </div>
               </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser,changeUserInfo } from '@/network/api';
import ChangePassword from './ChangePassword.vue';
/*  window.onload = function(){
    document.getElementById('change').onclick = function(){
        document.getElementById('changea').click()
    }
}  */
export default {
  components:{ChangePassword,getUser},
  created(){
    this.getUserData=getUser().then(res => {
      if(res.data.message == '登录信息无效，请重新登录'){
        this.$router.push('/login')
      }
      else {
        console.log(res.data.data)
        this.getUserData = res.data.data
      }
    })
  },
  data() {
    return {
      getUserData:{},
      activer: this.$route.name || 'SystemDetails',
      isactiveTab:true,
    }
  },
methods:{
  saveInfo(){
    console.log(this.getUserData)
    changeUserInfo(this.getUserData
    /* {
      userid:this.getUserData.userid,
      password:this.getUserData.password,
      gender:this.getUserData,
      phone:this.getUserData.phone,
      username:this.getUserData.name
    } */).then(res =>{
      console.log(this.getUserData)
    })
    alert('保存成功！')
  }
}
}
</script>

<style>
.per-info{
  width: 1100px;
  height: 565px;
}
#changea{display: none;}
.clearfix::before,
.clearfix::after{
  content:'';
  display:table;
  clear:both;
}
.content {
width: calc(100% - 56px);
min-height: 570px;
margin-left: 54px;
position: absolute;
right: 0px;
transition: width 0.2s;
}
.personal {
height: 64px;
line-height: 64px;
margin-right: 30px;
position: relative;
}
.personal i{
margin-right: 10px;
color: rgb(94, 92, 92);
}
.personal span{
color: rgb(94, 92, 92);
font-weight: 600;
}
.content .info{
display: block;
margin-top: 100px;
margin-left: 50px;
margin-right: 50px;
height:580px;
}
.info .left{
box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
height: 400px;
position: relative;
left: 15%;
margin-left: 40px;
border-radius: 4px;
overflow: hidden;
width:300px;
border: 1px solid #EBEEF5;
background-color: #fff;
transition: .3s;
}
.info .right{
border: 1px solid #EBEEF5;
background-color: #FFF;
color: #303133;
border-radius: 4px;
overflow: hidden;
position: relative;
right: 20%;
height:400px;
width: 500px;
transition: .3s;
box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.info-header{
width: 300px;
height: 50px;
line-height: 50px;
text-align: left;
padding: 0 20px;
border-bottom: 1px solid #EBEEF5;
color: #303133;
font-size: 15px;
}
.info .body{
padding:20px;
}
.user-info{
list-style: none;
}
.user-info li{
border-bottom: 1px solid #ebeef5;
padding-bottom: 15px;
padding-top: 15px;
}
.user-info .back{
float: right;
}
.right .body{
padding: 20px;
}
.right .body .right-top{
height:50px;
border-bottom:2px solid #EBEEF5;
}
.right .body .right-top div{
padding-left: 25px;
float:left;
width:100px;
height: 40px;
line-height: 40px;
}
.right .body .right-top div:hover{
color: #409EFF;
border-bottom: 2px solid #409EFF;
cursor:pointer;
}
.activetab{
    color: #409EFF;
    border-bottom: 2px solid #409EFF;
}
.form{
  padding: 40px 0;
}
.form .form-item{
height:35px;
margin-bottom: 22px;
}
.form .form-item .text{
width:80px;
text-align: right;
vertical-align: middle;
float: left;
font-size: 14px;
color: #606266;
line-height: 40px;
padding: 0 12px 0 0;
}
.form .form-item .text:before {
content: '*';
color: #F56C6C;
margin-right: 4px;
}
.form .form-item input{
margin-right:80px;
border-radius: 4px;
border: 1px solid #DCDFE6;
box-sizing: border-box;
color: #606266;
/* display: inline-block; */
font-size: inherit;
height: 40px;
line-height: 40px;
outline: 0;
padding: 0 15px;
transition: border-color .2s cubic-bezier(.645,.045,.355,1);
width: 290px;
}
.form .form-item input:focus{
border-color: #409EFF;
outline: 0;
}
.form .gender{
margin-bottom: 12px;
width:100%;
text-align: center;
}
.form .gender .text{
width:92px;
text-align: right;
vertical-align: middle;
float: left;
font-size: 14px;
color: #606266;
height:35px;
line-height: 35px;
padding: 0 12px 0 0;
box-sizing: border-box;
}
.form .gender .choose{
color: #606266;
font-weight: 500;
cursor: pointer;
margin-right: 30px;
float:left;
display: inline;
}
.gender .choose span{
font-size: 14px;
margin: 0 20px 0 5px;
}
.gender .choose label:hover{
  cursor:pointer;
}

.form .btn{
padding-left: 70px;
}
.form .btn button{
padding: 7px 15px;
font-size: 12px;
border-radius: 3px;
border: 1px solid #DCDFE6;
text-align: center;
outline: 0;
transition: .1s;
font-weight: 500;
margin-right:15px ;
}
.btn .save{
color: #FFF;
background-color: #409EFF;
border-color: #409EFF;
}
.btn .close{
color: #FFF;
background-color: #F56C6C;
border-color: #F56C6C;
}
.btn .save:hover,
.btn .save:focus {
background: #66b1ff;
border-color: #66b1ff;
color: #FFF;
cursor:pointer;
}
.btn .close:focus,
.btn .close:hover{
background: #f78989;
border-color: #f78989;
color: #FFF;
cursor:pointer;
}
</style>