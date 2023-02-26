import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index'

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component:()=> import('@/views/HomeView.vue'),
    children:[
      {
        path:'',
        component:()=>import('@/views/maindatail/MainDetail')
      },
      {
        path:'perinfo',
        component:()=>import('@/views/perinfo/PerInfo.vue')
      },
      {
        path:'cart',
        component:()=>import('@/views/cart/Cart.vue')
      },
      {
        path:'category',
        component:()=>import('@/views/category/Category.vue'),
        children:[
          {
            path:'shoe',
            component:()=>import('@/views/category/Shoe.vue')
          },
          {
            path:'book',
            component:()=>import('@/views/category/Book.vue')
          },
          {
            path:'phone',
            component:()=>import('@/views/category/Phone.vue')
          },
          {
            path:'food',
            component:()=>import('@/views/category/Food.vue')
          },
        ]
      },
      {
        path:'myorder',
        component:()=>import('@/views/myorder/MyOrder.vue'),
        children:[
          {
            path:'',
            component:import('@/views/myorder/AllOrder.vue')
          },
          {
            path:'already',
            component:import('@/views/myorder/AlreadyOrder.vue')
          },
          {
            path:'nopay',
            component:import('@/views/myorder/NoPayOrder.vue')
          },
        ]
      },
      {
        path:'product',// /productid?:productid
        component:()=>import('@/views/productdetail/ProductDetail.vue')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('@/views/login/LoginIn.vue')
  },
  {
    path:'/register',
    component:()=>import('@/views/register/Register.vue')
  },
]

const router = createRouter({
  mode:'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes
}) 


export default router
