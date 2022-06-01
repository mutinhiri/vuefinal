import Vue from "vue";
import Router from 'vue-router'
import AboutComp from './views/AboutComp'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutComp
    }
  ]
})

export default router;