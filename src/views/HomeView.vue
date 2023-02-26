<template>
  <div class="home">
    <header-nav></header-nav>

    <main>
      <router-view></router-view>
    </main>

    <footer-intro></footer-intro>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import HeaderNav from '@/views/home/HeaderNav.vue' ;
import FooterIntro from '@/views/home/FooterIntro.vue';
import {test} from '@/network/api'

export default {
  name: 'HomeView',
  components: {
    HeaderNav,
    FooterIntro,
  },
  data(){
    return{
    }
  },
  created(){
    /* axios.get('http://localhost:8084/shopping?userid=1').then(res => {
      console.log(res)
    }) */
    /* test().then(res => {
      console.log(res)
    }) */
  }
}
</script>

<style>
.home{
  background-color: #f4f2f2;
  position: relative;
  overflow: hidden;
}
main{
  border-radius: 18px;
  margin: 20px 250px 40px;
  background-color: #fff;
}
a:hover{
  color: #ff6700;
}
li{
 list-style: none;
}
</style>
