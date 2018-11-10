<template>
  <div class="side-menu-wrapper">
    <Menu 
      width="auto"
      accordion
      theme="dark"
      ref="menu"
      class="cp-side-menu"
      :active-name="menuActiveName"
      :open-names="openedNames"
      @on-select="onSelect">
      <template v-for="item in menuList">
        <template v-if="!item.meta.hideInMenu">
          <side-menu-item 
            v-if="showChildren(item)" 
            :key="`menu-${item.name}`" 
            :parent-item="item"/>
          <menu-item 
            v-else 
            :name="item.name" 
            :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
        </template>
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
    }
  },
  data() {
    return {
      openedNames: [],
      menuActiveName: ''
    }
  },
  methods: {
    onSelect(name) {
      this.$emit('on-select', name)
    },
    setMenuStatus(newRoute) {
      this.menuActiveName = newRoute.name
      let subMenuOpenName = []
      for (let i = 1; i < newRoute.matched.length; i++) {
        if (newRoute.matched[i].name !== name) {
          subMenuOpenName.push(newRoute.matched[i].name)
        }
      }
      this.openedNames = subMenuOpenName
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function(val) {
        this.$nextTick(() => {
          this.$refs.menu.updateOpened()
          this.$refs.menu.updateActiveName()
        })
        this.setMenuStatus(val)
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {}
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
