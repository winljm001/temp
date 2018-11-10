<template>
  <div class="side-menu-item-wrapper">
    <Submenu :name="parentItem.menuCode">
      <template slot="title">
        {{ parentItem.menuName }}
      </template>
      <template v-for="item in parentItem.children">
        <side-menu-item 
          v-if="showChildren(item)" 
          :key="`menu-${item.menuCode}`" 
          :parent-item="item"/>
        <menu-item 
          v-else 
          :name="item.menuCode" 
          :key="`menu-${item.menuCode}`"><span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </Submenu>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  name: 'SideMenuItem',
  mixins: [mixin],
  components: {},
  props: {
    parentItem: {
      type: Object,
      default: () => {}
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
  mounted() {}
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
