// 封装 axios 请求模块
import axios from "axios";
import router from "@/router";
 
// axios.create 方法创建一个axios的实例
const request = axios.create({
  baseURL: "/api", // 接口的基准路径,改成自己的项目基地址
});
 
// 请求拦截器：是否注入token
request.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('Authorization')) {
      //console.log(typeof localStorage.getItem('Authorization')) String
      //console.log(localStorage.getItem('Authorization'))
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login'|| to.path === '/home') {
    console.log("已登录")
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    //console.log(token)
    if (token === null || token === '') {
      next('/login');
    } else {
      if (to.matched.length === 0) {//当前路由的所有嵌套路径片段的路由记录
        next('/404')
      } else {
        next();
      }
    }
  }
}); 
 
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }); 


// store文件中vuex和localstorage对token进行处理之后响应拦截器中统一处理 token 过期
// 处理流程：在axios拦截器中加入token刷新逻辑；用户token过期时，向服务器请求新的 token；旧token替换为新token；然后继续用户当前的请求
// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      // 校验是否有 refresh_token
      const user = store.state.user;
      if (!user || !user.refresh_token) {
        router.push("/login");
        return;
      }
      // 如果有refresh_token，则请求获取新的 token
      try {
        const res = await axios({
          method: "POST",
          url: "/login", // 改成自己的项目的登录地址
          headers: {
            Authorization: `Bearer ${user.refresh_token}`,
          },
        });
 
        // 如果获取成功，则把新的 token 更新到容器中
        console.log("刷新 token  成功", res);
        store.commit("setUser", {
          token: res.data.data.token, // 最新获取的可用 token
          refresh_token: user.refresh_token, // 还是原来的 refresh_token
        });
        return request(error.config);
      } catch (err) {
        // 如果获取失败，直接跳转 登录页
        console.log("请求刷线 token 失败", err);
        router.push("/login");
      }
    }
 
    return Promise.reject(error);
  }
); 
 
export default request;
 