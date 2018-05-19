import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import agreement from './agreement.vue'
import 'lib-flexible/flexible.js'
import jsbridge from '@/utils/jsbridge'
Vue.prototype.$jsbridge = jsbridge
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#agreement',
  template: '<agreement/>',
  components: { agreement }
})
