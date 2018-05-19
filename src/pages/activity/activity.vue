<template>
  <div class="main">
		<div>
			<!--项目详情开始-->
			<div >
		    <div class="pubTab">
					<tab :line-width="2"  active-color="#000" default-color="#999" >
			      <tab-item selected @on-item-click="tabClick()">{{label.activity.activityIntro}}</tab-item>
			      <tab-item @on-item-click="tabClick()">{{label.activity.activityRegist}}</tab-item>
			    </tab>	 
		    </div>
		    <div v-if="index" class="div-card">
					<div >
						<!--通告介绍开始-->
						<div class="div-model">
							<div class="m102 bdb1 pb10"> <basic :data="userInfo" :classObject="classObject" :classObject2="classObject2"></basic> </div>
							<h4 class="tl mt102">怒火英雄</h4>
							<button class="default-btn  orage-btn">影视峰会</button>
							<span class="span-pub grays">军旅抗战</span>							
							<div class="pb10">
								<ul>
									<li><span class="span-pub2 font-big2">{{label.activity.activityTime}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">208-05-10</span></li>
									<li><span class="span-pub2 font-big2">{{label.activity.activityAddr}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">北京市朝阳区东亿国际媒体产业园一期</span></li>
									<li><span class="span-pub2 font-big2">{{label.activity.hotline}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">13568974562</span></li>
								</ul>
							</div>
						</div>
						<!--通告介绍结束-->
						<!--图片滑动开始-->
						<div class="div-model bg-white" >
							<swiper :data="imglist"></swiper>
						</div> 
						<!--图片滑动结束-->						
						<!--活动介绍开始-->
						<div class="div-model ">
							<h4 class="tl mt102 bsb2">{{label.activity.activityIntro}}</h4>
							<div class="bst1">
								<p class="mt10">该剧以“销毒”作为切入点，以风起云动、各方势力逐鹿的上海滩为背景讲述了以袁帅为首的热血青年，粉碎日军阴谋的故事。</p>
							</div>		
						</div>
						<!--活动介绍结束-->		
						<!--自定义开始-->
						<div class="div-model ">
							<h4 class="tl mt102 bsb2">{{label.title.custom}}</h4>
							<div class="bst1">
								<p class="mt10">该剧以“销毒”作为切入点，以风起云动、各方势力逐鹿的上海滩为背景讲述了以袁帅为首的热血青年，粉碎日军阴谋的故事。</p>
							</div>		
						</div>
						<!--自定义结束-->	
						<!--评论开始-->
						<div class="div-model "> 
				     	<h4 class="tl bsb2 mt102">{{label.title.comment}}(5)</h4>
				     	<div class="bst1 mb10"></div>
				     	<comment ></comment>
						</div>
						<!--评论结束-->						

					</div>
				</div>
				<div v-else class="div-card">
						<!--通告介绍开始-->
						<div class="div-model">
							<div class="m102 bdb1 pb10"> <basic :data="userInfo" :classObject="classObject" :classObject2="classObject2"></basic> </div>
							<h4 class="tl mt102">怒火英雄</h4>
							<button class="default-btn  orage-btn">影视峰会</button>
							<span class="span-pub grays">军旅抗战</span>							
							<div class="pb10">
								<ul>
									<li><span class="span-pub2 font-big2">{{label.activity.activityTime}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">208-05-10</span></li>
									<li><span class="span-pub2 font-big2">{{label.activity.activityAddr}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">北京市朝阳区东亿国际媒体产业园一期</span></li>
									<li><span class="span-pub2 font-big2">{{label.activity.hotline}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">13568974562</span></li>
								</ul>
							</div>
						</div>
						<!--通告介绍结束-->
			    	<!--票务开始-->
						<div class="div-model apply-wrap" > 
							<div class="ps-wrap"><img :src="userInfo.avatar" alt="" class="w30"/></div>
				    	<ul>
				    		<li class="apply">
				    			<div class="over-flow p10">
				    				<div class="fl"> <h4 class="f36" >资方免票</h4><span class="dis-block mt102">上线<b class="f36">60</b>人</span></div>
				    				<div class="fr p20"><span class="fb cf3a f50 f50">免费</span> </div>
				    			</div>							
				    			<div class="gray-div">
				    				<span class="fl">已有17人申请</span>
				    				<div class="fr "><a href="#"><button class="default-btn black-btn">我要报名</button></a></div>
				    			</div>
				    		</li>
				    	</ul>
						</div>
						<!--票务结束-->						
				</div>
			</div>
			<!--项目详情结束-->			
		</div>
		<guide v-if="guide"></guide>
  </div>
</template>
<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	import basic from '../../components/user/basicInfo.vue'	
	import guide from '../../components/user/guide.vue'
	import comment from '../../components/comment/comment.vue'	
	import swiper from '../../components/swiper/swiper.vue'	
	import label from '../../../static/json/label.json'
	import {XButton,Tab,TabItem} from 'vux'	
  export default{
      name: 'mainPage',
      components: {basic,XButton,Tab, TabItem,comment,guide,swiper},
			data() {
				return {
					img1:require('../../assets/img/img_home.jpg'),
					classObject:{active: false,'defaults': true},
					classObject2:{active: true,'defaults': false},
					toggle:{investor:false,artist:false,writer:false,director:true,broker:false,dispersion:false,advertise:false,filmPost:false,subdirector :false,art:false,videoEffects :false,other :false},
					len:{zero:false,one:false,two:false,three:true},
					userInfo:{
						avatar:require('../../assets/img/head.jpg'),
						name:'张海泉',
						sex:'男',
						city:'北京',
						realName:'实名',
						accredit:'授权',
						orgnize:'机构',
						age:'27',
						words:'2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。',
						words2:'2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。',
						words3:'2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。',
						team:[{role:'导演',name:'王岩',representative:'《仙剑奇侠传》'},{role:'主演',name:'王智',representative:'《仙剑奇侠传》'}],
						dynamic:[{date:'2018-05-08',des:'的最佳女主角',address:'北京'}],
						len:{zero:false,one:false,two:false,three:true},
					},
					imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],
					label:label,
					index:true,
					guide:false,
				}
			},
			mounted(){
				this.init()

			},
			methods:{
				tabClick () {
	　　　　　　this.index = !this.index
					this.init()
	　　　　 },
				init(){
					var swiper = new Swiper('.swiper-container', {
			      slidesPerView: 3,
			      spaceBetween: 15,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			   });
				}	
			}
  }
</script>


<style scoped lang="less">
	@import url("../../assets/css/style.css");
	.swiper-slide {
	  text-align: center;
	  font-size: 18px;
	  /* Center slide text vertically */
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
