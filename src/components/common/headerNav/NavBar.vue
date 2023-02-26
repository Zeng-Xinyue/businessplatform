<template>
<div class="nav-bar">
  <div class="nav-bar-inner">
    <a href="javascript:;" class="logo" @click="GoHome"></a>

    <ul class="nav-category-list">
        <li class="bav-category" id="shoe" @click="GoShoe"><a href="javascript:;">鞋类箱包</a></li>
        <li class="bav-category" @click="GoBook"><a href="javascript:;">图书文化</a></li>
        <li class="bav-category" @click="GoFood"><a href="javascript:;">汇吃美食</a></li>
        <li class="bav-category" @click="GoPhone"><a href="javascript:;">手机数码</a></li>
        <li class="bav-category"><a href="javascript:;">女装男装</a></li>
        <li class="bav-category"><a href="javascript:;">护肤彩妆</a></li>
        <li class="bav-category"><a href="javascript:;">珠宝配饰</a></li>
        <li class="bav-category"><a href="javascript:;">运动户外</a></li>
    </ul>

    <button class="bar-search-btn" type="button"><i class="fas fa-search"></i></button>
    <input type="search" class="bar-search">
  </div>
</div>
</template>

<script>
export default {
    methods:{
        GoHome(){
            this.$router.push('/home')
            let shoe = document.getElementById('shoe')
            shoe.style.color = '#ff6700'
        },
        GoShoe(){
          this.$router.push('/home/category/shoe')
        },
        GoBook(){
          this.$router.push('/home/category/book')
        },
        GoFood(){
          this.$router.push('/home/category/food')
        },
        GoPhone(){
          this.$router.push('/home/category/phone')
        },
    },data(){
  },
      
}
</script>

<style>
.nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-bar-inner{
    width: 1260px;
    height: 100px;
    float: left;
}
.logo{
    height: 100px;
    width: 120px;
    float: left;
    display: block;
    background-image: url('@/assets/img/logo.jpg');
    background-repeat: no-repeat;
    background-position:50% 50%;
    background-size:125px;
}
.bav-category{
    display: block;
    float: left;
    height: 100px;
    line-height: 100px;
    margin: 0 15px;
    text-align: center;
}
.bar-search{
    width: 300px;
    height: 50px;
    margin: 30px 0;
    display: block;
    float: right;
}
.bar-search-btn{
    width: 45px;
    height: 50px;
    margin: 30px 0;
    float: right;
}
.bar-search-btn:hover {
    background-color: #ff6700;
    color: #fff;
    border-color: #ff6700;
}
</style>