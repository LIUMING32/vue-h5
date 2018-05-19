<template>
  <div class="main">
  	<br />
  	<br />
  	<h4 >主页</h4>
    <div class="div-model">
	    <ul >
	    	<li><a href="./homePage.html">{{homePage}}</a></li>
	    	<li><a href="./finance.html">{{finance}}</a></li>
	    	<li><a href="./filmRecruit.html">{{filmRecruit}}</a></li>
	    	<li><a href="./advertise.html">{{advertise}}</a></li>
	    	<li><a href="./activity.html">{{activity}}</a></li>
	    	<li><a href="./culture.html">{{culture}}</a></li>
	    	<li><a href="./headline.html">{{headline}}</a></li>
	    	<li><a href="./share.html">{{share}}</a></li>
	    	<li><a href="./card.html">{{card}}</a></li>
	    	<li><a href="./agreement.html">{{agreement}}</a></li>	    	
	    </ul>    	
    </div>
    <!--<div id="div-iframe">
      <iframe src="./index.html" frameborder="0" id="iframe_1" width="100%" height="100%" scrolling="auto"></iframe>
    </div>-->
  </div>
</template>
<script>
	import {Grid, GridItem} from 'vux'	
  export default{
      name: 'mainPage',
      components: {},
			data() {
				return {
					homePage:'个人主页',
					finance:'项目融资',
					filmRecruit:'影视招募',
					advertise:'广告招募'	,
					activity:'影视活动',
					culture:'文化产业',	
					headline:'海星头条',	
					share:'推荐分享',	
					card:'名片',
					agreement:'海星协议',					
				}
			}
  }
</script>
<style coped>
	@import url("../../assets/css/style.css");
	ul li{width: 21%;float: left;padding: 2%;}
  /*#div-iframe{
    width: 100%;
    height: calc(99vh - 60px);
  }*/
</style>
