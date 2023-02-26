<template>
    <div class="g-item" v-for="(item,index) in cartProductItem" :key="index">
        <div class="i-info">
            <div class="is-buy"> 
                <input type="checkbox" id="checkedAllBox"/>
            </div>

            <div class="i-item-intro">
                <div class="g-img">
                    <img :src="item.http" alt="">
                </div>
                <div class="g-detail">
                    <div class="name">{{item.pn}}</div>
                    <div class="type">口味：</div>
                    <div class="time">发货时间</div>
                </div>
            </div>

            <div class="money">￥{{item.pp}}</div>
            <div class="num">1</div>
            <div class="add">￥{{item.pp}}</div>
            <div class="operate">
                <div @click="deleteCartItem(item)"><a href="javascript:;">删除</a> </div>
            </div>
        </div>
    </div>
</template>

 <script>
 import {deleteOrder} from '@/network/api'
export default {
    props:['cartProductItem'],
    methods:{
        deleteCartItem(item){
            console.log(item)
            deleteOrder({
                userid:item.ui,
                productname:item.pn,
                payment:'undo',
                perprice:item.pp
            }).then(res => {
                alert('删除购物车成功！')
                this.$router.go(0)
            })
        }
    }

}
</script>

<style>
.g-item{
    background-color:antiquewhite ;
    width:100%;
    margin-bottom: 10px;
    border-top: #9195a3 solid 2px;
    border-radius: 5px;
    box-shadow:3px -3px 3px  #e8e8e8;
}

.i-info{
    padding: 20px 10px;
    position: relative;
    font-size:12px;
    height:120px;
    color: #3c3c3c;
    display: flex;
    justify-content:space-between;
}
.is-buy input{
    height: 80px;
    line-height: 80px;
    position: absolute;
    left:10px;
}
.i-item-intro{
    width: 270px;
    position: absolute;
    left:100px;
    height: 80px;
    line-height: 80px;
}
.g-img{
    width:80px;
    height:80px;
    background-color: #3c3c3c;
    display: inline-block;
}
.g-detail{
    padding-left: 10px;
    width:170px;
    height: 80px;
    line-height: 80px;
    left:80px;
    position: absolute;
    display: inline-block;
}
.g-detail div{
    width: 200px;
    margin: 0;
    height: 25px;
    line-height: 25px;
}
.g-detail .name{
    font-weight: bold;
}
.money{
    padding-left: 15px;
    position: absolute;
    left: 330px;
    height: 80px;
    line-height: 80px;
}
.num{
    width:40px;
    position: absolute;
    left: 59%;
    height: 80px;
    line-height: 80px;
}
.add{
    width:20%;
    position: absolute;
    left: 74%;
    font-weight: bold;
    height: 80px;
    line-height: 80px;
}
.operate{
    cursor: pointer;
    position: absolute;
    right: 0;
    height: 80px;
}
.operate div{
    font-size: 10px;
    text-align: center;
    color:#3c3c3c;
    height: 80px;
    line-height: 80px;
    margin-right: 15px;
}
</style>