<template>
  <div class="main">
		<div>
			<!--项目详情开始-->
			<div >
		    <div class="pubTab">
					<tab :line-width="2" custom-bar-width="60px" active-color="#000" default-color="#999" >
			      <tab-item selected @on-item-click="tabClick()">{{tab.datum}}</tab-item>
			      <tab-item @on-item-click="tabClick()">{{tab.dynamic}}</tab-item>
			    </tab>	 
		    </div>
		    <div v-if="index" class="div-card">
					<div >
						<!--项目简介开始-->
						<div class="div-model">
							<div class="mb10"> <basic :data="userInfo" :classObject="classObject" :classObject2="classObject2"></basic> </div>
							
							<div class="project">
								<h4 class="tl ">沁园春项目融资</h4>
								<button class="default-btn m102 gray">电视剧</button>
								<span class="Clearfix">历史</span>
								<span class="Clearfix">融资金额：5800万</span>
							</div>
						</div>
						<!--项目简介结束-->
			    	<!--项目概述开始-->
						<div class="div-model "> 
				     	<h4 class="tl">{{title.projectOverview}}</h4>
				    	<p class="mb10">{{userInfo.words}}</p>
						</div>
						<!--项目概述结束-->	
			    	<!--项目优势开始-->
						<div class="div-model "> 
				     	<h4 class="tl">{{title.projectAdvantages}}</h4>
				     	<p class="mb10">{{userInfo.words2}}</p>
						</div>
						<!--项目优势结束-->		
						<!--投资价值开始-->
						<div class="div-model "> 
				     	<h4 class="tl">{{title.investmentValue}}</h4>
				     	<p class="mb10">{{userInfo.words3}}</p>
						</div>
						<!--投资价值结束-->	
						<!--团队介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl pb10">{{title.teamIntroduction}}</h4>
				     	<ul class="introduce-pub">
				     		<li v-for="item in userInfo.team"><span class="Clearfix">{{item.role}}:{{item.name}}</span><span class="Clearfix grays">{{item.representative}}</span></li>
				     	</ul>
						</div>
						<!--团队介绍结束-->							
						<!--自定义内容开始-->
						<div class="div-model "> 
				     	<h4 class="tl">{{title.custom}}</h4>
				     	<p class="mb10"></p>
						</div>
						<!--自定义内容结束-->	
						<!--评论开始-->
						<div class="div-model "> 
				     	<h4 class="tl">{{title.comment}}(5)</h4>
				     	<comment ></comment>
						</div>
						<!--评论结束-->							
					</div>
				</div>
				<div v-else class="div-card">
				　 <div class="dynamic">
						<dynamic :data="userInfo"></dynamic>
				</div>
				</div>
			</div>
			<!--项目详情结束-->			
		</div>
		<guide v-if="guide"></guide>
  </div>
</template>
<script>

	import basic from '../../components/user/basicInfo.vue'	
	import dynamic from '../../components/user/dynamic.vue'
	import guide from '../../components/user/guide.vue'
	import comment from '../../components/comment/comment.vue'		
	import {XButton,Tab,TabItem,} from 'vux'	
  export default{
      name: 'mainPage',
      components: {basic,XButton,Tab, TabItem,dynamic,comment,guide},
			data() {
				return {
					showMenus: false,
					img1:require('../../assets/img/img_home.jpg'),
					img2:require('../../assets/img/img_home2.jpg'),
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
						dynamic:[{date:'2018-05-08',des:'的最佳女主角',imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],address:'北京'}],
						len:{zero:false,one:false,two:false,three:true},
					},
					tab:{
						datum:'项目介绍',
						dynamic:'项目动态'
					},
					title:{
						projectFinance:'项目融资',
						projectOverview:'项目概述',
						projectAdvantages:'项目优势',
						investmentValue:'投资价值',
						teamIntroduction:'团队介绍',	
						custom:'自定义',	
						comment:'最新评论'
					},
					index: true,
					guide:false,
				}
			},
			methods:{
				tabClick () {
	　　　　　　this.index = !this.index
	　　　　}
			}
  }
</script>


<style scoped lang="less">
	@import url("../../assets/css/style.css");
</style>
