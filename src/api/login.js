import request from '@/utils/request'
import { menu } from '@/mock/menu'

export function loginByUsername(username, password) {
const data = {
    username,
    password
}
  return request({
  	url: '/login/login',
//  url: '/login',
    method: 'post',
//  params: { account:username,password:password,clientType:0, }
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export const getMenu = () => {
    return new Promise((resolve, reject) => {
        resolve({ data: menu});
    })
}
