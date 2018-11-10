import { forEach, objEqual } from '@/utils/tools'
export const getCookie = function(name) {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return unescape(arr[2])
  else return null
}
export const showTitle = item => (item.meta && item.meta.title) || item.name
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (
    route1.name === route2.name &&
    objEqual(params1, params2) &&
    objEqual(query1, query2)
  )
}
export const hasChild = item => {
  return item.children && item.children.length !== 0
}
// 动态加载组件
export const lazyLoading = url => () => import(`@/views/${url}`)

// 根据相应权限主菜单生成路由
export const updateAllRouter = (mainMenus, subMenus) => {
  let mainRouter = []
  for (let item of mainMenus) {
    if (subMenus[item.menuCode]) {
      mainRouter.push(initRouterNode(subMenus[item.menuCode]))
    } else {
      mainRouter.push(initRouterNode(item))
    }
  }
  return mainRouter
}
// 生成路由节点
export const initRouterNode = data => {
  let routerNode = {}
  routerNode.path = data.menuUrl
  routerNode.name = data.menuCode
  if (data.children && data.children.length > 0 && data.children[0].menuUrl) {
    routerNode.redirect = data.children[0].menuUrl
  }
  routerNode.component = lazyLoading(data.component)
  if (data.children && data.children.length > 0) {
    routerNode.children = []
    for (var item of data.children) {
      routerNode.children.push(initRouterNode(item))
    }
  }
  routerNode.meta = {}
  routerNode.meta.icon = data.menuIcon || ''
  routerNode.meta.title = data.menuName || '合作伙伴运营管理平台'
  routerNode.meta.hideInMenu = data.hideInMenu || false
  return routerNode
}
/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = route => {
  let routeMetched = route.matched
  let res = routeMetched
    .filter(item => {
      return item.meta === undefined || !item.meta.hideInMenu
    })
    .map(item => {
      let meta = { ...item.meta }
      if (meta.title && typeof meta.title === 'function')
        meta.title = meta.title(route)
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: meta
      }
      return obj
    })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return res
}

/**
 * @param {Array} list 通过路由列表得到主菜单列表
 * @returns {Array}
 */
export const getMainMenuByRouter = list => {
  let res = []
  forEach(list, item => {
    let tempRoute = JSON.parse(JSON.stringify(item))
    delete tempRoute.children
    res.push(tempRoute)
  })
  return res
}
/**
 * @param {Array} list 通过父级name获取子菜单
 * @returns {object}
 */
export const getSubMenuByUpName = (list, name) => {
  let res = {}
  forEach(list, item => {
    if (item.name == name) {
      res = JSON.parse(JSON.stringify(item))
    }
  })
  return res
}
