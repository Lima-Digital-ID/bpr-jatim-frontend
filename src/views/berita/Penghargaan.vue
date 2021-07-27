<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">Penghargaan <span class="color-blue">Bank UMKM</span></h1>
                        <p>Penghargaan yang diperoleh Bank UMKM Jawa Timur</p>
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
                                <img src="http://www.bprjatim.co.id/img/phg/Damandiri_2018-10-29_04_12_12.jpg" class="img-cover" alt="" srcset="">
                                <h5 class="font-weight-bold color-yellow mt-3 mb-1">Judul Penghargaan</h5>
                                <p class="mt-1 mb-0 font-14 color-dark2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit ....</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/phg/Infobank_2018-10-29_04_13_26.jpg" class="img-cover" alt="" srcset="">
                                <h5 class="font-weight-bold color-yellow mt-3 mb-1">Judul Penghargaan</h5>
                                <p class="mt-1 mb-0 font-14 color-dark2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit ....</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/phg/Greatest_2018-10-29_04_16_11.jpg" class="img-cover" alt="" srcset="">
                                <h5 class="font-weight-bold color-yellow mt-3 mb-1">Judul Penghargaan</h5>
                                <p class="mt-1 mb-0 font-14 color-dark2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit ....</p>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <div class="box-white">
                                <img src="http://www.bprjatim.co.id/img/phg/Platinum_2018-10-29_04_17_30.jpg" class="img-cover" alt="" srcset="">
                                <h5 class="font-weight-bold color-yellow mt-3 mb-1">Judul Penghargaan</h5>
                                <p class="mt-1 mb-0 font-14 color-dark2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit ....</p>
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
    name : "penghargaan",
    components : {Header,Footer}
}
</script>
<style scoped>
    .img-cover{
        height: 250px !important;
    }
    #berita-section{
        min-height: auto;
    }
    .color-yellow{
        color : #f4a42b
    }
</style>