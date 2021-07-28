<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section id="section-layanan" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <img :src="this.detail.cover" class="img-fluid" alt="">
                        <h1 class="font-weight-bold mt-5">{{this.detail.judul}}</h1>
                        <p>{{this.detail.text_top}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="detail" class="py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        <ul class="link-content">
                            <li v-for="data in sideMenu" :key="data.id"><router-link :to="'/produk-layanan/'+data.slug">{{data.judul}}</router-link></li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div class="box-white" v-html="this.detail.konten">
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
            detail : [],
            sideMenu : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-konten-produk-layanan/'+this.$route.params.slug)
        .then(res => {
            this.detail = res.data.data
            this.sideMenu = res.data.sidemenu
        })
        .catch(err => console.log(err))
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
</style>