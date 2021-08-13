<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="berita-section" class="d-flex align-items-end py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <h1 class="font-weight-bold">{{$t('nav.umkm')}} <span class="color-blue">Bank UMKM</span></h1>
                        <p>{{$t('descUmkm')}}</p>
                    </div>
                </div>
                <div class="row mt-3 justify-content-center">
                    <div class="col-md-8">
                        <div class="search-hero with-select p-0">
                            <form v-on:submit.prevent="searchHandler()" style="width:100%">
                                <input type="text" class="pl-3 search-hero" :placeholder="$t('cari')+' UMKM '+$t('disini')+'...'" autofocus="true" id="key" ref="key">
                                <select name="" v-model="selected" id="id_kota" ref="id_kota">
                                    <option value="">{{$t('semuaKota')}}</option>
                                    <option :value="data.id" v-for="data in cabang" :key="data.id">{{data.nama_kota}}</option>
                                </select>
                                <button type="submit">
                                <span class="fa fa-search"></span>
                                </button>
                            </form>
                        </div>
                        <div class="text-center list-kota mt-3">
                            <router-link to="/umkm" class="color-darkBlue font-14 mx-2" @click.native="setValueNull()">{{$t('semuaKota')}}</router-link>
                            <router-link @click.native="setValueNull()" :to="'/umkm/'+data.id" class="color-red font-14 mx-2" v-for="data in cabang" :key="data.id">{{data.nama_kota}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="promo" class="pb-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3" v-for="(data,index) in umkm" :key="data.id">
                        <a href="" data-toggle="modal" @click="getDetail(index)" data-target="#modal-detail">
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
        <div class="modal fade" id="modal-detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="namaUsaha"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container custom">
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="" style="border-radius : 14px" id='fotoUsaha' class="img-fluid" alt="">
                                </div>
                                <div class="col-md-7">
                                    <p class="font-weight-bold color-red mb-1">{{$t('deskripsi')}}</p>
                                    <p id="deskripsi"></p>
                                    <p class="font-weight-bold color-red mb-1">{{$t('pemilik')}}</p>
                                    <p id="pemilik"></p>
                                    <p class="font-weight-bold color-red mb-1">{{$t('kota')}}</p>
                                    <p id="kota"></p>
                                    <p class="font-weight-bold color-red mb-1">{{$t('alamat')}}</p>
                                    <p id="alamat"></p>
                                    <p class="font-weight-bold color-red mb-1">{{$t('noTelp')}}</p>
                                    <p id="noHp"></p>
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
    name : 'umkmBinaan',
    components : {Header,Footer},
    data() {
        return {
            umkm : [],
            cabang : [],
            selected : ""
        }
    },
    watch: {
        $route(){
            this.getApi()
            window.scrollTo(0,0)
        },
    },
    mounted() {
        this.getApi()
        const keyword = typeof this.$route.query.key !== 'undefined' ? this.$route.query.key : ''
        const id_kota = typeof this.$route.query.id_kota !== 'undefined' ? this.$route.query.id_kota : ''
        document.getElementById('key').value = keyword
        document.getElementById('id_kota').value = id_kota
        this.selected = id_kota
    },
    methods: {
        getApi(){
            let filter = ""
            if(typeof this.$route.params.idKota !== 'undefined'){
                filter = "/"+this.$route.params.idKota
            }
            else if(typeof this.$route.query.key !== 'undefined'){
                filter = "?key="+this.$route.query.key+"&id_kota="+this.$route.query.id_kota
            }

            this.axios
            .get(this.$serverURL+'api/get-umkm-binaan'+filter)
            .then(res => {
                this.umkm = res.data.data
            })
            .catch(err => console.log(err))

            this.axios
            .get(this.$serverURL+'api/get-cabang')
            .then(res => {this.cabang = res.data.data})
            .catch(err => console.log(err))
        },
        searchHandler(){
            this.$router.push('/umkm?key='+this.$refs.key.value+"&id_kota="+this.$refs.id_kota.value)
        },
        setValueNull(){
            document.getElementById('key').value = ''
            this.selected = ''
        },
        getDetail(index){
            const data = this.umkm[index]
            document.getElementById('namaUsaha').innerHTML = data.jenis_usaha
            document.getElementById('fotoUsaha').src = data.foto
            document.getElementById('deskripsi').innerHTML = data.deskripsi
            document.getElementById('pemilik').innerHTML = data.nama
            document.getElementById('kota').innerHTML = data.nama_kota
            document.getElementById('alamat').innerHTML = data.alamat
            document.getElementById('noHp').innerHTML = data.no_telp
        }
    },
}
</script>

<style scoped>
    .img-cover{
        height: 252px !important;
    }
    @media (min-width: 992px){
        .modal-dialog {
            max-width: 700px;
            margin: 1.75rem auto;
        }    
    }
    @media (min-width: 576px){
        .modal-lg, .modal-xl {
            max-width: 1000px;
        }
    }   
    .list-kota a{
        display: inline-block;
    } 
</style>