<template>
    <div class="g-item" v-for="(item,index) in productList" :key="index">
        <div class="i-up">
            <input type="checkbox" id="checked" /><span class="g-d">2023-02-20</span><span>订单号: {{item.oi}}</span>
       </div>
        <div class="i-info">
            <div class="g-img"><img :src="item.http" alt=""></div>
            <div class="g-detail"><div class="name">{{item.pn}}</div>
            </div>
            <div class="money">￥{{item.pp}}</div>
            <div class="num">1</div>
            <div class="operate">
                <button v-if="item.py === 'undo'" @click="pay(item)">点击付款</button>
                <div>{{item.py === 'undo'?undo:done}}</div>
            </div>
        </div>
    </div>
</template>

 <script>
 import {addOrder,payFor,deleteOrder} from '@/network/api'
export default {
    props:{
        productList:Array 
    },
    created(){
        console.log(this.productList)
    },
    data(){
        return{
            undo:'待支付',
            done:'已付款'
        }
    },
    methods:{
        pay(item){
            /* addOrder({
                userid:item.ui,
                productname:item.pn,
                payment:'done',
                perprice:item.pp
            }).then(res => {
                console.log(res)
                this.$router.go(0)
            })  */
            payFor({
                userid:item.ui,
                productname:item.pn,
                payment:'undo',
                perprice:item.pp
            }).then(res => {
                console.log(res)
            }) 
            this.$router.push(0)
            alert('支付成功！')
        }
    }

}
</script>

<style>

.g-item{
    border:#daf3ff solid 1px;
    width:100%;
    margin-bottom: 10px;
}
.i-up{
    height: 40px;
    font-size: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #daf3ff;
    background: #eaf8ff;
    color: #3c3c3c;
}
.i-up .g-d{
    font-weight: bold;
}
.i-up span{
    display: inline-block;
    margin-left: 10px;
}
.i-info{
    padding: 20px 30px;
    position: relative;
    font-size:12px;
    color: #3c3c3c;
}
.g-img{
    width:80px;
    height:80px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #3c3c3c;
}
.g-img img{
    word-wrap: 800px;
    height: 80px;
    display: block;
}
.g-detail{
    padding-left: 5px;
    width:20%;
    position: absolute;
    
}
.g-detail .name{
    font-weight: bold;
    font-size: 16px;
}
.money{
    position: absolute;
    left:38%;
    font-size: 16px;
}
.num{
    position: absolute;
    left: 60%;
    font-size: 16px;
}
.operate{
    width:15%;
    position: absolute;
    right: 0;
}
.operate button{
    font-size: 15px;
    font-weight: bold;
    border: #ff9203 solid 1px;
    background-color: #ff4401;
    border-radius: 10%;
    padding:5px 20px;
    text-align: center;
    margin-bottom: 20px;
    color: #f5f5f5;
}
.operate div{
    position: absolute;
    left: 30px;
    font-size: 16px;
}
</style>