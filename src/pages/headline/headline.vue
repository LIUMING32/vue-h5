<template>
	<div class="main">
		<div class="div-model">
			<h4 class="tl m152 f100">{{headline.title}}</h4>
			<div class="grays f40 over-flow"><span class="fl dis-block ">{{headline.resource}} </span> <span class="fr dis-block">{{headline.date}}</span></div>
			<div class="con m152 "><p>这两天杨洋又上了热搜，不是因为即将播出的《武动乾坤》，更不是因为《全职高手》和书粉之间的风波，而是因为他在机场一个简简单单却又很闪光的举动，当时他赶路过程中看见地上有个空瓶子后立刻弯腰想捡起来，于是一边的工作人员眼明手快替他把瓶子拾了</p></div>
			<comment></comment>
		</div>
		<guide v-if="guide"></guide>
	</div>
</template>
<script>
import comment from '../../components/comment/comment.vue'
import guide from '../../components/user/guide.vue'	
export default {
  name: 'headline',
  components: {comment,guide},
  data(){
  	return{
  		headline:{title:'杨洋又在机场捡垃圾了，尽管他演技被嘲但修养真没得挑',resource:'海星头条',date:'2018-05-14'},
  		guide:true,
  	}
  },
  
}
</script>

<style scoped>
@import url("../../assets/css/style.css");
</style>