/**
 * Created by Huang.zm on 2017/10/18.
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import { Box } from 'vux'
Vue.component('box', Box)

import router from '../../router'
import finance from './finance.vue'
import 'lib-flexible/flexible.js'
import jsbridge from '@/utils/jsbridge'
Vue.prototype.$jsbridge = jsbridge
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#finance',
  router,  
  template: '<finance/>',
  components: {finance}
})
