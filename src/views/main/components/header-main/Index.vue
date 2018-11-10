<template>
  <div class="header-main-wrapper">
    <div class="header-title">
      <strong class="title">
        <img :src="logo">
      </strong>
      <span class="sub-title">运营管理平台</span>
    </div>
    <main-menu 
      :main-menu-list="mainMenuList" 
      :active-name="activeName"
      @on-select="selectMainMenu"
    />
  </div>
</template>
<script>
import MainMenu from './main-menu'
import logo from '@/assets/images/logo.png'
export default {
  name: 'HeaderMain',
  components: { MainMenu },
  data() {
    return {
      logo: logo
    }
  },
  props: {
    mainMenuList: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectMainMenu(name) {
      this.$emit('on-select', name)
    }
  }
}
</script>
<style lang="less">
@import './index.less';
</style>
