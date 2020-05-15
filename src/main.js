import Vue from 'vue'
import App from './App.vue'
import router from './router'// loads from src/router/index.js

new Vue({
  router,
  render: h => h(App), //root vue instance using router and renders the App component
}).$mount('#app')
