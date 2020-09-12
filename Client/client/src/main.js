import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [];
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
