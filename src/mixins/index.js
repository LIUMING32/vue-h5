import {AppLink,Browser} from '@/utils/open'
export default {
	 created () {
	    
	 },
	 methods: {
		open(){
			let config = {
			    // 和app协定的scheme
			    schema: 'sharetest://data/test?type=1&value=2',
			    // iOS下的App在appstore的地址
			    appstore: 'http://union.m.jd.com/download/go.action?to=http%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid414245413&client=apple&unionId=12532&subunionId=m-top&key=e4dd45c0f480d8a08c4621b4fff5de74',
			    // 应用宝的地址
			    yyb: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850'
			}
			let applink = new AppLink(config)
			applink.open()
		}  
	 }
}