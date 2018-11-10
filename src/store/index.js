import Vue from 'vue'
const $vue = new Vue()
import Vuex from 'vuex'
import modules from './modules'
import {
  getAuthorization,
  getUserInfo,
  setMainMenuList
  // getMainMenuList
} from '../utils/storage'
import { getMainMenuByRouter } from '../utils/util'
// 主菜单模拟数据
import mainMenus from '@/mock/localMenus/mainMenus'
// 子菜单模拟数据
import subMenus from '@/mock/localMenus/subMenusMap'
import config from '@/config'
import { queryMainMenu } from '../services/system'
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    authorization: getAuthorization(),
    userInfo: getUserInfo(),
    // 菜单相关
    mainMenuList: [],
    mainMenuActive: '',
    subMenuList: [],
    subMenuActive: null,
    allRouter: []
  },
  getters: {},
  mutations: {
    setAuthorization(state, { payload }) {
      state.authorization = payload
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    },
    // setMainMenuList(state, { payload }) {
    //   state.mainMenuList = payload
    // },
    setMainMenuActive(state, { payload }) {
      state.mainMenuActive = payload
    },
    setAllRouter(state, { payload }) {
      state.allRouter = payload
    },
    initMenu(state) {
      state.mainMenuList = getMainMenuByRouter(state.allRouter)
      console.log(state.mainMenuList)
    },
    setSubMenuList(state, { payload }) {
      let list = []
      if (payload != '') {
        list = subMenus[payload]
          ? subMenus[payload].children
            ? subMenus[payload].children
            : []
          : []
      }
      state.subMenuList = list
    },
    setSubMenuActive(state, { payload }) {
      state.subMenuActive = payload
    }
  },
  actions: {
    // 获取主菜单
    getMainMenu({ commit }) {
      if (config.isUselocalMenus) {
        commit('setMainMenuList', { payload: mainMenus })
        commit('setMainMenuActive', { payload: mainMenus[0].menuCode })
        setMainMenuList(mainMenus)
      } else {
        queryMainMenu()
          .then(({ results }) => {
            commit('setMainMenuList', { payload: results })
            commit('setMainMenuActive', { payload: mainMenus[0].menuCode })
            setMainMenuList(results)
          })
          .catch(({ message }) => {
            $vue.$Message.error(message)
          })
      }
    }
  },
  plugins: [],
  strict: process.env.NODE_ENV !== 'production'
})
