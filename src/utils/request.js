import axios from 'axios'
import Qs from 'qs'
// 创建实例时设置配置的默认值
var instance = axios.create({
   baseURL: 'http://59.110.159.55:8000',
   timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
//  var xtoken = getXtoken()  
    // 在发送请求之前做些什么
//	var xtoken = 'eyJhbGciOiJIUzI1NiJ9.eyI5OTU5NDY5OTgxODYxMTUwNzIiOiJ7XCJjaGFubmVsSWRcIjpcIjEyMzQ1NlwiLFwiY3JlYXRlVGltZVwiOjE1MjYyODcyNDI2NDgsXCJkZXZpY2VJZFwiOlwiNzQxODIyXCIsXCJyZWdpc3RyYXRpb25JZFwiOlwiODUyOTYzXCIsXCJzeXN0ZW1cIjpcIklPU1wiLFwidXNlcklkXCI6OTk1OTQ2OTk4MTg2MTE1MDcyLFwidmVyc2lvblwiOlwiMS4wXCJ9In0.VAca786xJvfz50b-Yfj8Yhu3ZGblOAiikJrT1SS-Tvo&995946998186115072'
    var xtoken = 'eyJhbGciOiJIUzI1NiJ9.eyI5ODY4ODE4MDc3NjI4NDk3OTIiOiJ7XCJhcHBQYWNrYWdlXCI6XCJjb20uaGFpZGF4aW5neWkuaGFpeGluZ1wiLFwiY2hhbm5lbElkXCI6XCJ1bktub3dcIixcImNyZWF0ZVRpbWVcIjoxNTI0MTI1OTMyNzU4LFwiZGV2aWNlSWRcIjpcIjg2NzE1NjAzMTM1OTQ4NFwiLFwicmVnaXN0cmF0aW9uSWRcIjpcIjE3MDk3NmZhOGFhZDA1NDQyMThcIixcInN5c3RlbVwiOlwiQU5EUk9JRFwiLFwidXNlcklkXCI6OTg2ODgxODA3NzYyODQ5NzkyLFwidmVyc2lvblwiOlwiMS4wXCJ9In0.bnftghdL-IEmyvTVgRlWrMzf2_XkN8DIDmux6CPj6Pg&986881807762849792'
//  if(xtoken != null){
//      config.headers['token'] = xtoken  
//  } 
    config.headers['system'] = 'WEB' 
    config.headers['channelId'] = 123456 
    config.headers['deviceId'] = 123456 
    config.headers['version'] = '1.0' 
	transformRequest: [function (data) {
	    data = Qs.stringify(data)
	    return data
	}]  
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default instance  