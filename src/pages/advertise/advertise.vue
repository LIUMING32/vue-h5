<template>
  <div class="main">
		<div>
			<!--项目详情开始-->
			<div >
		    <div class="pubTab">
					<tab :line-width="2"  active-color="#000" default-color="#999" >
			      <tab-item selected @on-item-click="tabClick()">{{label.filmRecruit.recruitRole}}</tab-item>
			      <tab-item @on-item-click="tabClick()">{{label.filmRecruit.noticeIntro}}</tab-item>
			    </tab>	 
		    </div>
		    <div v-if="index" class="div-card">
					<div >
						<!--通告介绍开始-->
						<div class="div-model">
							<div class="m102"> <basic :data="userInfo" :classObject="classObject" :classObject2="classObject2"></basic> </div>
							
							<div class="project">
								<ul>
									<li><span class="span-pub2 font-big2">{{label.filmRecruit.recruitEnd}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">208-05-10</span></li>
									<li><span class="span-pub2 font-big2">{{label.filmRecruit.recruitAddr}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">北京市朝阳区东亿国际媒体产业园一期</span></li>
									<li><span class="span-pub2 font-big2">{{label.filmRecruit.recruitTel}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">13568974562</span></li>
								</ul>
							</div>
						</div>
						<!--通告介绍结束-->
			    	<!--申请面试开始-->
						<div class="div-model apply-wrap" > 
							<div class="ps-wrap"><img :src="userInfo.avatar" alt="" class="w30"/></div>
				    	<ul>
				    		<li class="apply">
				    			<div class="over-flow">
				    				<div class="fl"> <h4 class="zero" >上海王&nbsp;&nbsp;&nbsp;&nbsp;莫昆</h4><span class="dis-block grays">艺人</span></div>
				    				<div class="fr"> <a href="#"><button class="default-btn black-btn">申请面试</button></a></div>
				    			</div>
				    			<h4 class="tl">人物小传</h4>
				    			<p class="mb10">莫坤是草根英雄的代表，理发手艺高超，以“三十二式”剃头绝学</p>
				    			<div class="gray-div">
				    				<div class="fl ellipsis"><a href="#" v-for=" i in imglist" > <img :src="i.img"/></a></div>
					    			<span class="fr">已有17人申请</span>
				    			</div>
				    		</li>
				    	</ul>
						</div>
						<!--申请面试结束-->	
					</div>
				</div>
				<div v-else class="div-card">
						<!--通告介绍开始-->
						<div class="div-model ">
							<h4 class="tl mt10">迪卡侬运动品牌代言</h4>
				     	<h4 class="tl">{{label.filmRecruit.noticeIntro}}</h4>
				     	<p>该剧以“销毒”作为切入点，以风起云动、各方势力逐鹿的上海滩为背景讲述了以袁帅为首的热血青年，粉碎日军阴谋的故事。</p>
				     	<h4 class="tl"><span class="span-pub2 font-big2">{{label.advertise.workLocation}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><span class="span-pub2">208-05-10</span></h4>
							
						</div>
						<!--通告介绍结束-->		
						<!--团队介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl bsb2 mt102 ">{{label.filmRecruit.teamIntro}}</h4>
				     	<ul class="introduce-pub bst1">
				     		<li v-for="item in userInfo.team"><span class="span-pub">{{item.role}}:{{item.name}}</span><span class="span-pub grays">{{item.representative}}</span></li>
				     	</ul>
						</div>
						<!--团队介绍结束-->								
						<!--评论开始-->
						<div class="div-model "> 
				     	<h4 class="tl bsb2 mt102">{{label.title.comment}}(5)</h4>
				     	<div class="bst1 "></div>
				     	<comment ></comment>
						</div>
						<!--评论结束-->						
				</div>
			</div>
			<!--项目详情结束-->			
		</div>
		<guide v-if="guide"></guide>
  </div>
</template>
<script>
	import basic from '../../components/user/basicInfo.vue'	
	import guide from '../../components/user/guide.vue'
	import comment from '../../components/comment/comment.vue'	
	import label from '../../../static/json/label.json'
	import {XButton,Tab,TabItem,} from 'vux'	
  export default{
      name: 'mainPage',
      components: {basic,XButton,Tab, TabItem,comment,guide},
			data() {
				return {
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
					imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],

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
	　　　　},
				init(){
//					console.log(label.filmRecruit.recruitRole)
				}
			}
  }
</script>


<style scoped lang="less">
	@import url("../../assets/css/style.css");
</style>
