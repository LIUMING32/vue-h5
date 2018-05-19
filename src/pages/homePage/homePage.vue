<template>
  <div class="main">
  	<swiperCustom :data="banners" :video="isVideo"></swiperCustom>
		<div >
		<!--个人基本信息开始-->
		<div class="m102">
			<basic :data="userInfos" ></basic>
		</div>
		<!--个人基本信息结束-->
		<!--<a  @click="openapp">test</a>-->
		<!--<div v-for="(item,key) in guide">
			<div v-if="item == true">{{key}}</div>
			<div v-else class="fb">{{key}}</div>
		</div>-->
		<!--个人详细信息开始-->
		<div >
	    <div id="homeTab">
				<tab :line-width="2" custom-bar-width="0px" active-color="#000" default-color="#999" >
		      <tab-item selected @on-item-click="tabClick()">{{tab.datum}}</tab-item>
		      <tab-item @on-item-click="tabClick()">{{tab.dynamic}}</tab-item>
		    </tab>	 
	    </div>
	    <div v-if="index" class="div-card">
	    	<!--个人介绍开始-->
				<div class="div-model" > 
		     	<h4 class="tl fb"><b class="pr5 fb">|</b>{{label.title.introductions}}</h4>
		     	<div class="introduce-pub">
		     		<!--<ul class="mb20">
		     			<li><span >{{isAge}}</span><span class="bsbcyan w30 mauto">{{label.user.age}}</span></li>
		     			<li><span >{{iv.country | isNul('未填写')}}</span><span class="bsbred w30 mauto">{{label.user.nationality}}</span></li>
		     			<li><span >{{iv.nativePlace | isNul('未填写')}}</span><span class="bsbo w30 mauto">{{label.user.birthplace}}</span></li>
		     			<li><span >{{iv.nation | isNul('未填写')}}</span><span class="bsbpur w30 mauto">{{label.user.nation}}</span></li>
		     		</ul>-->
		     		<ul class="mb20 flex flex-pack-justify" >
		     			<li><span >{{isAge}}</span><span class="bsbcyan w30 mauto">{{label.user.age}}</span></li>
		     			<li><span >{{iv.country | isNul('未填写')}}</span><span class="bsbred w30 mauto">{{label.user.nationality}}</span></li>
		     			<li><span >{{iv.nativePlace | isNul('未填写')}}</span><span class="bsbo w30 mauto">{{label.user.birthplace}}</span></li>
		     			<li><span >{{iv.nation | isNul('未填写')}}</span><span class="bsbpur w30 mauto">{{label.user.nation}}</span></li>
		     		</ul>		     		
		     		<span class="Clearfix">{{label.user.school}}：{{iv.school | isNul('未填写')}}</span>
		     		<span class="Clearfix">{{label.user.telphone}}：{{iv.isPhone | isNul('未公开')}}</span>
		     	</div>
		     	<div class="introduce-dif">
     					<variable :toggle="toggle" :data="userInfo" :labelInfo="labelInfo"></variable>
		     	</div>
		     	<p class="m102 grays">{{isDetail}}</p>

				</div>
				<!--个人介绍结束-->
	    	<!--从业经历开始-->
				<div class="div-model "> 
					<h4 class="tl fb"><b class="pr5 fb">|</b>{{label.title.experience}}</h4>	
		     	<div v-if="isUndergoList" class="mb15">
				    <ul>
				    	<li  v-for="(item,index) in undergoList" class="ofa mb5"><div class="fl w10p"><div class="circle mauto"></div><div class="rectangle mauto mt2"></div></div><p class="fl w90p">{{item.detail}}</p></li>
				    </ul>
		     	</div>
		     	<div v-else class="p52 tc mb15">
		     		<nulls></nulls>
		     	</div>		     	
				</div>
				<!--从业经历结束-->
	    	<!--作品简历开始-->
				<div class="div-model "> 
					<h4 class="tl fb"><b class="pr5 fb">|</b>{{label.title.production}}</h4> 
		     	<div v-if="isOpu">
		     		<p class="mb15">{{opus}}</p>
		     	</div>
		     	<div v-else class="tc mb15">
		     		<nulls></nulls>
		     	</div>		     	
				</div>
				<!--作品简历结束-->	
	    	<!--获奖经历开始-->
				<div class="div-model"> 
					<h4 class="tl fb"><b class="pr5 fb">|</b>{{label.title.honor}}</h4>		
		     	<div v-if="isHonors">
		     		<p class="mb15">{{honor}}</p>
		     	</div>
		     	<div v-else class="tc mb15">
		     		<nulls></nulls>
		     	</div>		     	
		     	
				</div>
				<!--获奖经历结束-->				
				<!--自定义内容开始-->
				<div  v-if="isUserDefineds">
					<div class="div-model" v-for="item in userDefinedList" >
						<h4 class="tl fb"><b class="pr5 fb">|</b>{{label.item.custom}}</h4>	
						<p class="mb15">{{item.detail | isNul}}</p>	
					</div>
				</div>
				<div v-else="isUserDefineds" class="mb15">
					
				</div>				
				<!--自定义内容结束-->	
			</div>
			<!--动态开始-->	
			<div v-else class="div-card">
			　　<div class="bgw ofh mt20" >
						<dynamics :data="userInfo"></dynamics>
				</div>
			</div>
			<!--动态结束-->	
		</div>
		<!--个人详细信息结束-->	
		</div>
		
		<guide v-if="isGuide" @openapp="openapp"></guide>
  </div>
</template>
<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	import basic from '../../components/user/basicInfo.vue'	
	import dynamics from '../../components/user/dynamics.vue'		
	import variable from '../../components/user/variableInfo.vue'	
	import swiperCustom from '../../components/swiper/swiperCustom.vue'	
	import guide from '../../components/user/guide.vue'
	import nulls from '../../components/common/null.vue'	
	import label from '../../../static/json/label.json'
	import {XButton,Tab, TabItem,AlertModule} from 'vux'
	import {AppLink,Browser} from '@/utils/open'
	import {getInfo,getDynamicList} from '@/api/user'
	import {isNull} from '@/utils/validate'
	import {isNul} from '@/filters/index'
	import mixins from '../../mixins/index'
  export default{
      name: 'mainPage',
      components: {basic,variable,dynamics,XButton,Tab, TabItem,swiperCustom,guide,nulls},
      mixins:[mixins],
			data() {
				return {
					showMenus: false,
					guides:{},
					isGuide:false,
					img1:require('../../assets/img/img_home.jpg'),
					img2:require('../../assets/img/img_home2.jpg'),
					coverimg:require('../../assets/img/common/coverimg.png'),	
					toggle:{investor:false,artist:false,writer:false,director:true,broker:false,dispersion:false,advertise:false,filmPost:false,subdirector :false,art:false,videoEffects :false,other :false},
					banners:[],
					isVideo:true,
					userInfos:{},
					iv:{},
					undergoList:{},
					isUndergo:true,
					opus:{},
					isOpus:true,
					honor:{},
					isHonor:true,
					userDefinedList:{},
					isUserDefined:true,	
					label:label,
					userInfo:{
						avatar:require('../../assets/img/head.jpg'),
						name:'张海泉',
						sex:'男',
						city:'北京',
						realName:'实名',
						accredit:'授权',
						orgnize:'机构',
						age:'27',
						nationality:'中国',		
						birthplace:'北京',
						nation:'汉',	
						school:'北京电影学院',
						roles:'投资人',
						telphone:'13568948256',
						company:'海大星艺',
						position:'总经理',	
						type:'电影/电视剧',	
						theme:'喜剧',
						budget:'100万',
						height:'180',
						weight:'65kg',
						specialty:'跳舞',
						signCompany:'海大星艺',
						mobile:'15897458956',		
						years:'5',
						representative:'人民的名义',
						goodType:'历史',
						goodTheme:'悬疑',	
						resource:'资源优势',						
						skill:'特效',
						words:'2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。',
						experience:[
							{time:'2018',des:'2018年在古装战争电视剧《走向共和》中饰光绪皇帝。同年，与焦晃、左小青合作在电视剧《乾隆王朝》中饰演沈修儒。'},
							{time:'2017',des:'2017年在古装战争电视剧《走向共和》中饰光绪皇帝。同年，与焦晃、左小青合作在电视剧《乾隆王朝》中饰演沈修儒。'}
						],						
						production:[{val:'网络剧《将界2》- 女一'},{val:'网络大电影《艺高往事》- 女一'}],
						honor:[{val:'成都微电影“金沙奖”的最佳女主角（2019年）'},{val:'金熊猫电影节最佳学生女演员（提名）'}],
						dynamic:[{date:'05',month:'05',des:'的最佳女主角',imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],address:'北京'},{date:'05',month:'05',des:'的最佳女主角',imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],address:'北京'}],
						len:{zero:false,one:false,two:false,three:true}
					},
					labelInfo:{
						age:'年龄',
						nationality:'国籍',		
						birthplace:'籍贯',
						nation:'民族',
						school:'毕业院校',
						telphone:'联系电话',
						role:'角色身份',
						investor:{
							company:'公司',
							position:'职位',	
							type:'关注项目类型',
							theme:'关注项目题材',
							budget:'单笔投资预算'	
						},
						artist:{
							height:'身高',
							weight:'体重',
							specialty:'特长',
							signCompany:'签约公司',
							mobile:'手机号'
						},
						producer:{
							years:'从业年限',
							representative:'代表作品'
						},
						writer:{
							years:'从业年限',
							goodType:'擅长类型',
							goodTheme:'擅长题材',
							representative:'代表作品'
						},			
						dispersion:{
							company:'公司',
							position:'职位',
							resource:'资源优势'
						},	
						advertise:{
							company:'公司',
							position:'职位',
							years:'从业年限'
						},		
						filmPost:{
							years:'从业年限',
							skill:'擅长技能',
							representative:'代表作品'
						},							
						subdirector:{
							years:'从业年限'
						}
					},
					tab:{
						datum:'资料',
						dynamic:'动态'
					},
					index: true,
					
				}
			},
		  filters: {  
		  }, 
			computed:{
				isAge(){
					if(!isNull(this.userInfos.age) || this.userInfos.age>0){
						return this.userInfos.age = this.userInfos.age
					}else{
						return this.userInfos.age = '未填写'
					}
				},				
//				isCountry(){
//					if(!isNull(this.iv.country)){
//						return this.iv.country = this.iv.country
//					}else{
//						return this.iv.country = '未填写'
//					}
//				},
//				isNativePlace(){
//					if(!isNull(this.iv.nativePlace)){
//						return this.iv.nativePlace = this.iv.nativePlace
//					}else{
//						return this.iv.nativePlace = '未填写'
//					}
//				},
//				isNation(){
//					if(!isNull(this.iv.nation)){
//						return this.iv.nation = this.iv.nation
//					}else{
//						return this.iv.nation = '未填写'
//					}
//				},
//				isSchool(){
//					if(!isNull(this.iv.school)){
//						return this.iv.school = this.iv.school
//					}else{
//						return this.iv.school = '未填写'
//					}
//				},
				isPhone(){
					if(!isNull(this.iv.phone)){
						return this.iv.phone = this.iv.phone
					}else{
						return this.iv.phone = '未公开'
					}
				},			
				isDetail(){
					if(!isNull(this.iv.detail)){
						return this.iv.detail = this.iv.detail
					}else{
						return this.iv.detail = '小主比较懒哦~还没有介绍自己呢~'
					}
				},	
				isUndergoList(){
					if(!isNull(this.undergoList)){
						return this.isUndergo = true;
					}else{
						return this.isUndergo = false;
					}			
				},
				isOpu(){
					if(!isNull(this.opus)){
						return this.isOpus = true;
					}else{
						return this.isOpus = false;
					}
				},
				isHonors(){
					if(!isNull(this.honor)){
						return this.isHonor = true;
					}else{
						return this.isHonor = false;
					}
				},
				isUserDefineds(){
					if(!isNull(this.userDefinedList)){
						return this.isUserDefined = true;
					}else{
						return this.isUserDefined = false;
					}
				}				
			},		  
			methods:{
				init(){
					console.log()
				},
				tabClick () {
	　　　　　　this.index = !this.index
	　　　　},
				openapp(){
					this.open()
				},
				getInfos(){
//				console.log(this.$jsbridge)
					var params = {otherUserId:'996684485141463040'}
		      getInfo(params).then(response => {
						if(response.data.code = 200){
							var res = response.data.response;
							console.log(res)
			      	this.userInfos = res.userInfo
			      	this.iv = res.iv
			      	this.undergoList = res.undergoList
			      	this.opus = res.opus
			      	this.honor = res.honor	
			      	this.userDefinedList = res.userDefinedList
			      	var coverUrl = res.coverUrl
			      	var video = res.video
							var cover = new Array()
			      	if(!isNull(coverUrl)){
			      		cover[0] = coverUrl
			      	}else{
			      		cover[0] = this.coverimg
			      	}
			      	if(!isNull(video)){
			      		cover[1] = video.vcoverUrl
			      		this.isVideo = true
			      	}else{
			      		this.isVideo = false
			      	}
			      	this.banners = cover
						}else{
							AlertModule.show({
							  content:response.data.message
							})		
						}
		      })					
				},
				getDynamicLists(){
					var params = {objId:'996684485141463040',nowPage:'1',pageSize:'5',source:'8'}
		      getDynamicList(params).then(response => {
		      	console.log(response)
						if(response.data.code = 200){
							
						}else{
							
						}
							
		      })						
					
				},
		    test(){
		    	this.$jsbridge.JsBridge.callHandler('test1', {'params': ''}, (data) => {
		    		document.getElementById("show").innerHTML = "send get responseData from java, data = " + data;
					})
		    },
		    test2(){
		    	this.$jsbridge.JsBridge.registerHandler('test2',(data) => {
		    		document.getElementById("show").innerHTML = "send get responseData from java, data = " + data;
					})
		    },				
			},
		  mounted() {
		  	//初始化获取个人信息
//				this.getInfos()
//				this.getDynamicLists()
//				this.init()
				var guides = Browser.getBrowser()
				this.guides = guides
				if('isIOS' in guides || 'isAndroid' in guides){
					this.isGuide = true
				}else{
					this.isGuide = false
				}
		  }			
  }
</script>


<style >
	@import url("../../assets/css/style.css");

</style>
