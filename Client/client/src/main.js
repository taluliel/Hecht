import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueCoreVideoPlayer from 'vue-core-video-player'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import {firestorePlugin} from 'vuefire'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Room from './components/Room';
import QuestionViewer from './components/QuestionViewer'
import MovieViewer from './components/MovieViewer';
import Home from './components/Home';
import FlagIcon from 'vue-flag-icon';


Vue.use(FlagIcon);

Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.use(VueCoreVideoPlayer)

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'hechtmuseum-2021',
  databaseURL: 'https://hechtmuseum-2021.firebaseio.com',
  storageBucket: "hechtmuseum-2021.appspot.com"
})
export const db = firebase.firestore();
export const storage = firebase.storage();


const routes = [
  {path:'/',name:'HOME',component:Home},
  {path:'/room/:id',name:'room',component:Room},
{path:'/feature/:id',name:'feature',component:QuestionViewer},
{path:'/movie/:id',name:'movie',component:MovieViewer},
];
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history',
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
