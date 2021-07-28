<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">Promo <span class="color-blue">Bank UMKM</span></h1>
                        <p>Dapatkan promo menarik dari Bank UMKM Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Promo Disini..." autofocus="true">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="promo" class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="data in promo" :key="data.id">
                        <a href="">
                            <div class="box-white">
                                <img :src="data.cover" class="img-cover" alt="">
                                <h5 class="font-weight-bold color-red mt-3">{{data.judul}} ...</h5>
                                <p class="mb-0 font-14 color-dark2 font-weight-light">{{data.konten}} ...</p>
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
    name : 'Promo',
    components : {Header,Footer},
    data() {
        return {
            promo : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-promo')
        .then(res => {
            this.promo = res.data.promo.data
        })
        .catch(err => console.log(err))
    },

}
</script>

<style scoped>
    .img-cover{
        height: 252px !important;
    }
</style>