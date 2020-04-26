import Vue from 'vue'
import VueRouter from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Second from '../views/Second'
import Splash from '../views/Splash'
import Resume from '../views/Resume'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    meta: {
      title: 'David Feng'
    },
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
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]



const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = 'David Feng'
  next()
})


export default router
