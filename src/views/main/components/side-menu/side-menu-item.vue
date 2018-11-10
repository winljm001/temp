<template>
  <div class="side-menu-item-wrapper">
    <Submenu :name="parentItem.name">
      <template slot="title">
        {{ parentItem.meta.title }}
      </template>
      <template v-for="item in parentItem.children">
        <template v-if="!item.meta.hideInMenu">
          <side-menu-item 
            v-if="showChildren(item)" 
            :key="`menu-${item.name}`" 
            :parent-item="item"/>
          <menu-item 
            v-else 
            :name="item.name" 
            :key="`menu-${item.name}`"><span>{{ showTitle(item) }}</span></menu-item>
        </template>
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
  computed: {},
  watch: {},
  mounted() {}
}
</script>
<style lang="less">
</style>
