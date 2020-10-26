import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCoreVideoPlayer from 'vue-core-video-player'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {firestorePlugin} from 'vuefire'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Room from './components/Room';
import QuestionViewer from './components/QuestionViewer'
import MovieViewer from './components/MovieViewer';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCoreVideoPlayer)

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'hechtmuseum-2021',
  databaseURL: 'https://hechtmuseum-2021.firebaseio.com'
})
export const db = firebase.firestore();

const routes = [{path:'/room/:id',name:'room',component:Room},
{path:'/feature/:id',name:'feature',component:QuestionViewer},
{path:'/movie/:id',name:'movie',component:MovieViewer},
];
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
