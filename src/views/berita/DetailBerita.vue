<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section class="mt-navbar pb-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold mt-5">{{this.detail.judul}}</h1>
                        <span class="label-blue-rgb px-3 py-1 font-13">{{this.detail.kategori.kategori}}</span>
                        <div class="mt-3 d-flex font-14 justify-content-between">
                            <p class="color-red">{{this.detail.tgl}}</p>
                            <div class="d-flex">
                                <p class="mr-3">
                                    <span class="fa fa-user"></span> Admin
                                </p>
                                <p>
                                    <span class="fa fa-eye"></span> {{this.detail.telah_dilihat}}x
                                </p>
                            </div>
                        </div>
                        <div class="box-white no-hover" id="konten">
                            <img :src="this.detail.cover" class="img-fluid mb-4" alt="">
                            <p class="color-dark2" v-html="this.detail.konten"></p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-5">
                    <div class="col-md-6 text-center">
                        <h3 class="font-weight-bold">Berita Lainnya</h3>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3" v-for="data in beritaBox" :key="data.id">
                        <router-link :to="'/berita/'+data.slug">
                            <BeritaStyle2 :data="data"/>
                        </router-link>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col text-center">
                        <router-link to="/berita" class="btn btn-primary px-4 py-2">Lebih Banyak Berita</router-link>
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
import BeritaStyle2 from '@/components/berita/BeritaStyle2'
import {myFunction} from '@/helper/myFunction'

export default {
    name : "detailBerita",
    components : {Header,Footer,BeritaStyle2},
    data() {
        return {
            detail : [],
            beritaBox : []
        }
    },
    mounted() {
        this.updatePage(this.$route.params.slug)
    },
    watch: {
        $route() {
            this.updatePage(this.$route.params.slug)
            window.scrollTo(0,0)
        }
    },    
    methods: {
        tglIndo(tgl){
            return myFunction.tglIndo(tgl)
        },
        updatePage(param){
            this.axios
            .get(this.$serverURL+'api/get-detail-berita/'+param)
            .then(res => {
                this.detail = res.data.berita
            })
            .catch(err => console.log(err))

            this.axios
            .get(this.$serverURL+'api/get-berita-home')
            .then(res => {
                this.beritaSlide = res.data.data['slide']
                this.beritaBox = res.data.data['box']
            })
            .catch(err => console.log(err))
        }
    }, 
}
</script>
<style scoped>
#konten >>> p img {
        /* height: auto; */
        width: 100%;
    }
@media (max-width: 768px) {
    #konten >>> p img {
        /* height: auto; */
        width: 100%;
    }

    h1 {
        font-size: 2rem;
        /* text-align: center; */
    }
}
</style>