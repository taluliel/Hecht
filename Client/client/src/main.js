import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Room from './components/Room';

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{path:'/room/:id',name:'room',component:Room}];
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
