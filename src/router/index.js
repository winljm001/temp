import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { getAuthorization } from '../utils/storage'
import { updateAllRouter } from '../utils/util'
// 主菜单模拟数据
import mainMenus from '@/mock/localMenus/mainMenus'
// 子菜单模拟数据
import subMenus from '@/mock/localMenus/subMenusMap'
Vue.use(Router)

const LOGIN_PAGE_NAME = 'login'

const router = new Router({
  routes,
  mode: 'history'
})
let getRouter
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const auth = getAuthorization()
  if (!auth && to.name !== LOGIN_PAGE_NAME) {
    next({
      name: LOGIN_PAGE_NAME
    })
  } else if (auth && to.name === LOGIN_PAGE_NAME) {
    next({
      name: 'home'
    })
  } else {
    if (!getRouter) {
      getRouter = updateAllRouter(mainMenus, subMenus)
      router.addRoutes(getRouter)
      next({ ...to, replace: true })
    } else {
      next()
    }
  }
})
export default router
