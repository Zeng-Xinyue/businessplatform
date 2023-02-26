const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
 

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
configureWebpack:  {
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify")
      }
    },
    plugins: [new NodePolyfillPlugin()],
  },

  //代理跨域
    devServer: {
      port:8084,
      proxy: {
        '/api': {
          //代理api
          target: 'http://117.50.163.249:8084', // 代理接口(注意只要域名就够了)
          changeOrigin: true, //是否跨域
          pathRewrite: {
            //重写路径
            '^/api': '' //代理路径
          }
        }
      }
    }
  

})
