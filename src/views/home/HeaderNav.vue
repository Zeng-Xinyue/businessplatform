<template>
  <div class="header">
    <nav-top></nav-top>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavTop from '@/components/common/headerNav/NavTop.vue'
import NavBar from '@/components/common/headerNav/NavBar.vue'
export default {
  components: { 
    NavTop,
    NavBar,
  },
}
</script>

<style>
.header{
  height: 140px;
  top: 0;
}
</style>