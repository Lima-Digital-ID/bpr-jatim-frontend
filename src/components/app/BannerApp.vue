<template>
    <section id="app-section" class="py-5">
        <div class="container custom">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h3 class="font-weight-bold">Aplikasi Peminjaman Bank UMKM</h3>
                    <p>Berusaha membantu pelaku usaha mikro, kecil, menengah 
                        maupun masyarakat umum untuk mengembangkan usaha
                        yang dimiliki</p>
                    <div class="row">
                        <div class="col-md-4 pr-2 col-4">
                            <div class="app-feature p-3">
                                <img src="@/assets/images/common/pincep.png" alt="">
                                <h6 class="font-weight-bold mt-2 mb-0 color-blue">PINCEP</h6>
                                <p class="mb-0 font-13">Pinjaman Cepat</p>
                            </div>
                        </div>
                        <div class="col-md-4 px-2 col-4">
                            <div class="app-feature p-3">
                                <img src="@/assets/images/common/pinmo.png" alt="">
                                <h6 class="font-weight-bold mt-2 mb-0 color-blue">PINMO</h6>
                                <p class="mb-0 font-13">Pinjaman Modal</p>
                            </div>
                        </div>
                        <div class="col-md-4 pl-2 col-4">
                            <div class="app-feature p-3">
                                <img src="@/assets/images/common/danuh.png" alt="">
                                <h6 class="font-weight-bold mt-2 mb-0 color-blue">DANUH</h6>
                                <p class="mb-0 font-13">Dana Umroh</p>
                            </div>
                        </div>
                    </div>
                    <p class="font-weight-bold mt-3">Tersedia di :</p>
                    <a href="" class="btn btn-dark py-2 mr-2 px-3 font-weight-bold"><img src="@/assets/images/common/google-play.png" width="20" class="mr-2" alt=""> Play Store</a>
                    <a href="" class="btn btn-dark py-2 px-3 font-weight-bold"><img src="@/assets/images/common/app-store.png" width="20" class="mr-2" alt=""> App Store</a>
                </div>
                <div class="col-md-6">
                    <img src="@/assets/images/common/app.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "BannerApp"
}
</script>