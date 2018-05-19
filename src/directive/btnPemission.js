import store from '../store/index';
import {includes} from 'lodash';
export default (Vue)=>{
  Vue.directive("permission",{
      inserted:function(el,bind){
        // 判断是否有权限. 如果没有则删除按钮或者节点; 而不是隐藏
        return includes(store.getters.btn_permission,bind.expression)?el.style.display='inline-block':el.parentNode.removeChild(el);
      }
  })
}