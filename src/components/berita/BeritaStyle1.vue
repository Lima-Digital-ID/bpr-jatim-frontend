<template>
    <div class="row mt-3">
        <div class="col">
            <carousel class="owl-berita" :nav="false" :loop="true" :margin="10" :dots="true" :responsive="{0:{items:1},600:{items:2},1000:{items:2}}">
                <div class="item mb-3">
                    <div class="berita-style-1">
                        <img src="@/assets/images/berita/1.png" alt="">
                        <div class="layer">
                            <div class="content">
                                <span class="label-blue-rgb px-3 py-1 font-13">Bisnis</span>
                                <div class="bottom">
                                    <h5 class="font-weight-bold  mb-1">Bussiness Matching Petik Keuangan</h5>
                                    <p class="font-13 font-weight-light">Kegiatan dengan tema One Pesantren One Product resmi di buka
                                        oleh Gubernur Jawa Timur Ibu Khofifah...</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="item mb-3">
                    <div class="berita-style-1">
                        <img src="@/assets/images/berita/2.png" alt="">
                        <div class="layer">
                            <div class="content">
                                <span class="label-blue-rgb px-3 py-1 font-13">Info Terkini</span>
                                <div class="bottom">
                                    <h5 class="font-weight-bold mb-1">Digitalisasi Bank UMKM Jawa Timur</h5>
                                    <p class="font-13 font-weight-light">Bank UMKM Jawa Timur menjalin kerjasama dengan Bank Danamon pada Jumat (11/6) Bank UMKM Jawa Timur lalu...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item mb-3">
                    <div class="berita-style-1">
                        <img src="@/assets/images/berita/1.png" alt="">
                        <div class="layer">
                            <div class="content">
                                <span class="label-blue-rgb px-3 py-1 font-13">Bisnis</span>
                                <div class="bottom">
                                    <h5 class="font-weight-bold  mb-1">Bussiness Matching Petik Keuangan</h5>
                                    <p class="font-13 font-weight-light">Kegiatan dengan tema One Pesantren One Product resmi di buka
                                        oleh Gubernur Jawa Timur Ibu Khofifah...</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </carousel>
        </div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    name : "BeritaStyle1",
    components:{
        carousel
    }
}
</script>