import request from '@/utils/request'


//export function loginByUsername(username, password) {
//const data = {
//  username,
//  password
//}
//return request({
//	url: '/login/login',
////  url: '/login',
//  method: 'post',
////  params: { account:username,password:password,clientType:0, }
//  data
//})
//}
//
//export function logout() {
//return request({
//  url: '/login/logout',
//  method: 'post'
//})
//}

//获取个人主页资料信息 --接口邦东
export function getInfo(params) {
  return request({
    url: '/user-service/userInfo/person/info',
    method: 'get',
    params: params
  })
}
//获取个人主页动态信息-- 接口杨杨
export function getDynamicList(params) {
  return request({
    url: '/common-service/newsDynamic/getDynamicList',
    method: 'get',
    params: params
  })
}
