import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return request({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
export function getUser(query) {
  return request({
    url: '/userManage/getUser',
    method: 'get',
    params: query
  })
}
export function getOrgnize(query) {
  return request({
    url: '/userManage/getOrgnize',
    method: 'get',
    params: query
  })
}
export function getTheatre(query) {
  return request({
    url: '/userManage/getTheatre',
    method: 'get',
    params: query
  })
}

export function getHeadline(query) {
  return request({
    url: '/userManage/getHeadline',
    method: 'get',
    params: query
  })
}

export function getFinance(query) {
  return request({
    url: '/userManage/getFinance',
    method: 'get',
    params: query
  })
}
export function getTOP(query) {
  return request({
    url: '/userManage/getTOP',
    method: 'get',
    params: query
  })
}
export function getHomeConfig(query) {
  return request({
    url: '/userManage/getHomeConfig',
    method: 'get',
    params: query
  })
}
export function getAdver(query) {
  return request({
    url: '/userManage/getAdver',
    method: 'get',
    params: query
  })
}
export function getOrder(query) {
  return request({
    url: '/userManage/getOrder',
    method: 'get',
    params: query
  })
}
export function getReport(query) {
  return request({
    url: '/userManage/getReport',
    method: 'get',
    params: query
  })
}
export function getFeedbacks(query) {
  return request({
    url: '/userManage/getFeedbacks',
    method: 'get',
    params: query
  })
}
export function getMessages(query) {
  return request({
    url: '/userManage/getMessages',
    method: 'get',
    params: query
  })
}
export function getRecord(query) {
  return request({
    url: '/userManage/getRecord',
    method: 'get',
    params: query
  })
}


