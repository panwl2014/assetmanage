import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { from } from 'core-js/fn/array'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(sessionStorage.getItem('isLogin'))
  if (sessionStorage.getItem('isLogin')) {
    next()
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router