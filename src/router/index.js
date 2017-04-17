import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
let Login = resolve => require(['../page/Login/Login'], resolve),
		Register = resolve => require(['../page/Register/Register'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/Login',
    	component: Login
    },
    {
    	path: '/Register',
    	component: Register
    }
  ]
})
