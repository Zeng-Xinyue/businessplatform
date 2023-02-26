<template>
  <div class="what-love">
    <div class="what-love-tit">
        <span class="what-love-text">猜你喜欢</span>
        <img class="what-love-img" src="@/assets/img/whatlove.png" alt="">
    </div>
    <div class="love-content">
        <product-item></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/common/productitem/ProductItem.vue'
import {productIntro} from '@/network/api'
import axios from 'axios'
export default {
  components: { ProductItem },
    created(){
        /* productIntro().then(res => {
            console.log(res.data.data)	// 获取返回参数中的需要的值data
            //console.log(typeof res.data.data)
            //console.log(this.productData[0])
            this.whatLoveProductList  = res.data.data
            console.log(this.whatLoveProductList)
        })
        console.log(this.whatLoveProductList) */
    },
    data(){
      return{
        whatLoveProductList:{}
      }
    },
}
</script>

<style>
.what-love{
    width: 1160px;
}
.what-love-tit{
    height: 25px;
    line-height: 25px;
    margin-bottom: 10px;
}
.what-love-text{
    font-size: 24px;
}
.what-love-img{
    height: 20px;
    margin: 4px 0 0 6px;
}
.love-content{
    width: 1165px;
}
</style>