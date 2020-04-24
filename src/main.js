import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false
//解决移动端300ms延迟
FastClick.attach(document.body);
//图片懒加载
Vue.use(VueLazyLoad,{
  loading :require('./assets/img/common/placeholder.png')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
