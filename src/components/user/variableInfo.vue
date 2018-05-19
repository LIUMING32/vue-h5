<template>
	<div  >
	    <div  v-show="toggle.investor">
 			<span class="Clearfix">{{labelInfo.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span> 
     		<span class="Clearfix">{{labelInfo.type}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.type}}</span>
 			<span class="Clearfix">{{labelInfo.theme}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.theme}}</span>
     		<span class="Clearfix">{{labelInfo.budget}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.budget}}</span>		
		</div>
		<div  v-show="toggle.artist">
			<span class="Clearfix">{{labelInfo.artist.height}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.height}}</span>
 			<span class="Clearfix">{{labelInfo.artist.weight}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.weight}}</span>
 			<span class="Clearfix">{{labelInfo.artist.specialty}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.specialty}}</span> 
     		<span class="Clearfix">{{labelInfo.artist.signCompany}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.signCompany}}</span>
 			<span class="Clearfix">{{labelInfo.artist.mobile}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.mobile}}</span>
		</div>
		<div  v-show="toggle.producer">
			<span class="Clearfix">{{labelInfo.producer.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>
 			<span class="Clearfix">{{labelInfo.producer.representative}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.representative}}</span>
		</div>
		<div  v-show="toggle.writer">
			<span class="Clearfix">{{labelInfo.writer.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>
 			<span class="Clearfix">{{labelInfo.writer.goodType}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.writer.goodTheme}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.goodTheme}}</span> 
     		<span class="Clearfix">{{labelInfo.writer.representative}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.representative}}</span>
		</div>
		<div  v-show="toggle.director">
			<span class="Clearfix">{{labelInfo.writer.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>
 			<span class="Clearfix">{{labelInfo.writer.goodType}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.writer.goodTheme}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.goodTheme}}</span> 
     		<span class="Clearfix">{{labelInfo.writer.representative}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.representative}}</span>	
		</div>
		<div  v-show="toggle.broker">
			
 			<span class="Clearfix">{{labelInfo.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span> 
     		<span class="Clearfix">{{labelInfo.type}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.type}}</span>
 			<span class="Clearfix">{{labelInfo.theme}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.theme}}</span>
     		<span class="Clearfix">{{labelInfo.budget}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.budget}}</span>		
		</div>
		<div  v-show="toggle.dispersion">
			<span class="Clearfix">{{labelInfo.dispersion.company}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.company}}</span>
 			<span class="Clearfix">{{labelInfo.dispersion.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span>
 			<span class="Clearfix">{{labelInfo.dispersion.resource}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.resource}}</span> 
		</div>
		<div  v-show="toggle.advertise">
			<span class="Clearfix">{{labelInfo.advertise.company}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.company}}</span>
 			<span class="Clearfix">{{labelInfo.advertise.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span>
 			<span class="Clearfix">{{labelInfo.advertise.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span> 
		</div>
		<div  v-show="toggle.filmPost">
			<span class="Clearfix">{{labelInfo.filmPost.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.filmPost.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.filmPost.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span> 
		</div>
		<div  v-show="toggle.subdirector">
			<span class="Clearfix">{{labelInfo.subdirector.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>
		</div>	
		<div  v-show="toggle.art">
			<span class="Clearfix">{{labelInfo.subdirector.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>
		</div>		
		<div  v-show="toggle.videoEffects">
			<span class="Clearfix">{{labelInfo.filmPost.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.filmPost.role}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.role}}</span>
 			<span class="Clearfix">{{labelInfo.filmPost.position}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.position}}</span> 	
		</div>	
		<div  v-show="toggle.other">
			<span class="Clearfix">{{labelInfo.subdirector.years}}&nbsp;&nbsp;:&nbsp;&nbsp;{{data.years}}</span>	
		</div>			
	</div>
</template>

<script>
export default {
	props:{
		toggle:{
			type:Object
		},
		data:{
			type:Object
		},
		labelInfo:{
			type:Object
		},
		test:{
			type:String
		}		
	},
	data(){
		return{
			
		}
	},
	mounted(){
		this.init()
	},
	methods:{
		init(){

		}
	}
}
</script>

<style lang="less">

</style>
