import Vue from 'vue'
import headline from './headline.vue'
import 'lib-flexible/flexible.js'
import jsbridge from '@/utils/jsbridge'
Vue.prototype.$jsbridge = jsbridge
Vue.config.productionTip = false

new Vue({
  el: '#headline',
  template: '<headline/>',
  components: { headline }
})
