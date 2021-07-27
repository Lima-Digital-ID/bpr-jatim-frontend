<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">E-Paper <span class="color-blue">Bank UMKM</span></h1>
                        <p>Dapatkan e-paper menarik dari Bank UMKM Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Berita Disini..." autofocus="true">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/epaper/majalah%20UMKM%20edisi%2021-1_2021-03-31_17:45:00.jpg" class="img-cover" alt="" srcset="">
                                <p class="mt-3 mb-1 font-14 color-red">Maret 2021</p>
                                <h5 class="font-weight-bold color-darkBlue">Judul E-Paper</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/epaper/majalah%20UMKM%20edisi%2020-1_2020-09-24_9:06:36.jpg" class="img-cover" alt="" srcset="">
                                <p class="mt-3 mb-1 font-14 color-red">Maret 2021</p>
                                <h5 class="font-weight-bold color-darkBlue">Judul E-Paper</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/epaper/majalah%20UMKM%20edisi%2018-1_2019-12-30_11:08:45.jpg" class="img-cover" alt="" srcset="">
                                <p class="mt-3 mb-1 font-14 color-red">Maret 2021</p>
                                <h5 class="font-weight-bold color-darkBlue">Judul E-Paper</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/epaper/majalah%20UMKM%20edisi%2016-1_2019-08-19_10:54:42.jpg" class="img-cover" alt="" srcset="">
                                <p class="mt-3 mb-1 font-14 color-red">Maret 2021</p>
                                <h5 class="font-weight-bold color-darkBlue">Judul E-Paper</h5>
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
    name : "epaper",
    components : {Header,Footer}
}
</script>
<style scoped>
    .img-cover{
        height: 316px !important;
    }
</style>