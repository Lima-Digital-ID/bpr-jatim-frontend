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
import Governance from '@/views/tentang/Governance'
import SocialResponsibility from '@/views/tentang/SocialResponsibility'
import TataKelolaPerusahaan from '@/views/tentang/TataKelolaPerusahaan'
import PetaCabang from '@/views/berita/PetaCabang'
import Karier from '@/views/berita/Karier'
import Tips from '@/views/berita/Tips'
import Info from '@/views/berita/Info'
import Lelang from '@/views/berita/Lelang'
import Kantor from '@/views/berita/Kantor'
import Pengaduan from '@/views/berita/Pengaduan'
import Bantuan from '@/views/bantuan-faq/Bantuan'
import PengajuanKredit from '@/views/produk-layanan/PengajuanKredit'


// auth
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';

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
    path: '/governance',
    name: 'Governance',
    component: Governance
  },
  {
    path: '/socialresponsibility',
    name: '/SocialResponsibility',
    component: SocialResponsibility
  },
  {
    path: '/socialresponsibility/:tahun',
    name: '/SocialResponsibilityByTahun',
    component: SocialResponsibility
  },
  {
    path: '/socialresponsibility/:tahun/:id',
    name: '/SocialResponsibilityById',
    component: SocialResponsibility
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
    path: '/bantuan',
    name: 'Bantuan',
    component: Bantuan
  },
  {
    path: '/pengajuan',
    name: 'PengajuanKredit',
    component: PengajuanKredit
  },
  {
    path: '/tatakelolaperusahaan',
    name: 'TataKelolaPerusahaan',
    component: TataKelolaPerusahaan
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

]

const router = new VueRouter({
  routes
})

export default router
