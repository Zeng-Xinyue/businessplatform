<template>
  <div class="product-details">
    <div class="show-left">
      <img :src="this.productDetail.picturehttp" alt="">
    </div>
    <div class="show-right">
      <div class="product-detail-name">{{this.productDetail.name}}</div>
      <div class="product-detail-price">￥{{this.productDetail.price}} 特卖价！</div>
      <div class="product-detail-intro">{{this.productDetail.introduction}}</div>
      <div class="product-detail-add" @click="addProduct">加入购物车</div>
      <div class="product-detail-buy" @click="buyProduct">购买</div>
    </div>
  </div>
</template>

  <script>
  import {LookProductDetailIs,productIntro,addOrder,getUser} from '@/network/api'
export default {
data(){
  return{
    productid:null,
    productDetail:{},
    userid:null,
  }
},
created(){
  LookProductDetailIs({
    productid:this.$store.productid
  }).then(res => {
    console.log(res)
    this.productDetail = res.data.data
    console.log(this.productDetail)//当前商品id
  }) 
},
methods:{
  addProduct(){
    getUser().then(res => {
      console.log(res.data.data.userid)

    addOrder({
      userid:res.data.data.userid,
      productname:this.productDetail.name,
      payment:'undo',
      perprice:this.productDetail.price
    }).then(res => {
      alert('加入购物车成功！')
      this.$router.push('/home')
      console.log(res)
    })
    })
  },
  buyProduct(){
    getUser().then(res => {
      console.log(res.data.data.userid)

    addOrder({
      userid:res.data.data.userid,
      productname:this.productDetail.name,
      payment:'done',
      perprice:this.productDetail.price
    }).then(res => {
      alert('购买成功！')
      this.$router.push('/home')
      console.log(res)
    })
    })
  }
}
}
</script>

<style>
.product-details{
  min-height: 567px;
  width: 1100px;
  position: relative;
}
.show-left{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 100px;
  top: 50px;
}
.show-left img{
  width: 400px;
  height: 400px;
  display: block;
}
.show-right{
  width: 450px;
  height: 400px;
  position: absolute;
  right: 100px;
  top: 50px;
}
.product-detail-name{
  width: 450px;
  height: 80px;
  line-height: 80px;
  position: absolute;
  top: 0;
  background-color:#fff ;
  font-size: 40px;
  font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
}
.product-detail-price{
  width: 450px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  color: #fff;
  position: absolute;
  top: 80px;
  background-color: #b80f0f;
  padding: 0 20px;
}
.product-detail-intro{
  width: 450px;
  height: 160px;
	overflow: hidden;
	text-overflow: ellipsis;
  line-height: 40px;
  position: absolute;
  top: 160px;
}
.product-detail-add{
  width: 150px;
  height: 60px;
  line-height: 60px;
  margin: 20px 100px;
  text-align: center;
  color: #fff;
  background-color: #fc5531;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: -50px;
  font-size: 20px;
}
.product-detail-buy{
  width: 150px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #fc5531;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 250px;
  font-size: 20px;
}
</style>