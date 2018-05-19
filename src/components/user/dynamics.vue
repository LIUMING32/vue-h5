<template>
	<!--动态开始-->
	<div>
		<ul v-if="data.dynamic.length>0">
			<li v-for="item in data.dynamic">
				<div class="div-model m0" >
					<span class="dis-block mt102"><b class="fb f50">{{item.date}}</b>{{item.month}}月</span>
					<div class="m152">
					    <div class='con' :class="fold ? 'fold' : 'unfold'"> {{content }}</div>
					    <span @click='handleFold' v-show="fold" class="cblue">全文</span>
					    <span @click='handleFold' v-show="!fold" class="grays">收起</span> 
					</div>
					<imgList :data="item.imglist"></imgList>
					<div class="over-flow mb20"><span class="grays" >{{item.address}}</span></div>					
					
				</div>
				<div class="bdt1 bsb1 dymic-bt"><img class="w15 h15 vm mr5" :src="like"/><span class="vm mr30">67</span><img class="w15 h15 vm mr5" :src="comments"/><span  class="vm">56</span> </div>
			</li>
		</ul>	
		<div v-else>
			<nulls class="tc">
				<span name="nullpro" class="Clearfix m152 mauto grays">小主比较懒哦，还没有发布动态呢~</span>					
			</nulls> 
		</div> 
	</div>
	<!--动态结束-->
</template>

<script>
import imgList from '../common/imgList.vue'	
import nulls from '../../components/common/null.vue'
export default {
	props:{
		data:{
			type:Object
		},
	},
	components:{imgList,nulls},
	data(){
		return{
			deletes:'删除',
		    content: "",
		    fold : true,
		    like:require('../../assets/img/common/like.png'),
		    comments:require('../../assets/img/common/comment.png'),

		}
	},
	computed:{
		
	},
	methods:{
	    handleFold() {
	      this.fold = !this.fold;
	    },
	    getData() {
	      setTimeout(() => {
	        this.content =
	          "乐视员工获刑4年 11月6日消息，今天下午，海淀法院官网发布案件快报，乐视云计算公司员工闫某，为倒卖流量牟取私利，在职期间受上家吴某的委托在公司的207台服务器上种植木马程序。";
	      }, 0);
	    }  	
    	
	},
	mounted(){
		this.getData()
	},		
}
</script>
<style >
 .con {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.con.fold {
  -webkit-line-clamp: 2;
}

.con.unfold {
  -webkit-line-clamp: 100;
}
</style>
