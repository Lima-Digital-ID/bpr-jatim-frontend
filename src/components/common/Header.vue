<template>
    <nav class="navbar navbar-expand-lg navbar-top fixed-top py-3" :class="classNav">
        <div class="container custom">
            <a class="navbar-brand" href="#">
                <img :src="this.srcLogo" width="250" alt="" srcset="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fa fa-bars mt-2 color-darkBlue"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{transition : navTransition}" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Beranda</router-link>
                    </li>
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="">Tentang</router-link>
                        <div class="dropdown-menu megamenu py-5">
                            <div class="container custom">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-auto">
                                                <h4 class="text-border blue color-blue">Tentang Bank BPR</h4>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-auto">
                                                <router-link to="/profile" class="megamenu-link">
                                                    <h6>Profil <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                                </router-link>
                                                <router-link to="/transparansi" class="megamenu-link">
                                                    <h6>Transparansi <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <img src="@/assets/images/common/logo2.png" width="50%" alt="" srcset="">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="">Produk & Layanan</router-link>
                        <div class="megamenu dropdown-menu py-5" id="megaMenuProdukLayanan">
                            <div class="container custom">
                            <div class="row">
                                <div class="col-auto">
                                    <h4 class="text-border blue color-blue">Produk & Layanan</h4>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row mt-5">
                                            <div class="col-auto">
                                                <a href="#" class="megamenu-link" @click="showProdukLayanan('personal',$event)">
                                                    <h6>Personal <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                                </a>
                                                <a href="#" class="megamenu-link" @click="showProdukLayanan('bisnis',$event)">
                                                    <h6>Bisnis <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                                </a>
                                                <a href="#" class="megamenu-link" @click="showProdukLayanan('layanan',$event)">
                                                    <h6>Layanan <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <div class="row" v-if="this.loopLayanan.length > 0">
                                            <div class="col-md-4 mb-3" v-for="item in this.loopLayanan" :key="item.id">
                                                <router-link :to="item.link">
                                                    <div class="berita-style-1 small-style">
                                                        <img src="@/assets/images/common/cs.png" alt="">
                                                        <div class="layer">
                                                            <div class="content d-flex align-items-center justify-content-center">
                                                                    <p class="mb-0">{{item.productName}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                        <img v-else src="@/assets/images/common/app.png" width="80%" alt="" srcset="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/umkm">UMKM Binaan</router-link>
                    </li>
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="">Berita</router-link>
                        <div class="megamenu dropdown-menu py-5" id="megaMenuProdukLayanan">
                            <div class="container custom">
                            <div class="row">
                                <div class="col-auto">
                                    <h4 class="text-border blue color-blue">Berita</h4>
                                </div>
                            </div>
                                <div class="row mt-5">
                                    <div class="col-md-6">
                                        <router-link to="/berita" class="megamenu-link">
                                            <h6>Berita <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </router-link>
                                        <router-link to="/promo" class="megamenu-link">
                                            <h6>Promo <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </router-link>
                                        <router-link to="/epaper" class="megamenu-link">
                                            <h6>ePaper UMKM <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </router-link>
                                    </div>
                                    <div class="col-md-6">
                                        <router-link to="/penghargaan" class="megamenu-link">
                                            <h6>Penghargaan <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </router-link>
                                        <a href="#" class="megamenu-link">
                                            <h6>Karier <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </a>
                                        <a href="#" class="megamenu-link">
                                            <h6>Form Pengaduan Nasabah <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab aliquam saepe ipsum laudantium vel neque distinctio reiciendis rem.</p>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name : 'Header',
        props :['navTransition','classNav'],
        data() {
            return {
                loopLayanan : [],
                logo : this.classNav!=="transparent-white" ? 'logo-dark.png' : 'logo.png',
                srcLogo : ""
            }
        },
        mounted() {
            this.srcLogo = require("@/assets/images/common/"+this.logo)
            const megamenu = document.querySelectorAll(".megamenu");

            for (let i = 0; i < megamenu.length; i++) {
                megamenu[i].addEventListener("click", function(e) {
                    e.stopPropagation()
                });
            }

            this.scroll();
            document.addEventListener('scroll', this.scroll)
        },
        methods: {
            scroll(){
                let now = document.documentElement.scrollTop;
                const navbarTop = document.querySelector('.navbar-top')
                const navbarBrandImg = document.querySelector('.navbar-brand img')
                if(now>0){
                    navbarTop.classList.add('scrolled');
                    navbarBrandImg.src = require('@/assets/images/common/logo-dark.png')
                }
                else{
                    navbarTop.classList.remove('scrolled');
                    navbarBrandImg.src = require('@/assets/images/common/'+this.logo)
                }
            },
            showProdukLayanan(tipe,event){
                event.preventDefault();
                
                if(tipe==='personal'){
                    this.loopLayanan = [
                        {
                            id : 1,
                            banner : "cs.png",
                            productName : "Tambun",
                            link : tipe+"/1"
                        },
                        {
                            id : 2,
                            banner : "cs.png",
                            productName : "Sikemas",
                            link : tipe+"/1"
                        },
                        {
                            id : 3,
                            banner : "cs.png",
                            productName : "Simpel",
                            link : tipe+"/1"
                        },
                        {
                            id : 4,
                            banner : "cs.png",
                            productName : "Deposito On Call",
                            link : tipe+"/1"
                        },
                        {
                            id : 5,
                            banner : "cs.png",
                            productName : "Deposito Keluarga",
                            link : tipe+"/1"
                        },
                        {
                            id : 6,
                            banner : "cs.png",
                            productName : "Deposito Berjangka",
                            link : tipe+"/1"
                        },
                        {
                            id : 7,
                            banner : "cs.png",
                            productName : "Sikemas Berhadiah",
                            link : tipe+"/1"
                        },
                        {
                            id : 8,
                            banner : "cs.png",
                            productName : "Langsung",
                            link : tipe+"/1"
                        }
                    ]
                }
                else if(tipe==='bisnis'){
                    this.loopLayanan = [
                        {
                            id : 1,
                            banner : "cs.png",
                            productName : "Kusuma",
                            link : tipe+"/1"
                        },
                        {
                            id : 2,
                            banner : "cs.png",
                            productName : "Krida Mas",
                            link : tipe+"/1"
                        },
                        {
                            id : 3,
                            banner : "cs.png",
                            productName : "Mulus",
                            link : tipe+"/1"
                        },
                        {
                            id : 4,
                            banner : "cs.png",
                            productName : "Dagulir",
                            link : tipe+"/1"
                        },
                        {
                            id : 5,
                            banner : "cs.png",
                            productName : "PKPJ",
                            link : tipe+"/1"
                        },
                        {
                            id : 6,
                            banner : "cs.png",
                            productName : "Kuips",
                            link : tipe+"/1"
                        },
                        {
                            id : 7,
                            banner : "cs.png",
                            productName : "Hippams",
                            link : tipe+"/1"
                        },
                    ]
                }
            }
        },
    }
</script>