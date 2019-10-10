import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './router.js';
import sessionUtil from '../assets/js/session.js'
var router = new VueRouter({
  routes: route
})
router.beforeEach((to, from, next) => {
  if (sessionUtil.getItem('admin')) {
      var admin = JSON.parse(sessionUtil.getItem('admin'))
  } else {
      var admin = ''
  }
  if (!admin && to.path === '/login') { //如果没有登录信息并且访问的是登录页则去登录页
    sessionUtil.deleteItem('admin')
      next()
      return
  }
  if ((admin && to.path === '/login') || (admin && to.path === '/')) { //如果有登录信息 去的为空 则定向到首页，意思是登陆到首页后点击返回箭头不能返回到登录页，只能点退出登录才可以
      next({
          path: '/home'
      })
      return
  }
  if (!admin && to.path !== '/login') { // 无登录信息访问业务界面,拦截返回登录页
      next({
          path: '/login'
      })
      return
  }
  if (admin && to.path !== '/login') { // 有登陆信息，并且不是去登录页
      next()
      return
  }
  // next()
})
Vue.use(VueRouter)
export default router