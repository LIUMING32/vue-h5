<template>
	<!--引导打开或者下载app开始-->
	<div class="guide">
		<span class="ml15 fl"> icon /海星 </span>
		<a href="javascript:;" class="inlineblock fr" id="opens"  @click="openapp"><button class="default-btn black-btn ">打开app</button></a>
	</div>
	<!--引导打开或者下载app结束-->		
</template>

<script>
//import {openApp} from '@/utils/openapp'
export default {
	props:{
			
	},
	data(){
		return{
			open:true,
			download:''
		}
	},
	mounted(){

	},
	methods:{
		openapp(){
			this.$emit('openapp');
		}
	}
}
</script>

<style >

</style>
