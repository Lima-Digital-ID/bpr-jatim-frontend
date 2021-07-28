<template>
    <section id="hero" style="height: 100vh;">
        <div class="video-container" :class="{focus : heroFocus}">
            <Header :nav-transition="navTransition" class-nav="transparent-white"/>
            <div class="close-focus" @click="toggleHeroFocus"><span class="fa fa-times-circle"></span></div>
            <iframe width="100%" id="myVideo" height="100%" src="https://www.youtube.com/embed/AcbP83N5RzY?controls=0&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="layer"></div>
            <div class="hero d-flex align-items-center">
                <div class="container custom pl-4"  id="hero-text">
                    <div class="row">
                        <div class="col">
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
        carousel
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-promo-home')
        .then(res => (this.promo = res.data.data))
        .catch(err => console.log(err))
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
        }
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
        }
    },

}
</script>
<style scoped>
    .img-promo{
        height: 150px !important;
        border-radius: 10px;
    }
</style>
