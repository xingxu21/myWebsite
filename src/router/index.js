import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Second from '../views/Second'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, //below is the object that was added for the home path
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
