import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'

<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>

import axios from "axios";
import qs from 'qs';
import "@/assets/swiper/swiper-bundle.min.css";
import swiper from '@/assets/swiper/swiper-bundle.min.js'


/* axios({
        url:'http://127.0.0.1:4523/m2/2323130-0-default/63790581',
        method:'get',
        timeout:50000000
}).then(res => {
    if(res.status == 200){
        alert("SUCEED")
    }
    console.log(res);
}); */


/* axios.post('http://127.0.0.1:4523/m2/2323130-0-default/63790581', {//http://localhost:8080/login
    "phone":"15839998449",
    "password":"123456"
}).then(successResponse => {
    console.log(successResponse.data)
  })
  .catch(failResponse => {
    console.log("ERROR!")
  }) */


createApp(App).use(store).use(router).mount('#app')

