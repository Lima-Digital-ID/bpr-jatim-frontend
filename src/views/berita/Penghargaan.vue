<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">Penghargaan <span class="color-blue">Bank UMKM</span></h1>
                        <p>Penghargaan yang diperoleh Bank UMKM Jawa Timur</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="data in penghargaan" :key="data.id">
                        <a href="">
                            <div class="box-white">
                                <img :src="data.cover" class="img-cover" alt="" srcset="">
                                <h5 class="font-weight-bold color-yellow mt-3 mb-1">{{data.judul}}</h5>
                                <div class="mt-1 mb-0 font-14 color-dark2 font-weight-light" v-html="data.konten">
                                </div>
                            </div>
                        </a>
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
    name : "penghargaan",
    components : {Header,Footer},
    data() {
        return {
            penghargaan : []
        }
    },
    methods: {
        konten(text){
            return text
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-penghargaan')
        .then(res => {
            this.penghargaan = res.data.penghargaan.data
        })
        .catch(err => console.log(err))
    },
}
</script>
<style scoped>
    .img-cover{
        height: 250px !important;
    }
    #berita-section{
        min-height: auto;
    }
    .color-yellow{
        color : #f4a42b
    }
</style>