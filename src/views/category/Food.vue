<template>
    <div class="food">
      <food-product-item></food-product-item>
    </div>
  </template>
  
  <script>
import FoodProductItem from '@/components/common/categoryproductitem/FoodProductItem.vue'
  export default {
  components: { FoodProductItem },
  created(){
    components: {
      FoodProductItem 
     }
  }
}
  </script>
  
  <style>
  
  </style>