const vue_app_publish_env = process.env.VUE_APP_PUBLISH_ENV
const vue_app_publish_env_var = process.env.VUE_APP_PUBLISH_ENV_VAR
const baseConfig = require('./config.base')
let envConfig
try {
  envConfig = require(`./config.${vue_app_publish_env}.${vue_app_publish_env_var}.js`)
} catch (error) {
  envConfig = {}
}

export default Object.assign({}, baseConfig, envConfig)
