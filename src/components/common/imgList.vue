<template>
	<!--图片不规则排列开始-->
	<div class="m102">
		<ul class="ofh" v-if="lens.oneList" >
			<li v-for="i in data"><img :src="i.img" alt="" class="dis-block w"  /></li>
		</ul >
		<ul v-if="lens.twoList" class="ofh" style="width:67%;">
			<li v-for="i in data" class="width-half"><img :src="i.img" alt="" class="w"/></li>
		</ul>
		<ul v-if="lens.thList">
			<li v-for="i in data" class="width-thirty"><img :src="i.img" alt="" class="w"/></li>
		</ul>		
	</div >
	<!--图片不规则排列结束-->
</template>
<script>
	export default {
		props:{
			data:{
				type:Array
			}
		},
		data(){
			return{
				len:'',
				oneList:false,
				twoList:false,
				thList:false,				
			}
		},
		computed: {
			lens(){
				this.len = this.data.length
				if(this.len == 1){
					this.oneList = true
					
				}else if(this.len == 2 || this.len == 4){
					this.twoList = true
				}else{
					this.thList = true
				}
				
				return {oneList:this.oneList,twoList:this.twoList,thList:this.thList,}
			}			
		},
		mounted(){

		},
		methods: {}
			
	}
</script>

<style scoped>
</style>