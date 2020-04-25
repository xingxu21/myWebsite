import Vue from 'vue'
import VueRouter from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Second from '../views/Second'
import Splash from '../views/Splash'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
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
