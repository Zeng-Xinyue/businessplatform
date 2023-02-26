import request from "@/network/request";

/* 查询token */
export const isToken = ()=> {
  return request({
    method:'POST',
    url:"/info"
  });
};

/* 注册用户 */
export const register = (data) => {
  return request({
    method: "POST",
    url: "/register",
    data
  },);
};

/* 首页商品推送接口函数 */
export const productIntro = () => {
    return request({
      method: "GET",
      url: "/home",
    },);
  };

/* 首页商品推送接口函数 */
export const IntroProduct = () => {
    return request({
      method: "GET",
      url: "/picture",
    },);
  };

  /* 分类商品鞋子展示接口函数 */
  export const categoryShoe = () => {
    return request({
      method: "GET",
      url: "/home/categoryShoe",
    },);
  };
  /* 分类商品书展示接口函数 */
  export const categoryBook = () => {
    return request({
      method: "GET",
      url: "/home/categoryBook",
    },);
  };
  /* 分类商品手机展示接口函数 */
  export const categoryPhone = () => {
    return request({
      method: "GET",
      url: "/home/categoryPhone",
    },);
  };
  /* 分类商品食物展示接口函数 */
  export const categoryFood = () => {
    return request({
      method: "GET",
      url: "/home/categoryFood",
    },);
  };

  /* 查看商品详情 */
  export const LookProductDetailIs = (params)=> {
    return request({
      method:'GET',
      url:"/home/search",
      params
    });
  };

/* 获取用户信息 */
export const getUser = ()=> {
  return request({
    method:'POST',
    url:"/info"
  });
};
/* 修改用户信息 */
export const changeUserInfo = (data)=> {
  return request({
    method:'POST',
    url:"/update",
    data,
  });
};
/* 修改用户密码 */
export const changeUserPw = (data)=> {
  return request({
    method:'POST',
    url:"/update",
    data,
  });
};

/* 添加商品到订单 */
export const addOrder = (params)=>{
  return request(
    {
      method:'GET',
      url:'/shopping',
      params
    }
  )
}

/* 请求全部订单 */
export const getAllOrder = (params)=>{
  return request(
    {
      method:'GET',
      url:'/myorder/all',
      params
    }
  )
}
/* 请求已付款订单 */
export const getAlreadyOrder = (params)=>{
  return request(
    {
      method:'GET',
      url:'/myorder/done',
      params
    }
  )
}
/* 请求未付款订单 和 购物车*/
export const getNoPayOrder = (params)=>{
  return request(
    {
      method:'GET',
      url:'/myorder/undone',
      params
    }
  )
}

/* 删除订单 */
export const deleteOrder = (params)=>{
  return request(
    {
      method:'GET',
      url:'shopping/deleteone',
      params
    }
  )
}

/* 支付未支付的订单 和购物车付款 */
export const payFor = (params)=>{
  return request(
    {
      method:'GET',
      url:'myorder/undotodone',
      params
    }
  )
}
