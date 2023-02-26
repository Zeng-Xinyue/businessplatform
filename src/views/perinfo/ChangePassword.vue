<template>
    <div class="repwd">
      <form action="/home/personalinfo"  id="lg-form" name="lg-form" method="get">

          <div class="form-item">
              <label for="oldPassword">旧密码：</label>
              <input v-model="user.oldPassword" type="password" name="password" id="oldpassword" placeholder="旧密码"/>
          </div>

          <div class="form-item">
              <label for="newPassword">新密码：</label>
              <input v-model="user.newPassword"  type="password" name="password" id="newpassword" placeholder="新密码" maxlength="20"/>
          </div>
    
          <div class="form-item">
              <label for="confirmPassword">确认：</label>
              <input v-model="user.confirmPassword" type="password" name="newPassword" id="confirmPassword" placeholder="确认密码" maxlength="20"/>
          </div>
          <div class="btn">
            <button type="button" class="save" @click="Save">
             保存
            </button>
              <button type="button" class="close" @click="this.$router.replace('/home')">
             关闭
            </button>
          
        </div>
    
      </form>
    </div>  
    
</template>

<script>
import { changeUserPw,getUser } from '@/network/api';
export default {
data(){
return {
    user: {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  },
  getUserData:{},
  getOldPassword:'',
}
},
created(){
    getUser().then(res => {
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
        this.getUserData = res.data.data
        this.getOldPassword = res.data.data.password
        console.log(res.data)
    })
},
methods: {
Save(){
    if(this.user.oldPassword == ''){
        alert('旧密码不能为空！')
    }else if(this.getOldPassword !== this.user.oldPassword){
        alert('旧密码输入错误！')
        this.$router.go(0);
    }else if(this.user.newPassword == '')
    {
        alert('新密码不能为空')
    }else if(this.user.newPassword == this.user.oldPassword && this.user.newPassword != ''){
        alert('新密码不能和旧密码相同')
    }else if(this.user.confirmPassword == ''){
        alert('请确定新密码')
    } else if(this.user.confirmPassword != this.user.newPassword){
        alert('两次密码输入不一样')
    }else if(this.user.confirmPassword == this.user.oldPassword ){
        alert('新密码和旧密码不能相同')
    }else{
    this.getUserData.password = this.user.confirmPassword
    changeUserPw(this.getUserData).then(res => {
        console.log(res.data.message)
        if(res.data.message === '修改用户成功'){
            alert('修改成功')
            this.$router.go(0);
        }
    })}
},
}
}
</script>

<style>
.repwd label{
text-align: left;
vertical-align: middle;
float: left;
font-size: 14px;
color: #606266;
line-height: 40px;
height: 50px;
padding: 0 10px 0 0;
width: 85px;
}
.repwd .form-item{
height:50px;
margin-bottom: 30px;
}
.repwd .form-item .text{
width:80px;
text-align: right;
vertical-align: middle;
float: left;
font-size: 14px;
color: #606266;
line-height: 50px;
padding: 0 12px 0 0;
}
.repwd .form-item .text:before {
content: '*';
color: #F56C6C;
margin-right: 4px;
}
.repwd .form-item input{
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
width: 300px;
}
.repwd .form-item input:focus{
border-color: #409EFF;
outline: 0;
}
.repwd label:before {
content: '*';
color: #F56C6C;
}
.repwd .btn button{
padding: 7px 15px;
font-size: 12px;
border-radius: 3px;
border: 1px solid #DCDFE6;
text-align: center;
outline: 0;
transition: .1s;
font-weight: 500;
margin-right:20px ;
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