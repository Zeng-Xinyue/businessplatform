<template>
    <div class="cart">
        <div class="cart-nav">
            <div class="title">
                <div class="t1"><a>全部商品</a></div>
            </div>

        <div class="goods">
            <div class="goods-up">
                <div class="goods-nav">
                    <div class="up-item">
                        <input type="checkbox" id="checkedAllBox"/>全选
                    </div>
                    <div class="up-item">商品</div>
                    <div class="up-item">单价</div>
                    <div class="up-item">数量</div>
                    <div class="up-item">小计</div>
                    <div class="up-item">操作</div>
                </div>
            </div>

            <div class="goods-item-list">
                <cart-product :cartProductItem = "cartProductList"></cart-product>
            </div>

            
            <div class="goods-last">
                <div class="check-all">
                    <input type="checkbox" id="checked-all-box" />全选
                </div>
                <div class="delete-choiced">删除选中的商品</div>
                <div class="delete-all">清理购物车</div>
                <div class="competitor">已选择<span> {{this.totallyNum}} </span>件商品 </div>
                <div class="price-all">总价：<span>￥{{this.totallyPrice}}</span> <i class="fas fa-lightbulb"></i></div>
                <a class="pay">去结算</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import CartProduct from '@/components/common/cartproduct/CartProduct.vue';
import { getNoPayOrder,getUser } from '@/network/api';
export default {
    components:{
        CartProduct,
    },
    data(){
        return {
            totallyPrice:0,
            totallyNum:0,
            cartProductList:{}
        }
    },
    created(){
    getUser().then(res => {
        console.log(res.data)
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
        getNoPayOrder({
          userid:res.data.data.userid
        }).then(res => {
          this.cartProductList = res.data.data
          console.log(res.data.data)
          this.totallyNum = res.data.data.length
        })
    })
    for(let i = 0;i<this.totallyNum;++i){
        console.log(this.cartProductList[i].pp)
        this.totallyPrice += this.cartProductList[i].pp
        console.log(this.totallyPrice)
    }
    }

}
</script>

<style>
.cart{
    display: flex;
    justify-content: center;
    width:100%;
    min-height: 570px;
    padding-top: 30px;
}
.cart-nav{
    width:900px;
}
.title .t1{
    display: inline-block;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
}
.t1 a{
    padding: 0 30px;
    text-decoration: none;
    display: block;
}
.t1 a{
    color:#ff4401;
}
.goods-up{
    width:100%;
}
 .goods-up .goods-nav{
    font-size: 12px;
    height:30px;
    line-height: 30px;
    width:100%;
    margin:10px 0;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    position: relative;
    display: flex;
    justify-content:space-between;
 }
 .goods-nav .up-item{
    display: inline-block;
    color: #3c3c3c;
    padding:0 13px;
    height: 30px;
    width: 100px;
    line-height: 30px;
    text-align: center;
 }
.up-item:first-child{
    text-align: left;
}
.up-item:last-child{
    text-align: right;
}

.goods-last{
    padding-left: 10px;
    border:solid 1px #e8e8e8;
    border-radius: 20px;
    font-size: 12px;
    color:#3c3c3c;
    width: 900px;
    height: 80px;
    line-height: 80px;
}
.goods-last div{
    float: left;
}
.checkall{
    width: 50px;
    position: relative;
}
.delete-choiced{
    color: #9195a3;
    margin: 0 40px;
}
.delete-all{
    font-weight: bold;
    margin: 0 70px 0 10px;
}
.competitor{
    color: #9195a3;
    position: relative;
    left: 120px;
    width: 100px;
    margin: 0 20px;
}
.competitor span,
.price-all span{
    font-size: 16px;
    color:#ff4401;
    font-weight: bold;
}
.price-all{
    color: #9195a3;
    position: relative;
    left: 160px;
    width: 105px;
}

.pay{
    background-color: #ff4401;
    text-align: center;
    line-height: 56px;
    font-size: 16px;
    font-weight: bolder;
    color: #f5f5f5;
    height:55px;
    width: 100px;
    border-radius: 7px;
    display: inline-block;
    position: relative;
    left: 200px;
}
.price-all i{
    color:#ff4401;
}
</style>