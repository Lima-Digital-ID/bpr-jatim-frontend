import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Berita from '@/views/Berita'
import Profile from '@/views/tentang/Profile'
import Transparansi from '@/views/tentang/Transparansi'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/transparansi',
    name: 'Transparansi',
    component: Transparansi
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
