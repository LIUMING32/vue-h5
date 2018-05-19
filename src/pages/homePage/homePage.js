/**
 * Created by Huang.zm on 2017/10/18.
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css';
import { Box} from 'vux'
Vue.use(Box)
import router from '../../router'
import homePage from './homePage.vue'
import 'lib-flexible/flexible.js'
import jsbridge from '@/utils/jsbridge'
Vue.prototype.$jsbridge = jsbridge
Vue.use(ElementUI); 
Vue.config.productionTip = false;

new Vue({
  el: '#home-page',
  router,  
  template: '<homePage/>',
  components: {homePage}
})
