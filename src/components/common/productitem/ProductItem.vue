<!-- 商品推送，猜你喜欢 -->
<template>
    <div class="product-item"  v-for="(item,index) in productItem" :key="index" @click="LookProductDetail(item)">
        <a href="javascript:;">
            <span class="product-item-img">
                <img :src="item.picturehttp" alt="">
            </span>
            <span class="product-item-info">{{item.name}}</span>
            <span class="product-item-price">
                <span class="product-item-price-symbol">￥</span> 
                <span class="product-item-price-num">{{item.price}}</span>
            </span>
        </a>
    </div>
</template>

<script>
import { productIntro} from '@/network/api'
export default {
    created(){
        productIntro().then(res => {
            this.productItem = res.data.data
            console.log(this.productItem)
            return res.data.data
        })
    },
    data(){
        return{
            productItem:{},
        }
    },
    methods:{
        LookProductDetail(item){
            console.log(item)
            this.$store.productid = item.productid
            console.log(this.$store.productid)
            this.$router.push('/home/product')
        }
    }

}
</script>

<style>
.product-item{
    width: 340px;
    height: 170px;
    border: rgb(150, 150, 150) 1px solid;
    border-radius: 8px;
    display: inline-block;
    background-color: rgba(242, 242, 242, 0.914);
    display: inline-block;
    margin: 5px;
    position: relative;
    cursor: pointer;
}
.product-item-img img{
    width: 150px;
    height: 150px;
    margin-left: 10px;
    margin-top: 8px;
    background-color: bisque;
    border-radius: 7px;
}
.product-item-info{
    width: 156px;
    height: 46px;
    font-size: 16px;
    color: #333;
    display: block;
    position: absolute;
    top: 20px;
    left: 170px;
}
.product-item-info:hover{
    color: #ff6700;
}
.product-item-price{
    width: 186px;
    height: 24px;
    display: block;
    position: absolute;
    bottom: 20px;
    right: -10px;
    color: #ff5000;
}
.product-item-price-symbol{
    font-size: 14px;
}
.product-item-price-num{
    font-size: 22px;
}
</style>