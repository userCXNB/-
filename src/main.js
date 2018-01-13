import Vue from 'vue'
import App from './App.vue'


//链接路由
import VueRouter from 'vue-router';

//传实例变全局
Vue.use(VueRouter);

//引入路由配置
import routes from './router.config';
//创建路由对象
const router = new VueRouter(routes);


// import VueTouch from "vue-touchjs"
// Vue.use(VueTouch);


import {Swipe,SwipeItem} from 'vue-swipe';

Vue.component("swipe",Swipe)
Vue.component("swipe-item",SwipeItem)
import '../node_modules/vue-swipe/dist/vue-swipe.css';


//引入状态管理
import store from './store';

//引入交互插件
import axios from 'axios';

axios.interceptors.request.use(function (config) {
  // 在发出正确请求之前做点事
  console.log('发出之前')
  store.dispatch('showLoading');
  return config;// 返回现在配置给拦截器
}, function (error) {
  // 在发出错误请求之前做点事
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 在响应之后做点事
  store.dispatch('hideLoading');
  console.log('请求之后')
  return response;  // 回来的数据对象
}, function (error) {
  return Promise.reject(error);
});


axios.defaults.withCredentials=true;
Vue.prototype.$http = axios;

//引入全局过滤器
import filte from './filters'

import 'animate.css'

for(var key in filte){
  Vue.filter(key,filte[key]);
}

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
