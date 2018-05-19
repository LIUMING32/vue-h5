import Vue from 'vue'
import {isNull} from '@/utils/validate'
Vue.filter('isNul', (str,arg1) => {
	if(isNull(str)){
		return arg1
	}else{
		return str 
	}
})