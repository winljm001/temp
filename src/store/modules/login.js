import { login, queryAdminInfo } from '@/services/login'
import { setAuthorization, setUserInfo } from '../../utils/storage'
import { Message } from 'iview'
import router from '@/router'
const state = {
  loading: false
}
const getters = {}
const actions = {
  login({ commit, dispatch, rootState }, params) {
    commit('loading', { payload: true })
    login(params)
      .then(({ result }) => {
        // 保存auth
        commit('setAuthorization', { payload: result }, { root: true })
        setAuthorization(result)
        // 登录成功获取管理员信息
        dispatch('queryAdminInfo')
        commit('initMenu', {}, { root: true })
        // 有重定向页面就跳转到重定向页面
        if (router.history.current.query.redirct) {
          router.push(router.history.current.query.redirct)
        } else {
          router.push({ name: rootState.mainMenuList[0].name })
        }
      })
      .catch(message => {
        Message.error(message)
      })
      .finally(() => {
        commit('loading', { payload: false })
      })
  },
  // 获取管理员信息
  queryAdminInfo({ commit }) {
    queryAdminInfo()
      .then(({ sysUser }) => {
        // 设置管理员信息
        commit('setUserInfo', { payload: sysUser }, { root: true })
        setUserInfo(sysUser)
      })
      .catch(({ message }) => {
        Message.error(message)
      })
  },
  logout({ commit }) {
    setAuthorization('')
    commit('setAuthorization', { payload: '' }, { root: true })
    setUserInfo({})
    commit('setUserInfo', { payload: {} }, { root: true })
    router.push('/login')
  }
}
const mutations = {
  loading(state, { payload }) {
    state.loading = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
