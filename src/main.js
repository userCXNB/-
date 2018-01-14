import Vue from 'vue'
import App from './App.vue'

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
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
