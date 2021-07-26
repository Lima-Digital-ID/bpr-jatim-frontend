import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import PersonalData from '../views/Personal-data.vue';
import Scoring from '../views/Scoring.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/data-diri',
    component: PersonalData,
  },
  {
    path: '/scoring',
    component: Scoring,
  },
]

const router = new VueRouter({
  routes
})

export default router
