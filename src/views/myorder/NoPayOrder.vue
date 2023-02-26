<template>
    <order-product :productList="nopayProductList"></order-product>
</template>

 <script>
 import OrderProduct from '@/components/common/orderproduct/OrderProduct.vue'
 import {getNoPayOrder,getUser} from '@/network/api'
export default {
  data(){
    return{
      nopayProductList:{}
    }
  },
  components: { OrderProduct },
  created(){
    getUser().then(res => {
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
        getNoPayOrder({
          userid:res.data.data.userid
        }).then(res => {
          this.nopayProductList = res.data.data
          console.log(res.data.data)
        })
    })
  }
}
</script>

<style>

</style>