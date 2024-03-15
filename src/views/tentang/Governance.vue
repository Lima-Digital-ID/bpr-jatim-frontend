<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section id="section-layanan" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">{{$t('nav.governance')}} <span class="color-blue">Bank BPR Jawa Timur</span></h1> 
                        <p>{{$t('nav.textGovernance')}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <form v-on:submit.prevent="searchHandler()">
                                <input type="text" class="pl-3 search-hero" :placeholder="$t('cari') + ' ' + $t('nav.governance') + ' ' + $t('disini')+ '...'" autofocus="true" id="key" ref="key">
                                <span class="fa fa-search"></span>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold text-center">Laporan governance <span class="color-blue">Bank BPR Jawa Timur</span></h1>
                        <div class="box-white p-4 mt-4">
                            <section v-if="errored">
                            <p>Maaf, kami tidak dapat mengambil informasi ini saat ini, silakan coba lagi nanti</p>
                            </section>

                            <section v-else>
                                <div v-if="loading">Loading...</div>

                                <div v-else
                                        v-for="(datas) in data" :key="datas.id">

                                    <div class="card mt-2">
                                        <div class="card-body">
                                            <b>{{datas.tahun}}</b>
                                            <br>
                                            <a :href="$serverURL+datas.file" download="true"><i class="far fa-file-pdf"></i> {{datas.file}}</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div> -->
            </div>
        </section>
        <section class="pb-5">
            <div class="container custom">
                <div class="row" v-if="governance && governance.length">
                    <div class="col-md-3" v-for="data in governance" :key="data.id">
                        <div class="box-white">
                            <img :src="data.cover" class="img-cover" alt="" srcset="">
                            <p class="mt-3 mb-1 font-14 color-red">Tahun {{data.tahun}}</p>
                            <h5 class="font-weight-bold color-darkBlue">{{data.title}}</h5>
                            <a :href="data.file" target="_blank" class="btn btn-circle-secondary btn-block mt-3">Lihat Laporan</a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center" v-else>
                    <div class="col-md-5">
                        <div class="p-5 mt-5 mb-5">
                            <h5 class="text-center mt-3">Maaf, kami tidak dapat menemukan informasi</h5>
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
    name : "governance",
    components : {Header,Footer},
    data() {
        return {
            // detail : [],
            // sideMenu : [],
            // data: null,
            // loading: true,
            // errored: false
            governance: []
        }
    },
    watch: {
        $route(){
            this.getData();
        }
    },
    mounted() {
        this.getData();
        const keyword = typeof this.$route.query.key !== 'undefined' ? this.$route.query.key : ''
        document.getElementById('key').value = keyword
    },
    methods: {
        searchHandler() {
            this.$router.push('/governance?key=' + this.$refs.key.value)
        },
        getData() {
            const isKeyword = typeof this.$route.query.key !== 'undefined' ? "?keyword="+this.$route.query.key : ''

            this.axios
            .get(this.$serverURL+'api/get-laporan-keuangan'+isKeyword)
            .then(res => {
                this.governance = res.data.data
                console.log(this.governance);
            })
            .catch(err => console.log(err));
        }
    },
}
</script>

<style scoped>
    #section-layanan img{
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    .img-cover {
        height: 316px !important;
    }

    .btn-circle-secondary {
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        background: #eaeefb;
    }

    /* .link-content{
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
    } */
</style>