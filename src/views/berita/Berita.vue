<template>
    <div>
        <Header class-nav="transparent-black" />
        <section id="hero-content" class="section-hero-content" style="background-image:url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80')">
            <div class="hero-content d-flex align-items-center">
                <div class="container custom py-5">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-7">
                            <h2 class="color-white font-weight-bold">Berita Bank UMKM</h2>
                            <p class="color-white font-14 font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam perspiciatis molestiae, quo velit, sit incidunt,    </p>
                            <div class="search-hero">
                                <input type="text" class="search-hero" placeholder="Cari Berita Disini..." autofocus="true">
                                <span class="fa fa-search"></span>
                            </div>
                            <br>
                            <a href="" class="btn btn-primary mr-2">Bisnis</a>
                            <a href="" class="btn btn-primary mr-2">Info Bank UMKM</a>
                            <a href="" class="btn btn-primary mr-2">Pinjaman</a>
                            <a href="#" class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Kategori Lainnya
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </a>                        
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        <section id="berita" class="py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-6">
                        <carousel class="owl-berita" :nav="false" :loop="true" :margin="10" :dots="true" :items="1">
                            <div class="item mb-3">
                                <div class="berita-style-1 h-400">
                                    <img src="@/assets/images/berita/1.png" alt="">
                                    <div class="layer">
                                        <div class="content">
                                            <span class="label-blue-rgb px-3 py-1 font-13">Bisnis</span>
                                            <div class="bottom">
                                                <h5 class="font-weight-bold  mb-1">Bussiness Matching Petik Keuangan</h5>
                                                <p class="font-13 font-weight-light">Kegiatan dengan tema One Pesantren One Product resmi di buka
                                                    oleh Gubernur Jawa Timur Ibu Khofifah...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item mb-3">
                                <div class="berita-style-1 h-400">
                                    <img src="@/assets/images/berita/1.png" alt="">
                                    <div class="layer">
                                        <div class="content">
                                            <span class="label-blue-rgb px-3 py-1 font-13">Bisnis</span>
                                            <div class="bottom">
                                                <h5 class="font-weight-bold  mb-1">Bussiness Matching Petik Keuangan</h5>
                                                <p class="font-13 font-weight-light">Kegiatan dengan tema One Pesantren One Product resmi di buka
                                                    oleh Gubernur Jawa Timur Ibu Khofifah...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                    </div>
                    <div class="col-md-6">
                        <div class="img-berita-style-3 mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <div class="img">
                                        <div class="layer"></div>
                                        <span class="label-blue-rgb font-13 px-3">Info</span>
                                        <img src="@/assets/images/berita/2.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-8 pl-1">
                                    <h6 class="mb-0 font-weight-bold">Berita 1 Judulnya A</h6>
                                    <a href="" class="color-red font-13">20 Juli 2021, 17:00</a>
                                    <p class="font-13 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis Nobis officiis</p>
                                </div>
                            </div>
                        </div>
                        <div class="img-berita-style-3 mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <div class="img">
                                        <div class="layer"></div>
                                        <span class="label-blue-rgb font-13 px-3">Info</span>
                                        <img src="@/assets/images/berita/2.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-8 pl-1">
                                    <h6 class="mb-0 font-weight-bold">Berita 1 Judulnya A</h6>
                                    <a href="" class="color-red font-13">20 Juli 2021, 17:00</a>
                                    <p class="font-13 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis Nobis officiis</p>
                                </div>
                            </div>
                        </div>
                        <div class="img-berita-style-3 mb-3">
                            <div class="row">
                                <div class="col-4">
                                    <div class="img">
                                        <div class="layer"></div>
                                        <span class="label-blue-rgb font-13 px-3">Info</span>
                                        <img src="@/assets/images/berita/2.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-8 pl-1">
                                    <h6 class="mb-0 font-weight-bold">Berita 1 Judulnya A</h6>
                                    <a href="" class="color-red font-13">20 Juli 2021, 17:00</a>
                                    <p class="font-13 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis Nobis officiis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BeritaStyle2 class="mt-4"/>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer'
import carousel from 'vue-owl-carousel'
import BeritaStyle2 from '@/components/berita/BeritaStyle2'
export default {
    name : "Berita",
    components : {Header,Footer,carousel,BeritaStyle2},
}
</script>