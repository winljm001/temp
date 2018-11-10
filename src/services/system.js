// 系统整体
import request from '../utils/request'
import { stringify } from 'qs'
export function list(params) {
  return request(`/list?${stringify(params)}`)
}
// 获取菜单
export function queryMainMenu() {
  return request(`/api/om/systems/menus`, {
    method: 'post'
  })
}
