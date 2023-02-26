<template>
    <div class="cart-wrapper">
        <div class="cart-info">
            <div class="title">
                <div class="all-order" @click="this.$router.push('/home/myorder')"><a>所有订单</a></div>
                <div class="no-order" @click="this.$router.push('/home/myorder/nopay')"><a>待付款</a></div>
                <div class="ordered" @click="this.$router.push('/home/myorder/already')"><a>已付款</a></div>
            </div>

        <div class="goods">
            <div class="goods-up">
                <div class="upper">
                    <div class="up-item u1">宝贝</div>
                    <div class="up-item u2">单价</div>
                    <div class="up-item u2">数量</div>
                    <div class="up-item u3">交易状态</div>
                </div>
                <div class="choose">
                    <input type="checkbox" id="checkedAllBox" />全选
                </div>
            </div>
            <div class="goods-item">
                <router-view></router-view>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import OrderProduct from '@/components/common/orderproduct/OrderProduct.vue'
import { getUser } from '@/network/api';
export default {
  components: { OrderProduct },
  data(){
    return{
    }
  },
    created(){
        getUser().then(res => {
        console.log(res.data)
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
    })
    }
}
</script>

<style>
.cart-wrapper{
    display: flex;
    justify-content: center;
    width:100%;
    min-height: 570px;
}
.cart-info{
    width:900px;
}
.title div{
    margin: 20px 20px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}
.tittle a{
    padding: 0 30px;
    text-decoration: none;
    display: block;
}
.title a:hover{
    color:#ff4401;
}
.goods-up{
    width:100%;
}
 .goods-up .upper{
    height:40px;
    width:100%;
    padding:10px 0;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    position: relative;
 }
 .upper .up-item{
    display: inline-block;
    color: #3c3c3c;
    padding:0 10px;
 }
 .upper .u1,
 .upper .u2{
    text-align: center;
    float: left;
 }
 .u1{
    width:30%;
 }
 .u2{
    width:20%;
 }
 .upper .u3{
    float: right;
    width:15%;
 }

 .choose,
 .i-up{
    padding: 10px 15px;
 }
 .choose button{ 
    color: #3c3c3c;
    margin-left: 20px;
 }
.i-info .g-img,
.g-detail,
.money,
.num,
.operate{
   display: inline-block;
}
</style>