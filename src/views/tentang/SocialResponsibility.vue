<template>
    <div>
      <Header class-nav="transparent-black" />
        <section id="section-tanggungjawab" class="mt-navbar py-5">
            <div class="container custom">
            <div class="row">
                <div class="col">
                    <h1 class="font-weight-bold">{{$t('nav.socialresponsibility')}} <span class="color-blue">Bank UMKM</span></h1>
                    <p>{{$t('nav.textSocialResponsibility')}}</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-8" id="tahun" v-if="!tahun || !tahun.length">
                    <div class="mt-3">
                        <h5 class="text-center mt-3" v-if="errored">
                            Maaf, kami tidak dapat menemukan informasi
                        </h5>
                        <h5 class="text-center mt-3" v-else>
                            Sedang memuat data tahun...
                        </h5>
                    </div>
                </div>
                <div class="col-md-8" id="tahun" v-else>
                    <div class="mt-3" ref="tahun" v-for="(tahun,index) in tahun" :key="index">
                        <router-link class="btn btn-circle-b-primary btn-sm mr-2 px-3" :class="{'btn-circle-primary' : thisYear == tahun.tahun}"
                        :to="'/socialresponsibility/'+tahun.tahun">{{tahun.tahun}}</router-link>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section class="pb-5" v-if="tahun && tahun.length">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="(konten) in data" :key="konten.id">
                        <div class="box-white">
                            <img :src="$serverURL+konten.cover" class="img-cover" alt="" srcset=""/>
                            <p class="mt-3 mb-1 font-14 color-red">Tahun {{konten.tahun}}</p>
                            <h5 class="font-weight-bold color-darkBlue">{{konten.title}}</h5>
                            <a :href="$serverURL+konten.file" target="_blank" class="btn btn-circle-secondary btn-block mt-3">Lihat Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </div>
  </template>
  


<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
    name : "produkLayanan",
    components : {Header,Footer},
    data() {
        return {
            data : [],
            tahun : [],
            loading: true,
            errored: false,
            thisYear: typeof this.$route.params.tahun === 'undefined'  ? new Date().getFullYear() : this.$route.params.tahun, 
            konten : []
        }
    },
    mounted() {
        this.getTahun()
        this.getYear()
        this.getDefaultContent()
        this.getApi()
    },
    watch: {
        $route(){
            this.getTahun()
            this.getYear()
            this.getDefaultContent()
            this.getApi()
            window.scrollTo(0,0)
        }
    },
    methods: {
        getYear(){
            const year = typeof this.$route.params.tahun === 'undefined'  ? new Date().getFullYear() : this.$route.params.tahun
            this.thisYear = year
        },
        getApi(){
            this.axios
            .get(this.$serverURL+'api/get-tanggung-jawab-perusahaan/'+this.thisYear)
            .then(res => {
                this.data = res.data.data
            })
            .catch(err => {
                this.errored =true
                console.log(err)
            })
            .finally(() => this.loading = false)
        },
        getTahun(){
            this.axios
            .get(this.$serverURL+'api/get-tahun-tanggung-jawab-perusahaan')
            .then(res => {
                this.tahun = res.data.data
            })
            .catch(err => {
                this.errored =true
                console.log(err)
            })
            .finally(() => this.loading = false)
        },
        checkActive(slug) {
            return slug == this.$route.params.slug ? 'active' : ''
        },
        getDefaultContent(){
            const filter = typeof this.$route.params.id === 'undefined' ? "get-default-tanggung-jawab-perusahaan/"+this.thisYear : "get-selected-tanggung-jawab-perusahaan/"+this.thisYear+'/'+this.$route.params.id
            this.axios 
            .get(this.$serverURL+'api/'+filter)
            .then(res => {
                this.konten = res.data.data
            })
            .catch(err => {
                this.errored =true
                console.log(err)
            })
            .finally(() => this.loading = false)
        },
    },
}
</script>
<style scoped>
    #section-layanan img{
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    #tahun {
        display: flex;
        flex-direction: row;
    }
    .link-content{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        border-bottom: none
    }
    .link-content li{
        margin-bottom: 20px;
    }
    .link-content li a.active{
        font-weight: bold;
        color : var(--blue);
    }
    .link-content li a{
        color : var(--darkBlue);
    }
    .link-content li a:hover, .link-content li.active a{
        color : var(--blue);
    }

    .btn-circle-secondary.active{
        background: var(--blue);
        color : white;
    }
    .btn-circle-secondary{
        background: #d6dde9;
    }    

    @media (max-width: 768px) {
    /* #beritaNotSlide {
    display: none;
    } */
    p{
        height: auto;
    }

    .col-8 >>> p p {
        height: auto;
    }
}
</style>