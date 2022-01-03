<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section id="section-layanan" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold text-center">Tanggung Jawab  <span class="color-blue">Perusahaan</span></h1>
                        <!-- <div class="box-white p-4 mt-4">
                            <section v-if="errored">
                            <p>Maaf, kami tidak dapat mengambil informasi ini saat ini, silakan coba lagi nanti</p>
                            </section>

                            <section v-else>
                                <div v-if="loading">Loading...</div>

                                <div v-else v-for="(datas) in data" :key="datas.id">
                                    <div class="card mt-2">
                                        <div class="card-body">
                                            <b>{{datas.tahun}}</b>
                                            <p class="color-dark2 mt-3" v-html="datas.artikel"></p>
                                            <a :href="$serverURL+datas.file" download="true"><i class="far fa-file-pdf"></i> {{datas.file}}</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div> -->
                    </div>
                </div>
            </div>
            <div class="container custom mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <ul class="link-content">
                            <li ref="tahun" v-for="(tahun,index) in tahun" :key="index">
                                <router-link :class="{  'font-weight-bold color-blue' : thisYear == tahun.tahun}" :to="'/socialresponsibility/'+tahun.tahun">{{tahun.tahun}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <router-link ref="data" v-for="(title,index) in data" :key="index" :to="'/socialresponsibility/'+thisYear+'/'+title.id" class="btn btn-circle-b-primary btn-sm px-3 mr-2" :class="{'btn-circle-primary' : title.id===konten.id}">{{title.title}}</router-link>

                        <div class="box-white mt-3">
                            <h5 class="font-weight-bold">{{konten.title}} <small class="font-weight-bold  color-red float-right">{{konten.tahun}}</small></h5>
                            <div v-html="konten.artikel"></div>
                            <a style="word-wrap:break-word" :href="$serverURL+konten.file" download="true"><i class="far fa-file-pdf"></i> {{konten.file}}</a>
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
            .get(this.$serverURL+'api/get-tahun-tanggung-jawab-perusahaan/')
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
</style>