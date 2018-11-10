// 登录模块
import request from '../utils/request'
import { stringify } from 'qs'
export function login(params) {
  return request(`/api/om/sessions/create?${stringify(params)}`, {
    method: 'post'
  })
}
// 获取管理员信息
export function queryAdminInfo() {
  return request('/api/om/sessions/context')
}
