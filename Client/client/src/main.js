import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Room from './components/Room';
import QuestionViewer from './components/QuestionViewer'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{path:'/room/:id',name:'room',component:Room},{path:'/feature/:id',name:'feature',component:QuestionViewer}];
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
