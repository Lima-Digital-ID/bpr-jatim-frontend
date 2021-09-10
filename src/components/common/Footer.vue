<template>
    <section>
        <section class="py-5" id="footer">
            <div class="container custom">
                <div class="row justify-content-end align-items-center">
                    <div class="col">
                        <img src="@/assets/images/common/logo.png" width="250px" alt="">
                    </div>
                    <div class="col text-right">
                        <a href="#" class="color-blue font-weight-bold btn btn-white-blue px-3 btn-sm" @click="scrollTo('#berita-section')" data-target="body">{{$t('footer.kembaliKeatas')}} <span class="ml-2 fa fa-chevron-up"></span> </a>
                    </div>
                </div>
                <hr class="hr-soft">
                <div class="row mt-5">
                    <div class="col-md-4">
                        <h5 class="color-blue font-weight-bold mb-3">{{$t('footer.kantorPusat')}}</h5>
                        <div class="row color-white">
                            <div class="col-6">
                                <p>Jl. Ciliwung Nomor 11
                                    <br>
                                    Surabaya 60241
                                    <br>
                                    Indonesia</p>
                            </div>
                            <div class="col-6">
                                <p>031-5677844
                                    <br>
                                    031-5688542-45
                                    <br>
                                    031-5681037</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <h5 class="font-weight-bold color-blue mb-3">{{$t('footer.followKami')}}</h5>
                        <a :href="this.profil.facebook" target="_blank" class="mr-2">
                            <img src="@/assets/images/common/fb.png" alt="" height="40px">
                        </a>
                        <a :href="this.profil.instagram" target="_blank" class="mr-2">
                            <img src="@/assets/images/common/ig.png" alt="" height="40px">
                        </a>
                        <a :href="this.profil.youtube" target="_blank">
                            <img src="@/assets/images/common/yt.png" alt="" height="40px">
                        </a>
                        <br>
                        <p class="mt-3 color-white">info@bprjatim.co.id</p>
                    </div>
                    <div class="col-md-5">
                        <h5 class="font-weight-bold color-blue mb-3">{{$t('footer.terdaftar')}}</h5>
                        <img src="@/assets/images/common/lembaga.png" width="300px" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="copyright-section" class="py-4">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-6">
                        <p class="color-white mb-0">Copyright {{new Date().getFullYear()}} - Bank UMKM Jawa Timur</p>
                    </div>
                    <div class="col-md-6 text-left text-sm-right">
                        <a href="" class="mr-2">{{$t('footer.kebijakanPrivasi')}}</a>
                        <a href="">{{$t('footer.syaratDanKetentuan')}}</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import {myFunction} from '@/helper/myFunction'
export default {
    name: 'Footer',
    methods:{
        scrollTo(target){
            myFunction.scrollTo(target)
        },
    },
    data(){
        return{
            profil : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-profil-home')
        .then(res => {
            this.profil = res.data.data
        })
        .catch(err => console.log(err))
    },

}
</script>