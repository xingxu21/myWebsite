import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import About from '../views/About'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, //below is the object that was added for the home path
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/wild',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
