<template>
  <order-product :productList="alreadyProductList"></order-product>
</template>

 <script>
 import {getAlreadyOrder,getUser} from '@/network/api'
import OrderProduct from '@/components/common/orderproduct/OrderProduct.vue'
export default {
  components: { OrderProduct },
    data(){
        return{
            alreadyProductList:{}
        }
    },
created(){
    getUser().then(res => {
        console.log(res.data)
        console.log(res.data.data.userid)
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
        getAlreadyOrder({
          userid:res.data.data.userid
        }).then(res => {
          this.alreadyProductList = res.data.data
          console.log(res.data.data)
        })
    })
  }
}

</script>

<style>

</style>