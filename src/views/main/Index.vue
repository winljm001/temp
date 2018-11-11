<template>
  <Layout class="main">
    <Header class="cp-header">
      <header-bar 
        :user-info="userInfo" 
        @on-logout="logout"/>
      <header-main 
        :main-menu-list="mainMenuList"
        :active-name="mainMenuActive"
        @on-select="selectMainMenu"/>
    </Header>
    <Layout>
      <Sider 
        class="cp-sider"
      >
        <side-menu 
          :menu-list="subMenuList"
          @on-select="selectSubMenu"/>
      </Sider>
      <Content class="cp-content">
        <CustomBreadCrumb :list="breadCrumbList"/>
        <!-- <keep-alive :include="cacheList">
          <router-view />
        </keep-alive> -->
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import HeaderMain from './components/header-main'
import CustomBreadCrumb from './components/custom-bread-crumb'
import { mapState, mapActions, mapMutations } from 'vuex'
import './style.less'
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    HeaderMain,
    CustomBreadCrumb
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      mainMenuList: state => state.mainMenuList,
      mainMenuActive: state => state.mainMenuActive,
      subMenuList: state => state.subMenuList,
      breadCrumbList: state => state.breadCrumbList
    })
  },
  methods: {
    ...mapMutations(['initMenu', 'setRouteStatus', 'setBreadCrumb']),
    ...mapActions('login', ['logout']),
    turnToPage(route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    selectMainMenu(item) {
      this.$router.push({
        name: item
      })
    },
    selectSubMenu(item) {
      this.$router.push({
        name: item
      })
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.setRouteStatus({ payload: val })
        this.setBreadCrumb(val)
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.initMenu()
  }
}
</script>
