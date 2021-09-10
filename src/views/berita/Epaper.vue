<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">E-Paper <span class="color-blue">Bank UMKM</span></h1>
                        <p>{{$t('nav.textEpaper')}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <form v-on:submit.prevent="searchHandler()">
                                <input type="text" class="pl-3 search-hero" :placeholder="$t('cari')+' E-Paper '+$t('disini')+'...'" autofocus="true" id="key" ref="key">
                                <span class="fa fa-search"></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="data in epaper" :key="data.id">
                        <div class="box-white">
                            <img :src="data.cover" class="img-cover" alt="" srcset="">
                            <p class="mt-3 mb-1 font-14 color-red">{{data.tgl}}</p>
                            <h5 class="font-weight-bold color-darkBlue">{{data.judul}}</h5>
                            <a :href="data.konten" target="_blank" class="btn btn-circle-secondary btn-block mt-3">Baca Sekarang</a>
                        </div>
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
    watch:{
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
            this.$router.push('/epaper?key='+this.$refs.key.value)
        },
        getData(){
            const isKeyword = typeof this.$route.query.key !== 'undefined' ? "?keyword="+this.$route.query.key : ''

            this.axios
            .get(this.$serverURL+'api/get-epaper'+isKeyword)
            .then(res => {
                this.epaper = res.data.epaper.data
                console.log(this.epaper)
            })
            .catch(err => console.log(err))
        }
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