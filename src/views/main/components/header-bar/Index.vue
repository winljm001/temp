<template>
  <div class="header-bar">
    <span>{{ userInfo.name }}</span>
    <a 
      class="logout-btn" 
      href="javascript:void(0);"
      @click="logout"
    >退出</a>
  </div>
</template>
<script>
import './header-bar.less'
export default {
  name: 'HeaderBar',
  components: {},
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    logout() {
      this.$Modal.confirm({
        content: '确定要退出么？',
        onOk: () => {
          this.$emit('on-logout')
        }
      })
    }
  }
}
</script>
