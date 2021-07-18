<template>
    <section>
        <section class="py-5" id="footer">
            <div class="container custom">
                <div class="row justify-content-end align-items-center">
                    <div class="col">
                        <img src="@/assets/images/common/logo.png" width="250px" alt="">
                    </div>
                    <div class="col text-right">
                        <a href="#" class="color-blue font-weight-bold btn btn-white-blue px-3 btn-sm" @click="scrollTo('#berita-section')" data-target="body">Kembali Ke Atas <span class="ml-2 fa fa-chevron-up"></span> </a>
                    </div>
                </div>
                <hr class="hr-soft">
                <div class="row mt-5">
                    <div class="col-md-4">
                        <h5 class="color-blue font-weight-bold mb-3">Kantor Pusat</h5>
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
                        <h5 class="font-weight-bold color-blue mb-3">Follow Kami</h5>
                        <a href="" class="mr-2">
                            <img src="@/assets/images/common/fb.png" alt="" height="40px">
                        </a>
                        <a href="" class="mr-2">
                            <img src="@/assets/images/common/ig.png" alt="" height="40px">
                        </a>
                        <a href="">
                            <img src="@/assets/images/common/yt.png" alt="" height="40px">
                        </a>
                        <br>
                        <p class="mt-3 color-white">info@bprjatim.co.id</p>
                    </div>
                    <div class="col-md-5">
                        <h5 class="font-weight-bold color-blue mb-3">Terdaftar dan Diawasi</h5>
                        <img src="@/assets/images/common/lembaga.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="copyright-section" class="py-4">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-6">
                        <p class="color-white mb-0">Copyright 2021 - Bank UMKM Jawa Timur</p>
                    </div>
                    <div class="col-md-6 text-left text-sm-right">
                        <a href="" class="mr-2">Kebijakan Privasi</a>
                        <a href="">Syarat dan Ketentuan</a>
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
    }
}
</script>