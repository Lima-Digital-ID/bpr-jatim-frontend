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
                        <router-link class="nav-link" :class="checkActiveMenu([''])" to="/">{{$t('nav.beranda')}}</router-link>
                    </li>
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" :class="checkActiveMenu(['profile','transparansi'])" data-toggle="dropdown" to="">{{$t('nav.tentang')}}</router-link>
                        <div class="dropdown-menu megamenu py-5">
                            <div class="container custom">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-auto">
                                                <h4 class="text-border blue color-blue">{{$t('nav.tentang')}} Bank UMKM</h4>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-auto">
                                                <router-link to="/profile" class="megamenu-link">
                                                    <h6>{{$t('nav.profil')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textProfil')}}</p>
                                                </router-link>
                                                <router-link to="/transparansi" class="megamenu-link">
                                                    <h6>{{$t('nav.transparansi')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textTransparansi')}}</p>
                                                </router-link>
                                                <router-link to="/governance" class="megamenu-link">
                                                    <h6>{{$t('nav.governance')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textGovernance')}}</p>
                                                </router-link>
                                                <router-link to="/socialresponsibility" class="megamenu-link">
                                                    <h6>{{$t('nav.socialresponsibility')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textSocialResponsibility')}}</p>
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
                        <router-link class="nav-link dropdown-toggle" :class="checkActiveMenu(['produk-layanan'])" data-toggle="dropdown" to="">{{$t('nav.produkLayanan')}}</router-link>
                        <div class="megamenu dropdown-menu py-5" id="megaMenuProdukLayanan">
                            <div class="container custom">
                            <div class="row">
                                <div class="col-auto">
                                    <h4 class="text-border blue color-blue">{{$t('nav.produkLayanan')}}</h4>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row mt-5">
                                            <div class="col-auto">
                                                <a href="#" class="megamenu-link" @click="showProdukLayanan(1,$event)">
                                                    <h6>Personal <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textPersonal')}}</p>
                                                </a>
                                                <a href="#" class="megamenu-link" @click="showProdukLayanan(2,$event)">
                                                    <h6>{{$t('nav.bisnis')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textBisnis')}}</p>
                                                </a>
                                           </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <div class="row" v-if="this.loopLayanan.length > 0">
                                            <div class="col-md-4 mb-3" v-for="item in this.loopLayanan" :key="item.id">
                                                <router-link @click.native="hideDropdown" :to="'/produk-layanan/'+item.slug">
                                                    <div class="berita-style-1 small-style">
                                                        <img :src="item.cover" alt="">
                                                        <div class="layer">
                                                            <div class="content d-flex align-items-center justify-content-center">
                                                                    <p class="mb-0">{{item.judul}}</p>
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
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" :class="checkActiveMenu(['produk-layanan'])" data-toggle="dropdown" to="" >{{$t('nav.layanan')}}</router-link>
                        <div class="megamenu dropdown-menu py-5" id="megaMenuProdukLayanan">
                            <div class="container custom">
                            <div class="row">
                                <div class="col-auto">
                                    <h4 class="text-border blue color-blue">{{$t('nav.produkLayanan')}}</h4>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row mt-5">
                                            <div class="col-auto">
                                                <a href="#" class="megamenu-link">
                                                    <h6>{{$t('nav.layanan')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                                    <p class="color-softGrey2 font-weight-light">{{$t('nav.textLayanan')}}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <div class="row">
                                            <div class="col-md-4 mb-3" v-for="item in this.layanan" :key="item.id">
                                                <router-link @click.native="hideDropdown" :to="'/produk-layanan/'+item.slug">
                                                    <div class="berita-style-1 small-style">
                                                        <img :src="item.cover" alt="">
                                                        <div class="layer">
                                                            <div class="content d-flex align-items-center justify-content-center">
                                                                    <p class="mb-0">{{item.judul}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="checkActiveMenu(['umkm'])" to="/umkm">{{$t('nav.umkm')}}</router-link>
                    </li>
                    <li class="nav-item megamenu-nav dropdown">
                        <router-link class="nav-link dropdown-toggle" :class="checkActiveMenu(['berita','promo','epaper','penghargaan','karier','pengaduan'])" data-toggle="dropdown" to="">{{$t('nav.info')}}</router-link>
                        <div class="megamenu dropdown-menu py-5" id="megaMenuProdukLayanan">
                            <div class="container custom">
                            <div class="row">
                                <div class="col-auto">
                                    <h4 class="text-border blue color-blue">{{$t('nav.info')}}</h4>
                                </div>
                            </div>
                                <div class="row mt-5">
                                    <div class="col-md-6">
                                        <router-link to="/berita" class="megamenu-link">
                                            <h6>{{$t('nav.berita')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textBerita')}}</p>
                                        </router-link>
                                        <router-link to="/promo" class="megamenu-link">
                                            <h6>Promo <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textPromo')}}</p>
                                        </router-link>
                                        <router-link to="/epaper" class="megamenu-link">
                                            <h6>ePaper UMKM <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textEpaper')}}</p>
                                        </router-link>
                                        <router-link to="/" class="megamenu-link">
                                            <h6>{{$t('nav.penghargaan')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textPenghargaan')}} </p>
                                        </router-link>
                                        <router-link to="/karier" class="megamenu-link">
                                            <h6>{{$t('nav.karier')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textKarier')}}</p>
                                        </router-link>
                                    </div>
                                    <div class="col-md-6">
                                        <router-link to="/pengaduan" class="megamenu-link">
                                            <h6>{{$t('nav.pengaduan')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textPengaduan')}}</p>
                                        </router-link>
                                        <router-link to="/peta-cabang" class="megamenu-link">
                                            <h6>{{$t('nav.petaCabang')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textPetaCabang')}}</p>
                                        </router-link>
                                        <router-link to="/tips" class="megamenu-link">
                                            <h6>{{$t('nav.tipsKeamanan')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textTipsKeamanan')}}</p>
                                        </router-link>
                                        <router-link to="/info" class="megamenu-link">
                                            <h6>{{$t('nav.infoTerkini')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textInfoTerkini')}}</p>
                                        </router-link>
                                        <router-link to="/kantor" class="megamenu-link">
                                            <h6>{{$t('nav.kantor')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textKantor')}}</p>
                                        </router-link>
                                        <router-link to="/lelang" class="megamenu-link">
                                            <h6>{{$t('nav.lelang')}} <span class="fa fa-chevron-right fa-sm ml-1"></span></h6>
                                            <p class="color-softGrey2 font-weight-light">{{$t('nav.textLelang')}}</p>
                                        </router-link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown"><img :src="this.activeLangImg"></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="#" @click="setLocale('id', $event)" class="nav-link color-darkBlue"><img src="@/assets/images/common/indonesia.png" class="mr-2"> ID</a></li>
                            <li class="nav-item"><a href="#" @click="setLocale('en', $event)" class="nav-link color-darkBlue"><img src="@/assets/images/common/united-kingdom.png" class="mr-2"> EN</a></li>
                        </ul>
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
                layanan : [],
                logo : this.classNav!=="transparent-white" ? 'logo-dark.png' : 'logo.png',
                srcLogo : "",
                activeLangImg : this.imgLang(this.$i18n.locale)
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
            this.showProdukLayanan(3)
        },
        methods: {
            setLocale(locale,event){
                event.preventDefault()
                localStorage.setItem('lang',locale)
                this.$i18n.locale = locale
                this.activeLangImg = this.imgLang(locale)
            },
            imgLang(lang){
                if(lang=='id'){
                    return require('../../assets/images/common/indonesia.png')
                }
                else{
                    return require('../../assets/images/common/united-kingdom.png')
                }
            },
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
                if(typeof event !=="undefined"){
                    event.preventDefault();
                }

                this.axios
                .get(this.$serverURL+'api/get-nav-item-produk-layanan/'+tipe)
                .then(res => {
                    if(typeof event !=="undefined"){
                        this.loopLayanan = res.data.data
                    }
                    else{
                        this.layanan = res.data.data
                    }
                })
                .catch(err => console.log(err))

            },
            hideDropdown(){
                document.getElementById('megaMenuProdukLayanan').classList.remove('show')
            },
            checkActiveMenu(menu){
                const urlNow = this.$route.path.split('/')[1]
                return menu.includes(urlNow) ? 'active' : ''
            }
        },
    }
</script>