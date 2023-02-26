<!-- 商品推送轮播图 -->
<template>
  <div class="product-intro">
    <div class="procuct-index">
        <ul class="product-category-list-index">
            <li class="product-catrgory-item" v-for="(item,index) in catagoryList" :key="index">
                <a href="javascript:;">{{item}}</a>
            </li>
        </ul>
    </div>


    <div class="product-img-list">
        <a @click="leftClick" class="product-img-left " href="javascript:;">
            <i class="fas fa-chevron-left"></i>
        </a>
        <a @click="rightClick" class="product-img-right " href="javascript:;">
            <i class="fas fa-chevron-right"></i>
        </a>

        <a href="javascript:;">
            <ul id="imgAll" class="product-img-list-for" >
                <li class="product-img-item" v-for="(item,index) in productData" :key="index">
                    <img :src="item.picturehttp" alt="picture">
                </li>
            </ul>     
        </a>

        <div class="product-intro-pointer">
            <a @click="pointerClick(0)" href="javascript:;" class="avtive product-intro-pointer-item"></a>
            <a @click="pointerClick(1)" href="javascript:;" class="unactive product-intro-pointer-item"></a>
            <a @click="pointerClick(2)" href="javascript:;" class="unactive product-intro-pointer-item"></a>
            <a @click="pointerClick(3)" href="javascript:;" class="unactive product-intro-pointer-item"></a>
        </div>
    </div>
  </div>

</template>

<script>
import {IntroProduct} from '@/network/api'
import {Swiper,SwiperItem} from '@/components/common/swiper'
import { from } from 'responselike'
var Tools = require('@/utils/Tools')
export default {
    data(){
        return{
            productData:{},
            catagoryList:['女装男装','鞋类箱包','母婴用品','护肤彩妆','汇吃美食','珠宝配饰','手机数码','运动户外'],
            currentIndex:0,
            pageLenth : 4,
    }
    },
    created(){
        IntroProduct().then(res => {
            this.productData = res.data.data
            console.log(res.data.data)
        })
    },
    methods:{
        rightClick(){
            console.log("current",this.currentIndex)
            this.currentIndex++;
            console.log(this.currentIndex)
            if(this.currentIndex == 4) this.currentIndex=0
            let pointer = document.getElementsByClassName('product-intro-pointer-item')
            let imgList = document.getElementsByClassName('product-img-item')
            for(var i = 0;i<4;++i)
            {
                if(i == this.currentIndex){
                    pointer[i].className = "activer product-intro-pointer-item"
                    imgList[i].className = "yes product-img-item"
                }else
                {
                    pointer[i].className = "unactiver product-intro-pointer-item"
                    imgList[i].className = "no product-img-item"
                }
            }
            Tools.move(imgAll,"left",-1065*(this.currentIndex),200,function(){}) 
        },pointerClick(index){//console.log(index)
            let pointer = document.getElementsByClassName('product-intro-pointer-item')
            let imgList = document.getElementsByClassName('product-img-item')
            for(let i = 0;i<pointer.length;++i)
            {
                if(i == (3)){
                    //imgListPointer[i].style.backgroundColor = "#0000004d"
                    pointer[i].className = "activer product-intro-pointer-item"
                    imgList[i].className = "yes product-img-item"
                }else //imgListPointer[i].style.backgroundColor = "#0000001a;"
                {
                    pointer[i].className = "unactiver product-intro-pointer-item"
                    imgList[i].className = "no product-img-item"
                }
            }
            Tools.move(imgAll,"left",-1065*(index),200,function(){})
        },leftClick(){
            this.currentIndex--;
            if(this.currentIndex == -1) this.currentIndex=3
            let pointer = document.getElementsByClassName('product-intro-pointer-item')
            let imgList = document.getElementsByClassName('product-img-item')
            for(var i = 0;i<4;++i)
            {
                if(i == this.currentIndex){
                    pointer[i].className = "activer product-intro-pointer-item"
                    imgList[i].className = "yes product-img-item"
                }else
                {
                    pointer[i].className = "unactiver product-intro-pointer-item"
                    imgList[i].className = "no product-img-item"
                }
            }
            Tools.move(imgAll,"left",-1065*(this.currentIndex),200,function(){}) 
        }
    },
    components:{
    }
}
</script>

<style>
.product-intro{
    height: 400px;
    width: 1040px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
}
.procuct-index{
    width: 230px;
    float: left;
    z-index: 9999;
}
.product-catrgory-item:first-child{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.product-catrgory-item:last-child{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.product-catrgory-item {
    width: 230px;
}
.product-catrgory-item a{
    display: block;
    height: 50px;
    line-height: 50px;
    width: 230px;
    color: #ffffff;
    font-size: 14px;
    padding-left: 30px;
}
.product-catrgory-item:hover {
    background-color: #ff6700;
    color: #ffffff;
    cursor: pointer;
}
.product-catrgory-item a:hover{
    background-color: #ff6700;
    color: #ffffff;
}
.product-catrgory-item i{
    height: 16px;
    width: 16px;
    display: block;
    float: right;
    margin: 17px;
}
.product-img-list{
    width: 1065px;
    position: relative;
    left: 0;
    height: 400px;
}
.product-img-left{
    z-index: 999;
    position: absolute;
    left: 10px;
    margin: 180px -10px;
    font-size: 30px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 45px;
    color: #ffffff;
}
a.product-img-left:hover{
    background-color: #0000004d;
    color: #ffffff;
}
.product-img-right{
    z-index: 999;
    position: absolute;
    right: 10px;
    margin: 180px 15px;
    font-size: 30px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 45px;
    color: #ffffff;
}
a.product-img-right:hover{
    background-color: #0000004d;
    color: #ffffff;
}
#imgAll{
    width: 4260px;
    z-index: 9;
}
.product-img-list-for{
    width: 1065px;
    overflow: hidden;
    position: absolute;
}
.product-img-item{
    width: 1065px;
    height: 400px;
    float: left;
}
.product-img-item img{
    width: 1065px;
    height: 400px;
    float: left;
}
.product-intro-pointer{
    display: block;
    height: 38px;
    line-height: 38px;
    margin: 0 20px;
    position: absolute;
    bottom: 0;
    right: 100px;
    z-index: 999;
}
.product-intro-pointer a{
    display: block; 
    height: 8px;
    width: 8px;
    border-radius: 50%;
    border: #0000004d 1px solid;
    float: left;
    margin: 0 5px;
}
.product-intro-pointer a:hover{
    background-color: #ff6700;
}
.activer{
    background-color: #ff6700;
}
.unactiver{
    background-color:#ffffff;
}
</style>