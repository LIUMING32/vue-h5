import Vue from 'vue'

const vueTouch = {}
vueTouch.install = Vue => {
	Vue.directive("tap",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"tap",vnode);
		}
	});
	Vue.directive("swipe",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"swipe",vnode);
		}
	});
	Vue.directive("swipeleft",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"swipeleft",vnode);
		}
	});
	Vue.directive("swiperight",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"swiperight",vnode);
		}
	});
	Vue.directive("swipedown",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"swipedown",vnode);
		}
	});
	Vue.directive("swipeup",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"swipeup",vnode);
		}
	});
	Vue.directive("longtap",{
		bind:function(el,binding,vnode){
			new vueTouch(el,binding,"longtap",vnode);
		}
	});
}

export default vueTouch

