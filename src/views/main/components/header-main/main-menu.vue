<template>
  <div class="main-menu-wrapper">
    <Menu 
      mode="horizontal" 
      theme="dark"
      class="main-menu"
      @on-select="onSelect"
      :active-name="activeName">
      <MenuItem 
        v-for="v in mainMenuList" 
        :key="v.name" 
        :name="v.name"
        class="main-menu-item">
      {{ v.meta.title }}
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'MainMenu',
  components: {},
  data() {
    return {}
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
  }
}
</script>
<style lang="less">
@import './main-menu.less';
</style>
