<template>
	<!--空图片开始-->
	<div >
    	<img  :src="nulls" alt="" class="Clearfix mauto"/>
    	<slot><span class="Clearfix m152 mauto grays">这里空空如也</span></slot>
    	<slot name="nullpro"> </slot>
	</div>
	<!--空图片结束-->
</template>
<script>
	export default {
		data(){
			return{
				nulls:require('../../assets/img/common/null.png'),			
			}
		},
		components: {},
		mounted(){
			
		},
		methods: {}
			
	}
</script>

<style scoped>
</style>