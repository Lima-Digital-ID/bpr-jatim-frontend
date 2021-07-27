<template>
    <div>
        <Header class-nav="transparent-black" />
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">Berita <span class="color-blue">Bank UMKM</span></h1>
                        <p>Dapatkan berita terbaru dari Bank UMKM Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Berita Disini..." autofocus="true">
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
        </section>

        <section id="berita" class="pt-3 pb-5">
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