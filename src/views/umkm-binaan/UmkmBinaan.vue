<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <h1 class="font-weight-bold">UMKM Binaan <span class="color-blue">Bank UMKM</span></h1>
                        <p>Bank UMKM Jawa Timur memiliki komitmen untuk senantiasa membantu mengembangkan potensi-potensi UMKM di Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-md-8">
                        <div class="search-hero with-select p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Berita Disini..." autofocus="true">
                            <select name="" id="">
                                <option value="">Semua Kota</option>
                            </select>
                            <button>
                            <span class="fa fa-search"></span>
                            </button>
                        </div>
                        <div class="text-center mt-3">
                            <a href="" class="color-red font-14 mx-2">Kota Surabaya</a>
                            <a href="" class="color-red font-14 mx-2">Kota Malang</a>
                            <a href="" class="color-red font-14 mx-2">Kota Blitar</a>
                            <a href="" class="color-red font-14 mx-2">Kota Mojokerto</a>
                            <a href="" class="color-red font-14 mx-2">Kota Pasuruan</a>
                            <a href="" class="color-red font-14 mx-2">Kota Kediri</a>
                            <a href="#" class="dropdown">
                                <span class="color-red font-14 mx-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Kota Lainnya <span class="fa fa-chevron-down"></span>
                                </span>
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
        <section id="promo" class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/umkm/HELMY%20ISMANTO_2018-11-01_10_50_24.jpg" class="img-cover" alt="">
                                <p class="mb-1 color-darkBlue mt-3 font-weight-bold">Usaha Industri Pangan</p>
                                <p class="font-13 color-red mb-1"><span class="fa fa-user-astronaut mr-2"></span>  David Setya</p>
                                <p class="font-13 color-red mb-0"><span class="fa fa-map-marker-alt mr-2"></span> Surabaya</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/umkm/LAISMIN%20_2018-11-01_10_54_25.jpg" class="img-cover" alt="">
                                <p class="mb-1 color-darkBlue mt-3 font-weight-bold">Usaha Industri Pangan</p>
                                <p class="font-13 color-red mb-1"><span class="fa fa-user-astronaut mr-2"></span>  David Setya</p>
                                <p class="font-13 color-red mb-0"><span class="fa fa-map-marker-alt mr-2"></span> Surabaya</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/umkm/Griya%20Dizza_2018-11-01_11_01_26.jpg" class="img-cover" alt="">
                                <p class="mb-1 color-darkBlue mt-3 font-weight-bold">Usaha Industri Pangan</p>
                                <p class="font-13 color-red mb-1"><span class="fa fa-user-astronaut mr-2"></span>  David Setya</p>
                                <p class="font-13 color-red mb-0"><span class="fa fa-map-marker-alt mr-2"></span> Surabaya</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/umkm/NORIYONO_2020-02-14_13:15:08.jpg" class="img-cover" alt="">
                                <p class="mb-1 color-darkBlue mt-3 font-weight-bold">Usaha Industri Pangan</p>
                                <p class="font-13 color-red mb-1"><span class="fa fa-user-astronaut mr-2"></span>  David Setya</p>
                                <p class="font-13 color-red mb-0"><span class="fa fa-map-marker-alt mr-2"></span> Surabaya</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>        
    </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
    name : 'umkmBinaan',
    components : {Header,Footer}
}
</script>

<style scoped>
    .img-cover{
        height: 252px !important;
    }
</style>