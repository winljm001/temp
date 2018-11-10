<template>
  <div class="side-menu-wrapper">
    <Menu 
      width="auto"
      accordion
      theme="dark"
      class="cp-side-menu"
      active-name="1-2"
      :open-names="['1']">
      <template v-for="item in menuList">
        <side-menu-item 
          v-if="showChildren(item)" 
          :key="`menu-${item.menuCode}`" 
          :parent-item="item"/>
        <menu-item 
          v-else 
          :name="item.menuCode" 
          :key="`menu-${item.menuCode}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </Menu>
  </div>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'
import mixin from './mixin'
export default {
  name: 'SideMenu',
  mixins: [mixin],
  components: { SideMenuItem },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      openedNames: []
    }
  },
  methods: {
    handleSelect(name) {
      this.$emit('on-select', name)
    }
  },
  computed: {
    // textColor() {
    //   return this.theme === 'dark' ? '#fff' : '#495060'
    // }
  },
  watch: {
    // openedNames() {
    //   this.$nextTick(() => {
    //     this.$refs.menu.updateOpened()
    //   })
    // }
  },
  mounted() {
    // console.log(this.menuList)
  }
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
