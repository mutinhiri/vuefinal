import Vue from "vue";
import Router from 'vue-router'
import About from './views/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router;