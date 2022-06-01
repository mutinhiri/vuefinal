import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify from 'aws-amplify'
// import Amplify, * as AmplifyModules from 'aws-amplify'
import { Logger } from '@aws-amplify/core'
import { I18n } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { AuthClass } from '@aws-amplify/auth'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'
Amplify.configure(aws_exports)
Vue.use(AmplifyPlugin, {AuthClass, Auth, Logger, I18n});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
