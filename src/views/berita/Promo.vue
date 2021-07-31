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
                            <form v-on:submit.prevent="searchHandler()">
                                <input type="text" class="pl-3 search-hero" placeholder="Cari Promo Disini..." autofocus="true" id="key" ref="key">
                                <span class="fa fa-search"></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="promo" class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="(data, index) in promo" :key="data.id">
                        <a href="" data-toggle="modal" @click="getDetail(index)" data-target="#modal-detail">
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
        <div class="modal fade" id="modal-detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="judul"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container custom">
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="" style="border-radius : 14px" id='cover' class="img-fluid" alt="">
                                </div>
                                <div class="col-md-7">
                                    <p id="konten"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            this.$router.push('/promo?key='+this.$refs.key.value)
        },
        getData(){
            const isKeyword = typeof this.$route.query.key !== 'undefined' ? "?keyword="+this.$route.query.key : ''
            this.axios
            .get(this.$serverURL+'api/get-promo'+isKeyword)
            .then(res => {
                this.promo = res.data.promo.data
            })
            .catch(err => console.log(err))
        },
        getDetail(index){
            const data = this.promo[index]
            document.getElementById('judul').innerHTML = data.judulFull
            document.getElementById('cover').src = data.cover
            document.getElementById('konten').innerHTML = data.konten
        }
    },

}
</script>

<style scoped>
    .img-cover{
        height: 252px !important;
    }
</style>