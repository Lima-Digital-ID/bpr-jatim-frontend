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
                    <div class="col-md-3" v-for="(data,index) in penghargaan" :key="data.id">
                        <a href="" data-toggle="modal" @click="getDetail(index)" data-target="#modal-detail">
                            <div class="box-white">
                                <img :src="data.cover" class="img-cover" alt="" srcset="">
                                <h5 class="text-center font-weight-bold color-yellow mt-3 mb-1">{{data.judul}}</h5>
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
    name : "penghargaan",
    components : {Header,Footer},
    data() {
        return {
            penghargaan : []
        }
    },
    methods: {
        getDetail(index){
            const data = this.penghargaan[index]
            document.getElementById('judul').innerHTML = data.judul
            document.getElementById('cover').src = data.cover
            document.getElementById('konten').innerHTML = data.konten
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