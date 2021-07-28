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
                      <div v-if="beritaSlide.length>0">
                            <carousel class="owl-berita" :nav="false" :loop="true" :margin="10" :dots="true" :items="1">
                                <div class="item mb-3" v-for="data in beritaSlide" :key="data.id">
                                    <router-link :to="'/berita/'+data.slug">
                                        <BeritaStyle1 :data="data" add-class="h-400"/>
                                    </router-link>
                                </div>
                            </carousel>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="img-berita-style-3 mb-3" v-for="data in beritaRight" :key="data.id">
                            <router-link :to="'/berita/'+data.slug">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="img">
                                            <div class="layer"></div>
                                            <span class="label-blue-rgb font-13 px-3">Info</span>
                                            <img :src="data.cover" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="col-8 pl-1">
                                        <h6 class="mb-0 font-weight-bold color-darkBlue">{{data.judul}}</h6>
                                        <p class="my-1 color-red font-13">{{data.tgl}}</p>
                                        <p class="font-13 mt-1 color-darkBlue">{{data.konten}}...</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3" v-for="data in beritaBox" :key="data.id">
                        <router-link :to="'/berita/'+data.slug">
                            <BeritaStyle2 :data="data"/>
                        </router-link>
                    </div>
                </div>
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
import BeritaStyle1 from '@/components/berita/BeritaStyle1'
import {myFunction} from '@/helper/myFunction'

export default {
    name : "Berita",
    components : {Header,Footer,carousel,BeritaStyle2,BeritaStyle1},
    data() {
        return {
            beritaSlide : [],
            beritaRight : [],
            beritaBox : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-berita')
        .then(res => {
            this.beritaSlide = res.data.berita['slide']
            this.beritaRight = res.data.berita['right']
            this.beritaBox = res.data.berita['box']
        })
        .catch(err => console.log(err))
    },
    methods: {
        tglIndo(tgl){
            return myFunction.tglIndo(tgl)
        }
    }, 
}
</script>