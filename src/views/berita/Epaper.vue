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
                            <input type="text" class="pl-3 search-hero" placeholder="Cari E-Paper Disini..." autofocus="true">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="data in epaper" :key="data.id">
                        <a href="">
                            <div class="box-white">
                                <img :src="data.cover" class="img-cover" alt="" srcset="">
                                <p class="mt-3 mb-1 font-14 color-red">{{data.tgl}}</p>
                                <h5 class="font-weight-bold color-darkBlue">{{data.judul}}</h5>
                                <a href="" class="btn btn-circle-secondary btn-block mt-3">Baca Sekarang</a>
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
    components : {Header,Footer},
    data() {
        return {
            epaper : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-epaper')
        .then(res => {
            this.epaper = res.data.epaper.data
        })
        .catch(err => console.log(err))
    },
}
</script>
<style scoped>
    .img-cover{
        height: 316px !important;
    }
    .btn-circle-secondary{
        padding-top : 0.8rem;
        padding-bottom: 0.8rem;
        background: #eaeefb;
    }
</style>