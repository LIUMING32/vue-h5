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

//获取机构列表
export function getcompanyList() {
  return request({
    url: '/user-service/company/getCompanyList',
    method: 'get',
    params: {moduleType:5,nowPage:1,pageSize:3 }
  })
}
//获取招商空间列表
export function getinvestmentList() {
  return request({
    url: '/user-service/company/getInvestmentList',
    method: 'get',
    params: {companyId:'993819881231224832',nowPage:1,pageSize:3 }
  })
}
