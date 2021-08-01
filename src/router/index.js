import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Promo from '@/views/berita/Promo'
import Epaper from '@/views/berita/Epaper'
import Penghargaan from '@/views/berita/Penghargaan'
import ProdukLayanan from '@/views/produk-layanan/ProdukLayanan'
import UmkmBinaan from '@/views/umkm-binaan/UmkmBinaan'
import Berita from '@/views/berita/Berita'
import DetailBerita from '@/views/berita/DetailBerita'
import Profile from '@/views/tentang/Profile'
import Transparansi from '@/views/tentang/Transparansi'
import PetaCabang from '@/views/berita/PetaCabang'
import Karier from '@/views/berita/Karier'
import Tips from '@/views/berita/Tips'
import Info from '@/views/berita/Info'
import Lelang from '@/views/berita/Lelang'
import Kantor from '@/views/berita/Kantor'
import Pengaduan from '@/views/berita/Pengaduan'

// auth
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
// Data diri & scoring
import PersonalData from '../views/verifikasiAndScoring/Personal-data.vue';
import Scoring from '../views/verifikasiAndScoring/Scoring.vue';
// Syarat Pinjaman cepat, modal, dana umroh
import SyaratPinjamanCepat from '../views/SyaratPinjaman/SyaratPinjamanCepat.vue';
import SyaratPinjamanModal from '../views/SyaratPinjaman/SyaratPinjamanModal.vue';
import SyaratDanaUmroh from '../views/SyaratPinjaman/SyaratDanaUmroh.vue';
// Pinjaman modal & dana umroh
import PinjamanModal from '../views/FormPinjaman/PinjamanModal.vue';
import PinjamanDanaUmroh from '../views/FormPinjaman/PinjamanDanaUmroh.vue';

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
    path: '/umkm/:idKota',
    name: 'UmkmBinaanByKota',
    component: UmkmBinaan
  },
  {
    path: '/produk-layanan/:slug',
    name: 'ProdukLayanan',
    component: ProdukLayanan
  },
  {
    path: '/berita/:slug',
    name: 'DetailBerita',
    component: DetailBerita
  },
  {
    path: '/peta-cabang',
    name: 'PetaCabang',
    component: PetaCabang
  },
  {
    path: '/kantor',
    name: 'Kantor',
    component: Kantor
  },
  {
    path: '/pengaduan',
    name: 'Pengaduan',
    component: Pengaduan
  },
  {
    path: '/karier',
    name: 'Karier',
    component: Karier
  },
  {
    path: '/lelang',
    name: 'Lelang',
    component: Lelang
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
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
    path: '/syarat-pinjaman-cepat',
    component: SyaratPinjamanCepat,
  },
  {
    path: '/syarat-pinjaman-modal',
    component: SyaratPinjamanModal,
  },
  {
    path: '/syarat-dana-umrah',
    component: SyaratDanaUmroh,
  },
  {
    path: '/pinjaman-modal',
    component: PinjamanModal,
  },
  {
    path: '/pinjaman-dana-umroh',
    component: PinjamanDanaUmroh,
  },
]

const router = new VueRouter({
  routes
})

export default router
