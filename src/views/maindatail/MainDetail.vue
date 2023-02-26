<template>
  <div class="main-inner">
    <product-intro :catagoryList="catagoryList"></product-intro>
    <what-love></what-love>
  </div>
</template>

<script>
import ProductIntro from '@/views/maindatail/productintro/ProductIntro.vue'
import WhatLove from '@/views/maindatail/whatlove/WhatLove.vue'
import Swiper from '@/components/common/swiper/Swiper.vue';
export default {
  props:['catagoryList'],
  components: { 
    ProductIntro,
    WhatLove, 
    Swiper
  },

}
</script>

<style>
.main-inner{
  width: 1135px;
  border-radius: 5px;
  padding: 20px;
}
</style>