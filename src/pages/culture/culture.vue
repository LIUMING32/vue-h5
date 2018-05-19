<template>
  <div class="main div-card">
  	<div :style="backgroundDiv" class="background-img">
  		<span class="white f32 fb">{{listArr.companyName}}</span>
  		<button class="">&nbsp;+&nbsp;关注</button>
  	</div>
  	<div class="div-model" >
  		<p class="p5">
	  		<span class="dis-block grays">{{label.culture.services}}</span>
	  		<span class="dis-block fb f30" >
	  			<b v-for="(item,index) in listArr.serviceRanges">
	  				<em>{{item}}</em>
	  				<em v-if="index != listArr.serviceRanges.length - 1">&nbsp;&nbsp;/&nbsp;&nbsp;</em>
	  			</b>
	  		</span>
	  		<span class="dis-block grays mt10">{{label.culture.address}}</span>
	  	  <span class="dis-block fb f30 pb10">{{listArr.addr}}</span>
  	  </p>
  	</div> 
  	<div class="mt5">
  		  <div class="pubTab">
			    <tab :line-width="2"  v-model="index"  active-color="#000" default-color="#999">
			      <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item" :key="item">{{item}}</tab-item>
			    </tab>  		
		  	</div>
		  	{{tag}}
		  	{{index}}
		  	 <!--1 文化产业 2 文创孵化 3 影视培训 4 海外市场 5 影视机构-->
		    <div v-if="index === 0">
		    	<!--return-->
		    	<!--招商空间开始-->
		    	<div class="div-model">
			    	<ul class="mt20">
			    		<li v-for="item in clist" class="box-shadows ofa">
			    			<div class="bsb3 "><h4 class="m24">{{item.title}} <a href="./cultureDetail.html"><span class="arro"></span></a></h4></div>
			    			<div class="p102" style="position: relative;">
				    			<span class="fb Clearfix f32 mt10" v-if = "item.moduleType == 1 || item.moduleType == 2">{{label.culture.investment}}&nbsp;&nbsp;：</span><!--招商空间  文化产业与文创同-->
				    			<span class="fb Clearfix f32 mt10" v-if = "item.moduleType == 5">{{label.orgnize.businessIntro}}&nbsp;&nbsp;：</span><!--业务介绍 影视机构-->
				    			<span class="fb Clearfix f32 mt10" v-if = "item.moduleType == 3">{{label.tvTraining.tvTraining}}&nbsp;&nbsp;：</span><!--课程介绍 影视培训-->
				    			<span class="fb Clearfix f32 mt10" v-if = "item.moduleType == 4">{{label.overseas.servicesIntro}}&nbsp;&nbsp;：</span><!--服务介绍 海外市场-->
				    			<p class="grays p52">{{item.content}}</p>
				    			<img :src="item.coverUrl" alt="" class="w bdr5 h170"/>
				    			<a href=""><button class="abs-right2 yellow-btn" v-if="item.moduleType == 1 || item.moduleType == 2 || item.moduleType == 4 || item.moduleType == 5 ">{{label.culture.partnering}}</button><!--快速合作 文化产业、文创孵化、海外市场、影视机构--></a> 
				    			<a href=""><button class="abs-right2 yellow-btn" v-if = "item.moduleType == 3 ">{{label.tvTraining.quickRegist}}</button>	<!--快速报名 影视培训--></a> 
			    			</div>
			    		</li>
			    	</ul>	
		    	</div>
		    	<!--招商空间结束-->	
		    </div>
		    <div v-if="index === 1">
		    	<!--新闻动态开始-->
		    	<div >
			    	<dynamics :data="userInfo"></dynamics>
		    	</div>
		    	<!--新闻动态结束-->
		    </div>
		    <div v-if="index === 2">
		    	<!--详情介绍开始-->
		    	<!--文化产业、文创孵化-->
		    	<div class="culture" v-if="moduleType == 1 || moduleType == 2">
						<!--文化产业详情介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl bsb2 m242">{{label.culture.detailsIntro}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--文化产业详情介绍结束-->				 
						<!--扶持政策开始-->
						<div class="div-model "> 
				     	<h4 class="tl bsb2 m242">{{label.culture.supportPolicy}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<!--<swipers :data="imgs"></swipers>-->
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--扶持政策结束-->	
						<!--配套服务开始-->
						<div class="div-model "> 
				     	<h4 class="tl bsb2 m242">{{label.culture.supportService}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--配套服务结束-->	
						<!--入驻企业开始-->
						<div class="div-model "> 
				     	<h4 class="tl bsb2 m242">{{label.culture.tenants}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--入驻企业结束-->	
		    	</div>
		    	<!--影视培训-->
		    	<div class="train" v-if="moduleType == 3">
						<!--影视培训详情介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl bsb2 m242">{{label.culture.detailsIntro}}</h4>
				     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--影视培训详情介绍结束-->				 
						<!--师资团队开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.tvTraining.teachTeam}}</h4>
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--师资团队结束-->	
						<!--教学环境开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.tvTraining.teachEnv}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--教学环境结束-->	
						<!--奖项荣誉开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.tvTraining.award}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
				     
						</div>
						<!--奖项荣誉结束-->	
						<!--学员风采开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.tvTraining.students}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--学员风采结束-->
						<!--就业推荐开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.tvTraining.employment}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
						</div>
						<!--就业推荐结束-->							
		    	</div>	
		    	<!--海外市场-->
		    	<div class="overseas" v-if="moduleType == 4">
						<!--海外市场详情介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl bsb2 m242">{{label.culture.detailsIntro}}</h4>
				     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--海外市场详情介绍结束-->				 
						<!--服务优势开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.overseas.serviceAdv}}</h4>
				     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--服务优势结束-->	
						<!--成功案例开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.overseas.successCase}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
						</div>
						<!--成功案例结束-->	
						<!--服务流程开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.overseas.serviceProgress}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
						</div>
						<!--服务流程结束-->		
		    	</div>	
		    	<!--影视机构-->
		    	<div class="orgnize" v-if="moduleType == 5">
						<!--文化产业详情介绍开始-->
						<div class="div-model"> 
				     	<h4 class="tl bsb2 m242">{{label.culture.detailsIntro}}</h4>
				     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
				     	<swiper :data="imgs"></swiper>
						</div>
						<!--文化产业详情介绍结束-->				 
						<!--影视作品开始-->
						<div class="div-model " > 
				     	<h4 class="tl bsb2 m242">{{label.orgnize.tvWorks}}</h4>
				     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
				     	<swiper :data="imgs2"></swiper>
						</div>
						<!--影视作品结束-->	
		    	</div>			    	
		    	<!--详情介绍结束-->
		    </div>
  	</div>
    <guide v-if="guide"></guide>
  </div>
</template>

<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	import guide from '../../components/user/guide.vue'
	import dynamics from '../../components/user/dynamics.vue'		
	import swiper from '../../components/swiper/swiper.vue'		
	import label from '../../../static/json/label.json'
	import culture from '../../../static/json/culture.json'
	import {XButton,Tab,TabItem} from 'vux'	
	import {getcompanyList,getinvestmentList} from '@/api/api'
	import {isNull} from '@/utils/validate'
	
//	const list = () => ['招商空间', '新闻动态', '详情介绍']

  export default {
  	name: 'culture',
    components: {Tab, TabItem,guide,dynamics,swiper},
    data () {
      return {
        tag: '',
        taglist:'',
        listArr:'',
        clist:{},  
        moduleType:'',   
        index:0,
        isNest:true,
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
					dynamic:[{date:'08',month:'12',des:'2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。2005年毕业于上海戏剧学院表演系，同年在仙侠剧《仙剑奇侠传》中塑造了“李逍遥”一角，并演唱该剧插曲《六月的雨》《逍遥叹》 。',address:'北京',imglist:[{img:require('../../assets/img/head.jpg')},{img:require('../../assets/img/head.jpg')}],}],
					len:{zero:false,one:false,two:false,three:true}
				},
				label:label,
				guide:false,
				imgs:[{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'}],
        imgs2:[{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'}],
        backgroundDiv: {
          backgroundImage: 'url(' + require('../../assets/img/cultrue/head.png') + ')',
        },
        cultrues:[{ proName:'鄂尔多斯（文化产业园）企业家文化中心建设项目', investment:'招商内容',partnering:'快速合作',con:'鄂尔多斯文化产业园企业家文化中心位于文化产业园B地块，企业家文化中心建设项目占地约59.8公顷，建筑面积约59.8万平米' }], 
      }
    },
    mounted(){
			this.init()
//			this.getCompanyLists()
//			this.getInvestmentLists()
    },
    methods:{
    	list(id){
				switch (id){
					case 1:
					  this.tag = '详情介绍'
						this.taglist =  ['招商空间', '新闻动态', '详情介绍']
						console.log('文化产业')
						break;
					case 2:
						console.log('文创孵化')
						this.tag = '招商空间'
						this.taglist =  ['招商空间', '新闻动态', '详情介绍']
						break;
					case 3:
						console.log('影视培训')
						this.tag = '培训课程'
						this.taglist =  ['培训课程', '新闻动态', '详情介绍']
						break;
					case 4:
					  this.tag = '海外服务'
						console.log('海外市场')
						this.taglist =  ['海外服务', '新闻动态', '详情介绍']
						break;
					case 5:
						this.tag = '招商空间'
						console.log('影视机构')
						this.taglist =  ['招商空间', '新闻动态', '详情介绍']
						break;
				}
			},
			init(){
    		this.moduleType = 1
    		this.list(this.moduleType)
			},
			getCompanyLists(){
				var params = {moduleType:5,nowPage:1,pageSize:3 }
	      getcompanyList(params).then(response => {
	      	var list = response.data.response
//	      	this.listArr = list[0]
	      	console.log(list)
	      })
			},
			getInvestmentLists(){
				var params = {companyId:'993819881231224832',nowPage:1,pageSize:3 }
	      getinvestmentList(params).then(response => {
	      	var list = response.data.response.list
	      	this.clist = list	      	
	      	console.log(list)
	      })
			}			
    }
  }
</script>
<style scoped>
	@import url("../../assets/css/style.css");
</style>