<template>
    <section id="hero" style="height: 100vh;">
        <div class="video-container" :class="{focus : heroFocus}">
            <Header :nav-transition="navTransition" class-nav="transparent-white"/>
            <div class="close-focus" @click="toggleHeroFocus"><span class="fa fa-times-circle"></span></div>
            <div v-html="this.video.vidio_url"></div>
            <div class="layer"></div>
            <div class="hero d-flex align-items-center">
                <div class="container custom pl-4">
                    <div class="row">
                        <div class="col-md-7" id="hero-text">
                            <div class="row my-5">
                                <div class="col-md-12">
                                    <h1 class="font-weight-bold"> <span class="color-blue">SELAMAT DATANG DI</span> <br> <span class="color-white">BANK UMKM JAWA TIMUR</span></h1>
                                    <a href="#" @click="toggleHeroFocus"><span class="playVideo fa fa-play color-blue mt-4"></span> </a>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col">
                                    <a href="#" class="font-weight-light" @click="togglePromo">
                                        <span class="color-blue fa fa-newspaper fa-lg mr-2"></span> 
                                        <span class="color-white">Promo Terbaru</span>
                                    </a>
                                    <a href="#" class="ml-4 font-weight-light" @click="scrollTo('#kurs-section')" data-target="#kurs-section">
                                        <span class="color-blue fa fa-coins fa-lg mr-2"></span> 
                                        <span class="color-white">Kurs Bank UMKM</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 d-sm-block d-none" id="hero-simulasi">
                            <div class="simulasi">
                                <div class="top p-4">
                                    <h4 class="text-center color-white font-weight-bold">Simulasi Angsuran Pinjaman</h4>
                                    <p class="text-center color-white mb-0">Dengan Bunga {{bunga}}%</p>
                                </div>
                                <div class="bottom p-4">
                                    <input type="text" id="nominal" @keyup="getEstimasi" @change="toRupiah" class="form-control" placeholder="Nominal (IDR)">
                                    <br>
                                    <select name="" id="tenor" @change="getEstimasi" class="form-control">
                                        <option value="">---Tenor---</option>
                                        <option :value="data.tenor" v-for="data in tenor" :key="data.id">{{data.tenor}} Tahun</option>
                                    </select>
                                    <h4 class="mt-3 text-center font-weight-bold">Estimasi Angsuran Perbulan <br> Rp. <span id="estimasi">0</span></h4>
                                    <div class="row mt-5">
                                        <div class="col text-center">
                                        <a href="#">
                                            <button class="btn btn-primary px-4 py-2">Ajukan Pinjaman</button>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="promo-on-hero py-3" :class="{show : clickedPromo}">
                    <div class="container custom">
                        <div class="text-right font-13 hide-promo c-pointer color-white"  @click="togglePromo">
                            <span class="fa fa-chevron-down mr-2"></span> Sembunyikan Promo 
                        </div>
                        <div v-if="promo.length>0">
                            <carousel class="mt-3 owl-promo" :nav="true" :loop="true" :margin="20" :dots="false" :responsive="{0:{items:3},600:{items:4},1000:{items:6}}" :navText="customNav">
                                <div class="item" v-for="data in promo" :key="data.id">
                                    <a href="">
                                        <img :src="data.cover" class="img-cover img-promo" alt="">
                                        <div class="font-weight-bold font-16 color-red mt-2">{{data.judul}}...</div>
                                    </a>
                                </div>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Header from '@/components/common/Header';
import carousel from 'vue-owl-carousel'
import {myFunction} from '@/helper/myFunction'

export default {
    name : 'Hero',
    components : {
        Header,
        carousel,
    },
    data(){
        return{
            clickedPromo : false,
            heroFocus : false,
            navTransition : false,
            promo: [],
            customNav : [
                "<span class='fa fa-chevron-left'></span>",
                "<span class='fa fa-chevron-right'></span>"
                ],
            bunga : '',
            tenor : [],
            video : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-promo-home')
        .then(res => (this.promo = res.data.data))
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-bunga-home')
        .then(res => (this.bunga = res.data.data))
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-tenor-home')
        .then(res => (this.tenor = res.data.data))
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-video-home')
        .then(res => {
            this.video = res.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        scrollTo(target){
            myFunction.scrollTo(target)
        },
        togglePromo(){
            this.clickedPromo = !this.clickedPromo
        },
        toggleHeroFocus(){
            this.heroFocus = !this.heroFocus
            this.clickedPromo = false
            this.navTransition= true
        },
        toRupiah() {
            document.getElementById('nominal').value = myFunction.rupiah(parseFloat(document.getElementById('nominal').value))
        },
        getEstimasi(){
            const nominal = document.getElementById('nominal').value.replace(".", "")
            const tenor = document.getElementById('tenor').value
            if(nominal!='' && tenor!=''){
                const perBulan = nominal / (tenor * 12)
                const riba = nominal * this.bunga / 100
                const ttlPerBulan = perBulan + riba
                console.log(ttlPerBulan)
                document.getElementById('estimasi').innerHTML = myFunction.rupiah(ttlPerBulan.toFixed(2))
            }

        }
    },

}
</script>
<style scoped>
    .img-promo{
        height: 150px !important;
        border-radius: 10px;
    }
    .simulasi{
        background: rgb(255, 255, 255, 0.8);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 100px 10px rgba(255, 255, 255, 0.2);
    }
    .simulasi .top{
        background: rgb(7, 112, 205, 0.8);
    }
    .simulasi .bottom input::placeholder{
        color : #495057;
        font-weight : normal;
    }
</style>
