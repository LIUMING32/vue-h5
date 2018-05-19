<template>
	<!--动态开始-->
	<div>
		<ul >
			<li v-for="item in data.dynamic">
				<span class="dis-block">{{item.date}}</span>
				<span class="dis-block ">{{item.des}}</span>
				<ul class="over-flow">
					<li v-show="data.len.zero" ><video src="http://hdxy-test.oss-cn-beijing.aliyuncs.com/123.mp4" class="width-hundred"></video></li>
					<li v-show="data.len.one" ><img :src="item.imglist.img" alt="" class="dis-block width-hundred"  /></li>
				</ul >
				<ul v-show="data.len.two" class="over-flow">
					<li v-for="i in item.imglist" class="width-half"><img :src="i.img" alt="" class="width-hundred"/></li>
				</ul>
				<ul v-show="data.len.three" class="over-flow">
					<li v-for="i in item.imglist" class="width-thirty"><img :src="i.img" alt="" class="w"/></li>
				</ul>
				<div class="over-flow"><span class="fl grays" >{{item.address}}</span><button  class="fr default-btn defaults" >评论</button><button  class="fr default-btn defaults" style="margin-right: 8px;">点赞</button></div>
		
			</li>
		</ul>	
	</div>
	<!--动态结束-->		
</template>

<script>
export default {
	props:{
		data:{
			type:Object
		},
	},
	data(){
		return{
			comment:'评论',
			comment:'评论',
		}
	},
	methods:{

	}
}
</script>

<style >

</style>
