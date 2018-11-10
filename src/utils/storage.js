const menusKey = 'mainMenus'
const authorizationKey = 'Authorization'
const userInfoKey = 'userInfo'
const allRouterKey = 'allRouter'

function setAuthorization(autuorization) {
  localStorage.setItem(authorizationKey, autuorization)
}
function getAuthorization() {
  return localStorage.getItem(authorizationKey)
}
function setUserInfo(userInfo) {
  localStorage.setItem(userInfoKey, JSON.stringify(userInfo) || {})
}
function getUserInfo() {
  return JSON.parse(localStorage.getItem(userInfoKey) || '{}')
}
function setMainMenuList(menus) {
  localStorage.setItem(menusKey, JSON.stringify(menus) || [])
}
function getMainMenuList() {
  return JSON.parse(localStorage.getItem(menusKey) || '[]')
}
function setAllRouter(allRouter) {
  localStorage.setItem(allRouterKey, JSON.stringify(allRouter) || [])
}
function getAllRouter() {
  return JSON.parse(localStorage.getItem(allRouterKey) || '[]')
}
export {
  authorizationKey,
  setAuthorization,
  getAuthorization,
  setMainMenuList,
  getMainMenuList,
  setUserInfo,
  getUserInfo,
  setAllRouter,
  getAllRouter
}
