import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Promo from '@/views/berita/Promo'
import Epaper from '@/views/berita/Epaper'
import Penghargaan from '@/views/berita/Penghargaan'
import Bisnis from '@/views/produk-layanan/Bisnis'
import UmkmBinaan from '@/views/umkm-binaan/UmkmBinaan'
import Berita from '@/views/berita/Berita'
import Profile from '@/views/tentang/Profile'
import Transparansi from '@/views/tentang/Transparansi'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import PersonalData from '../views/Personal-data.vue';
import Scoring from '../views/Scoring.vue';
import PinjamanCepat from '../views/PinjamanCepat.vue';
import PinjamanModal from '../views/PinjamanModal.vue';
import DanaUmroh from '../views/DanaUmroh.vue';

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
    path: '/promo',
    name: 'Promo',
    component: Promo
  },
  {
    path: '/epaper',
    name: 'Epaper',
    component: Epaper
  },
  {
    path: '/penghargaan',
    name: 'Penghargaan',
    component: Penghargaan
  },
  {
    path: '/umkm',
    name: 'UmkmBinaan',
    component: UmkmBinaan
  },
  {
    path: '/bisnis/:id',
    name: 'Bisnis',
    component: Bisnis
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
  {
    path: '/pinjaman-cepat',
    component: PinjamanCepat,
  },
  {
    path: '/pinjaman-modal',
    component: PinjamanModal,
  },
  {
    path: '/dana-umrah',
    component: DanaUmroh,
  },
]

const router = new VueRouter({
  routes
})

export default router
