<template>
	<!--<div>{{data}}</div>-->
	<!--轮播组件开始-->
	<div id="swiper-wrap">
		<div class="swiper-container p152">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide " v-for="(item,index) in data" :key='index'><img :src="item.img" alt="" class="w100 bdr5"/></div>
		    </div>
	    </div>	
	</div>
	<!--轮播组件结束-->
</template>
<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	export default {
		props:{
			data:{
				type:Array
			}
		},
		components: {},		
		data(){
			return{
				
			}
		},
		mounted(){
			this.init()
		},
		methods: {
			init(){
				var swiper = new Swiper('.swiper-container', {
			      slidesPerView: 3,
			      spaceBetween: 15,
			  });

			}			
			
		}
	}
</script>

<style scoped>
	.swiper-slide {
	  font-size: 18px;
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: -webkit-flex;
	  display: flex;
	  -webkit-box-pack: center;
	  -ms-flex-pack: center;
	  -webkit-justify-content: center;
	  justify-content: center;
	  -webkit-box-align: center;
	  -ms-flex-align: center;
	  -webkit-align-items: center;
	  align-items: center;
	}		
</style>