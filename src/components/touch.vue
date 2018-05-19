<template>
  <div class="hello">
		<div id="app" class="box" 
			v-tap="{fn:vuetap,name:'点击'}" 
			v-longtap="{fn:vuetap,name:'长按'}" 
			v-swipeleft="{fn:vuetap,name:'左滑'}"
			v-swiperight="{fn:vuetap,name:'右滑'}"
			v-swipeup="{fn:vuetap,name:'上滑'}"
			v-swipedown="{fn:vuetap,name:'下滑'}"
		>
		{{ name }}
		</div>
  </div>
</template>

<script>
export default {
  name: 'touch',
  data () {
    return {
      name:"开始"
    }
  },
	methods:{
	  	vuetap:function(s){
	  		this.name=s.name;
	  	}
	}  
}
</script>


<style scoped>

</style>
