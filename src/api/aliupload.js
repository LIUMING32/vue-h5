import request from '@/utils/request'

export function aliupload() {
  return request({
    url: '/getOssToken', 
    method: 'get',
  })
}
