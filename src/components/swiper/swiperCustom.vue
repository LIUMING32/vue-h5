<template>
	<!--轮播图开始-->
	<div class="swiper-container" v-if="video">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img :src="data[0]" alt="" class="wpercent"/></div>
			<div class="swiper-slide"><img :src="data[1]" alt="" class="wpercent"/><a href="#" @click="open"><img :src="img3" style="" class="h-center w60"/></a></div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	<div v-else>
		<img class="w" :src="data[0]" alt="" />
	</div>
	<!--轮播图结束-->
</template>
<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	import {openApp} from '@/utils/openapp'
	export default {
		props: {
			data: {
				type: Array
			},
			video: {
				type: Boolean
			},			
			openapp: {
				type: Function
			}
		},
		components: {},
		data() {
			return {
				img1: require('../../assets/img/img_home.jpg'),
				img2: require('../../assets/img/img_home2.jpg'),
				img3: require('../../assets/img/user/videoplay.png')
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				var swiper = new Swiper('.swiper-container', {
				    pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				        renderBullet: function (index, className) {
				        let text;
				          switch(index){
				            case 0: text='图片'; break;
				            case 1: text='视频'; break;
				          }
				          return '<span class="' + className + '"><button>' + text + '</button></span>';
				        },
				    },
				})
			},
			open(){
				openApp()
			}
		}
	}
</script>
<style >
.swiper-slide .wpercent{width: 100%;height: auto;}
</style>