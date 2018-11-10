<template>
  <div class="login">
    <div class="login-con">
      <Card 
        icon="log-in" 
        title="欢迎登录" 
        :bordered="false"
      >
        <div class="form-con">
          <login-form 
            @on-success-valid="handleSubmit" 
            :loading="loading"
          />
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LoginForm from '@/components/login-form'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapState('login', {
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions('login', ['login']),
    handleSubmit(params) {
      this.login({ account: params.userName, password: params.password })
    }
  }
}
</script>
<style lang="less" src='./style.less'>
</style>
