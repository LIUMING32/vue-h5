<template>
  <div class="main div-card">
  	<div :style="backgroundDiv" class="background-img">
  		<span class="white f32 fb">{{listArr.companyName}}</span>
  	</div>
  	<div class="div-model">
  		<p class="p5" v-if="moduleType == 1 || moduleType == 2">
	  		<span class="dis-block grays mt10">{{label.culture.need}}</span>
	  	  <span class="dis-block fb f30 pb10">{{requirement}}</span>
  	  </p>
  	</div> 
  	<div class="mt5">
  	  <!--1 文化产业 2 文创孵化 3 影视培训 4 海外市场 5 影视机构-->
    	<!--详情介绍开始-->
    	<!--文化产业、文创孵化-->
    	<div class="culture" v-if="moduleType == 1 || moduleType == 2">
				<!--文化产业详情介绍开始-->
				<div class="div-model"> 
		     	<h4 class="tl bsb2 m242">{{label.culture.investment}}</h4>
		     	<!--<div v-if="isImg==true && isContent==true">
			     	<p class="bst1 ">{{content}}</p>
			     	<imgList :data="imgs2"></imgList>
		     	</div>
		     	<div v-else-if="isImg==true">
			     	<imgList :data="imgs2"></imgList>
		     	</div>	
		     	<div v-else-if="isContent==true">
			     	<p class="bst1">{{content}}</p>
		     	</div>		     	
		     	<div v-else class="tc bst1 p20">
		     		<nulls ></nulls>
		     	</div>-->
		     	<imgList :data="imgs2"></imgList>
				</div>
				<!--文化产业详情介绍结束-->				 
				<!--扶持政策开始-->
				<div class="div-model "> 
		     	<h4 class="tl bsb2 m242">{{label.culture.supportPolicy}}</h4>
		     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
		     	<!--<swipers :data="imgs"></swipers>-->
		     	<!--<swiper :data="imgs2"></swiper>-->
				</div>
				<!--扶持政策结束-->	
				<!--配套服务开始-->
				<div class="div-model "> 
		     	<h4 class="tl bsb2 m242">{{label.culture.supportService}}</h4>
		     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
		     	<!--<swiper :data="imgs"></swiper>-->
				</div>
				<!--配套服务结束-->	
				<!--入驻企业开始-->
				<div class="div-model "> 
		     	<h4 class="tl bsb2 m242">{{label.culture.tenants}}</h4>
		     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
		     	<!--<swiper :data="imgs"></swiper>-->
				</div>
				<!--入驻企业结束-->	
    	</div>
    	<!--影视培训-->
    	<div class="train" v-if="moduleType == 3">
				<!--影视培训详情介绍开始-->
				<div class="div-model"> 
		     	<h4 class="tl bsb2 m242">{{label.culture.detailsIntro}}</h4>
		     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
		     	<!--<swiper :data="imgs"></swiper>-->
				</div>
				<!--影视培训详情介绍结束-->				 
				<!--师资团队开始-->
				<div class="div-model " > 
		     	<h4 class="tl bsb2 m242">{{label.tvTraining.teachTeam}}</h4>
		     	<!--<swiper :data="imgs2"></swiper>-->
				</div>
				<!--师资团队结束-->	
				<!--教学环境开始-->
				<div class="div-model " > 
		     	<h4 class="tl bsb2 m242">{{label.tvTraining.teachEnv}}</h4>
		     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
		     	<!--<swiper :data="imgs2"></swiper>-->
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
		     	<!--<swiper :data="imgs2"></swiper>-->
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
		     	<!--<swiper :data="imgs"></swiper>-->
				</div>
				<!--海外市场详情介绍结束-->				 
				<!--服务优势开始-->
				<div class="div-model " > 
		     	<h4 class="tl bsb2 m242">{{label.overseas.serviceAdv}}</h4>
		     	<p class="bst1 ">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p>
		     	<!--<swiper :data="imgs2"></swiper>-->
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
		     	<!--<swiper :data="imgs"></swiper>-->
				</div>
				<!--文化产业详情介绍结束-->				 
				<!--影视作品开始-->
				<div class="div-model " > 
		     	<h4 class="tl bsb2 m242">{{label.orgnize.tvWorks}}</h4>
		     	<p class="bst1 pt18">鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目鄂尔多斯（文化产业园）企业家文化中心建设项目</p> 
		     	<!--<swiper :data="imgs2"></swiper>-->
				</div>
				<!--影视作品结束-->	
    	</div>			    	
    	<!--详情介绍结束-->		  	 
		   
  	</div>
    <guide v-if="guide"></guide>
  </div>
</template>

<script>
	import Swiper from '../../../static/js/swiper/js/swiper.min.js'
	import guide from '../../components/user/guide.vue'
	import swiper from '../../components/swiper/swiper.vue'	
	import nulls from '../../components/common/null.vue'
	import imgList from '../../components/common/imgList.vue'	
	import label from '../../../static/json/label.json'
	import {getcompanyList,getinvestmentList} from '@/api/api'
	import {isNull} from '@/utils/validate'
  export default {
  	name: 'culture',
    components: {guide,swiper,nulls,imgList},
    data () {
      return {
        listArr:'',
        clist:{}, 
        requirement:'未填写',
        content:'',
        isContent:true,
        isImg:'',
        moduleType:1,   
				label:label,
				guide:false,
				imgs:{},
        imgs2:[{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'},{img:'http://hdxy-test.oss-cn-beijing.aliyuncs.com/oux.jpg'}],
        backgroundDiv: {
          backgroundImage: 'url(' + require('../../assets/img/cultrue/head.png') + ')',
        } 
      }
    },
    mounted(){

			this.getCompanyLists()
			this.getInvestmentLists()
    },
    methods:{
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

					if(!isNull(list.requirement)){
						return this.requirement = list.requirement;
					} 
					if(!isNull(list.content)){
						return this.isContent = true;
					}else{
						return this.isContent = false;
					}			
					if(!isNull(list.contentUrls)){
						return this.isImg = true;
					}else{
						return this.isImg = false;
					}		
	      	this.content = list.content
	      	this.imgs = list.contentUrls					
	      	console.log(list) 
	      })
			}			
    }
  }
</script>
<style scoped>
	@import url("../../assets/css/style.css");
</style>