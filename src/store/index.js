import Vue from 'vue'
import { createStore } from 'vuex'
import { setItem,getItem } from '@/utils/storage'
export default createStore({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userid:'',
    productid:'',
  },
  mutations: {
   /* getToken(state,data){
     console.log(state.token)
     state.token = data
     localStorage.setItem('token', token);
   }, */
   changeLogin (state, data) {
      state.Authorization = data.Authorization;
      localStorage.setItem('Authorization', data.Authorization);
    },
  },
  actions: {
 
  },
  getters:{

  }
})



/* import Vue from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 存储token
    token:"",
  },
  getters: {
	getToken(state){
		return state.token || localStorage.getItem("token") || "";
	}
  },
  mutations: {
    // 修改token，并将token存入localStorage
    setToken(state,token) {
      state.token = token;
      localStorage.setItem('token', token);
      console.log(token);
      console.log('store、localstorage保存token成功！');
    },
    delToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
  },
  modules: {
  }
}) */

 