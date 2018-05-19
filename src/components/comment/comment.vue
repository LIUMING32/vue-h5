<template>
	<!--评论开始-->
	<div id="comment">
		<p v-if="comments.length==0">暂无评论，我来发表第一篇评论！</p>
		<ul v-else="comments.length>0" >
			<li v-for="(item,index) in comments" v-bind:index="index">
				<a href="#" class="fl" style="width:20%;"><img :src="item.img" alt="" class="img1 w50"/></a>
				<div class="fl" style="width: 80%;">
					<span>{{item.name}}</span>
					<span>{{item.sex}}</span>
					<span>{{item.city}}</span>
					<p class="bgf6 ">{{item.content}}</p>
					<div class="mt10"><span class="grays" >{{item.time}}</span><button  class="default-btn defaults fr" @click="changeCommenter(reply.responder,index)">回复</button></div>
					<div v-show="isShow">
	                    <div class="reply"  v-for="(reply) in item.reply" >
	                        <b>{{reply.responder}}&nbsp;&nbsp;:&nbsp;&nbsp;{{reply.content}}</b>
	                    </div>
	                    <button  class="default-btn gray" @click="showToggle">查看全部</button>
	               </div>
	               <div v-show="!isShow">
	                    <div class="reply"  v-for="(reply) in item.reply" >
	                        <b>{{reply.responder}}&nbsp;&nbsp;:&nbsp;&nbsp;{{reply.content}}</b>
	                    </div>	
						<span >没有更多</span>	               	
	               </div>
	               
				</div> 
			</li>
		</ul>
	</div>
	<!--评论结束-->
</template>
<script>
	export default {
		data(){
			return{
				commenter: "session",
				type: 0,
				oldComment: null,
				chosedIndex: -1,
				comments: [{
					img:require('../../assets/img/head.jpg'),
					time: "2016-07-12",
					content: "dddddddd",
					name:'豆豆',
					sex:'男',
					city:'北京',
					reply:[{responder:'ffffff',reviewers:'ddddd',time:'2018-05-10',content:'dddddddddddd'},{responder:'ffffff',reviewers:'ddddd',time:'2018-05-10',content:'dddddddddddd'},{responder:'ffffff',reviewers:'ddddd',time:'2018-05-10',content:'dddddddddddd'},{responder:'ffffff',reviewers:'ddddd',time:'2018-05-10',content:'dddddddddddd'}]
				}],
				all:'',
				comment: [],
	            btnText:"查看全部",
	            isShow:true				
			}
		},
		components: {},
		mounted(){
			this.init()
		},
		methods: {
			addComment(data) {
				//添加评论
				//          if(this.type == 0) {
				//              this.comment.push({
				//                  name: 'session',
				//                  time: getTime(),
				//                  content: data,
				//                  reply: []
				//              });
				//              //服务器端
				//          }else if(this.type == 1){
				//              this.comment[this.chosedIndex].reply.push({
				//                  responder: 'session',
				//                  reviewers:this.comment[this.chosedIndex].name,
				//                  time: getTime(),
				//                  content: data
				//              });
				//              this.type = 0;
				//          }
			},

			changCommmer(name, index) {
			//监听到了点击了别人的评论
		          this.oldComment = name;
		          this.chosedIndex = index;
		          this.type = 1;
			},

			canelCommit() {
				//监听到了取消评论
				this.type = 0;
			},
//			index < 3  或者 all为 true 显示全部  查看全部回复消失   收起按钮消失  btn false
//			>3 显示3条 查看全部回复显示      点击全部显示全部 并且收起按钮显示
			
			
			init(){
//				console.log(this.comments[0].reply.length)
				if(this.comments[0].reply.length > 3){
					this.isShow = true
				}else{
					this.isShow = false
				}
			},
			getAll(){
				this.all=!all
			},
            showToggle(){
                this.isShow = !this.isShow
            }			
		}
	}
</script>

<style scoped>
</style>