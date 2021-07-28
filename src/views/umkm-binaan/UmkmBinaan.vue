<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <h1 class="font-weight-bold">UMKM Binaan <span class="color-blue">Bank UMKM</span></h1>
                        <p>Bank UMKM Jawa Timur memiliki komitmen untuk senantiasa membantu mengembangkan potensi-potensi UMKM di Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-md-8">
                        <div class="search-hero with-select p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari UMKM Disini..." autofocus="true">
                            <select name="" id="">
                                <option value="">Semua Kota</option>
                                <option :value="data.id" v-for="data in cabang" :key="data.id">{{data.nama_kota}}</option>
                            </select>
                            <button>
                            <span class="fa fa-search"></span>
                            </button>
                        </div>
                        <div class="text-center mt-3">
                            <router-link to="/umkm" class="color-darkBlue font-14 mx-2">Semua Kota</router-link>
                            <router-link :to="'/umkm/'+data.id" class="color-red font-14 mx-2" v-for="data in cabang" :key="data.id">{{data.nama_kota}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="promo" class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="data in umkm" :key="data.id">
                        <a href="">
                            <div class="box-white">
                                <img :src="data.foto" class="img-cover" alt="">
                                <p class="color-darkBlue mt-3 font-weight-bold">{{data.jenis_usaha}}</p>
                                <p class="font-13 color-red mb-1"><span class="fa fa-user-astronaut mr-2"></span>  {{data.nama}}</p>
                                <p class="font-13 color-red mb-0"><span class="fa fa-map-marker-alt mr-2"></span>{{data.nama_kota}}</p>
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
    name : 'umkmBinaan',
    components : {Header,Footer},
    data() {
        return {
            umkm : [],
            cabang : []
        }
    },
    mounted() {
        const idKota = typeof this.$route.params.idKota !== 'undefined' ? "/"+this.$route.params.idKota : ''
        this.axios
        .get(this.$serverURL+'api/get-umkm-binaan'+idKota)
        .then(res => (this.umkm = res.data.data))
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-cabang')
        .then(res => (this.cabang = res.data.data))
        .catch(err => console.log(err))
    },
}
</script>

<style scoped>
    .img-cover{
        height: 252px !important;
    }
</style>