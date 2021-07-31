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
                            <form v-on:submit.prevent="searchHandler()">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Berita Disini..." autofocus="true" id="key" ref="key">
                            <span class="fa fa-search"></span>
                             </form>
                        </div>
                        <div class="mt-3">
                             <a href="" class="btn-sm btn btn-circle-secondary mr-2 px-3">Kategori 1</a>
                             <a href="" class="btn-sm btn btn-circle-secondary mr-2 px-3">Kategori 2</a>
                             <a href="" class="btn-sm btn btn-circle-secondary mr-2 px-3">Kategori 3</a>
                             <a href="" class="btn-sm btn btn-circle-secondary mr-2 px-3">Kategori 4</a>
                             <a href="" class="btn-sm btn btn-circle-secondary mr-2 px-3">Kategori 5</a>
                        </div>
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

export default {
    name : "Berita",
    components : {Header,Footer,carousel,BeritaStyle2,BeritaStyle1},
    data() {
        return {
            beritaSlide : [],
            beritaRight : [],
            beritaBox : [],
            search : typeof this.$route.query.key !== 'undefined' && this.$route.query.key != '' ? true : false
        }
    },
    watch: {
        $route(){
            this.getData()
        }
    },
    mounted() {
        this.getData()
        const keyword = typeof this.$route.query.key !== 'undefined' ? this.$route.query.key : ''
        document.getElementById('key').value = keyword

    },
    methods: {
        searchHandler(){
            this.$router.push('/berita?key='+this.$refs.key.value)
        },
        getData(){
            const isKeyword = typeof this.$route.query.key !== 'undefined' && this.$route.query.key != '' ? "?keyword="+this.$route.query.key : ''
            this.axios
                .get(this.$serverURL+'api/get-berita'+isKeyword)
                .then(res => {
                    if(isKeyword!=''){
                        this.beritaBox = res.data.berita['box']
                    }
                    else{
                        this.beritaSlide = res.data.berita['slide']
                        this.beritaRight = res.data.berita['right']
                        this.beritaBox = res.data.berita['box']
                    }
                })
                .catch(err => console.log(err))
        }
    }, 
}
</script>
<style scoped>
    .btn-circle-secondary{
        background: #d6dde9;
        border-color: #d6dde9;
        color : var(--darkBlue);
        border-radius: 50px;
    }
</style>