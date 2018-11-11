<template>
  <div class="main-menu-wrapper">
    <Menu 
      mode="horizontal" 
      theme="dark"
      ref="main_menu"
      class="main-menu"
      @on-select="onSelect"
      :active-name="activeName">
      <template 
        v-for="v in list">
        <template v-if="!v.meta.hideInMenu">
          <MenuItem 
            :name="v.name"
            :key="'menu-item'+v.name"
            class="main-menu-item">
          <img 
            class="icon"
            :src="v.meta.icon" 
            :key="'icon-'+v.name">
          <img 
            class="icon-active"
            :src="v.meta.iconActive" 
            :key="'icon-active-'+v.name">
          {{ v.meta.title }}
          </MenuItem>
        </template>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'MainMenu',
  components: {},
  data() {
    return {
      list: []
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
    onSelect(name) {
      this.$emit('on-select', name)
    }
  },
  watch: {
    mainMenuList(n) {
      let newList = []
      n.forEach(item => {
        let temp = JSON.parse(JSON.stringify(item))
        if (temp.meta.icon) {
          temp.meta.iconActive = require('@/assets/icons/' +
            temp.meta.icon +
            '_click.png')
          temp.meta.icon = require('@/assets/icons/' + temp.meta.icon + '.png')
          newList.push(temp)
        }
      })
      this.list = newList
    },
    $route: {
      handler: function() {
        this.$nextTick(() => {
          this.$refs.main_menu.updateActiveName()
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {}
}
</script>
<style lang="less">
@import './main-menu.less';
</style>
