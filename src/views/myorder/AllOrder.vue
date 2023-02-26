<template>
  <order-product :productList="allProductList"></order-product>
</template>

 <script>
import OrderProduct from '@/components/common/orderproduct/OrderProduct.vue'
import {getAllOrder,getUser} from '@/network/api'
export default {
  data(){
    return{
      allProductList:{}
    }
  },
  components: { OrderProduct },
  created(){
    getUser().then(res => {
        console.log(res.data)
        if(res.data.code == 203){
          alert('登录过期，请重新登录')
          this.$router.push('/login')
        }
        getAllOrder({
          userid:res.data.data.userid
        }).then(res => {
          this.allProductList = res.data.data
          console.log(res.data.data)
        })
    })
  }

}
</script>

<style>

</style>