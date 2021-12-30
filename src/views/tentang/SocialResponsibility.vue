<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section id="section-layanan" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold text-center">Tanggung Jawab  <span class="color-blue">Perusahaan</span></h1>
                        <div class="box-white p-4 mt-4">
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

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section id="detail" class="py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        
                    </div>
                    <div class="col-md-9">
                        <div class="box-white" v-html="this.detail.konten">
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
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
            loading: true,
            errored: false

        }
    },
    mounted() {
        this.getApi()
    },
    watch: {
        $route(){
            this.getApi()
            window.scrollTo(0,0)
        }
    },
    methods: {
        getApi(){
            this.axios
            .get(this.$serverURL+'api/get-tanggung-jawab-perusahaan/')
            .then(res => {
                this.data = res.data.data
                console.log(this.data)
            })
            .catch(err => {
                this.errored =true
                console.log(err)
            })
            .finally(() => this.loading = false)
        },
        checkActive(slug) {
            return slug == this.$route.params.slug ? 'active' : ''
        }
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