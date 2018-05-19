<template>
	<!--个人基本信息开始-->
	<div class="userinfo p102" >
		<a href="#"><img class="img1 w80" :src="isimg"/></a>
		<span class="f40 m105"><b>{{isnickName}}</b></span>
		<span class="mr10"><img  class="w10" v-if="data.sex ==1" :src="man"/><img class="w10" v-else="data.sex ==2" :src="woman"/>/<span>{{iscity}}</span></span>
		<span class="mr5"><img class="w15" v-if="data.personalAuth ==0" :src="personalAuthd"/><img class="w15" v-else="data.personalAuth ==1" :src="personalAuth"/></span>
		<span class="mr5"><img class="w15" v-if="data.personalOrganAuth ==0" :src="personalOrganAuthd"/><img class="w15" v-else="data.personalOrganAuth ==1" :src="personalOrganAuth"/></span>
		<span ><img class="w15" v-if="data.companyAuth ==0" :src="companyAuthd"/><img class="w15"  v-else="data.companyAuth ==1" :src="companyAuth"/></span>		
	</div>
	<!--个人基本信息结束-->		
</template>

<script>
import {isNull} from '@/utils/validate'
export default {
	props:{
		data:{
			type:Object
		}, 
	},
	data(){
		return{
			img:'',
			img1:require('../../assets/img/head.jpg'),
			man:require('../../assets/img/user/man.png'),
			woman:require('../../assets/img/user/woman.png'),
			personalAuth:require('../../assets/img/user/real.png'),
			personalAuthd:require('../../assets/img/user/realed.png'),
			personalOrganAuth:require('../../assets/img/user/accredite.png'),
			personalOrganAuthd:require('../../assets/img/user/accredited.png'),
			companyAuth:require('../../assets/img/user/enterprise.png'),
			companyAuthd:require('../../assets/img/user/enterprised.png'),
			city:'未填写',
			nickName:'未填写'
			
		}
	},
	mounted(){
	  this.$nextTick(function () {
		this.init()
	  })		

	},
	computed:{
		isimg(){
			if(!isNull(this.data.headUrl)){
				return this.img = this.data.headUrl
			}else{
				return this.img = this.img1
			}
		},
		iscity(){
			if(!isNull(this.data.city)){
				return this.city = this.data.city
			}else{
				return this.city = this.city
			}
		},	
		isnickName(){
			if(!isNull(this.data.nickName)){
				return this.nickName = this.data.nickName
			}else{
				return this.nickName = this.nickName
			}
		},		
	},
	methods:{
		init(){
		}
	}
}
</script>

<style >

</style>
