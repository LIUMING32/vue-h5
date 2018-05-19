/**
 * Created by Huang.zm on 2017/10/18.
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import router from '../../router'
import MainPage from './App.vue'
import 'lib-flexible/flexible.js'
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#mian-menu',
  router,  
  template: '<MainPage/>',
  components: {MainPage}
})
