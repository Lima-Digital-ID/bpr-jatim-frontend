@@ -0,0 +1,76 @@
<template>
    <section class="py-sm-5" id="container">
        <div class="row" id="row-container">    
            <div class="col-md-4">
                <a href="https://play.google.com/store/apps/details?id=id.aiyo.umkmgo&hl=en" target="_blank">
                    <div class="text-left" style="border-right: 1px solid white;">
                        <div class="row align-items-center" id="container-card">
                            <div class="col-md-2">
                                <img src="https://backoffice.bankumkm.id/public/upload/umkm.png" class="img-content" alt="">
                            </div>
                            <div class="col-md-10">
                                <h6>UMKM GO</h6>
                                <p>Solusi Digital bagi UMKM dan Komunitas anda.</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="https://play.google.com/store/apps/details?id=id.aiyo.lazisnu&hl=en" target="_blank">  
                    <div class=" text-left" style="border-right: 1px solid white;">
                        <div class="row align-items-center" id="container-card">
                            <div class="col-md-2">
                                <img src="https://backoffice.bankumkm.id/public/upload/gozis.png" class="img-content" alt="">
                            </div>
                            <div class="col-md-10">
                                <h6>GoZIS</h6>
                                <p>Aplikasi Online untuk Pembayaran Zakat,Infaq dan Sodaqoh.</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <router-link to="/pengaduan" class="megamenu-link">
                    <div class=" text-left">
                        <div class="row align-items-center" id="container-card">
                            <div class="col-md-2">
                                <img src="https://backoffice.bankumkm.id/public/upload/phone.png" class="img-content" alt="">
                            </div>
                            <div class="col-md-10">
                                <h6>Konsumen</h6>
                                <p>Perlindungan dan Pengaduan Konsumen untuk Nasabah Bank UMKM Jatim.</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>   
    </section>
</template>
  
<script>
export default {
    name : 'Carditem',
}
</script>
  
<style>
#row-container {
    margin-top: -15px;
}

#container {
    margin: 0 auto; 
    padding: 0 450px;
    background: #2469a5;
    height: 140px;
    margin-bottom: -30px;
    overflow: hidden;
}

p {
    color: white;
    font-size: 12px;
}

p, h6 {
    color: white;
    cursor: pointer;
}

.img-content {
    height: 50px;
    width: 45px;
    margin-top: -20px;
    border-radius: 8px;
}

@media (max-width: 768px) {
    #container {
        margin: 0 auto; 
        padding: 0px;
        background: #2469a5;
        height: 390px;
        overflow: hidden;
    }

    #container-card {
        margin-top: 20px;
    }

    .img-content {    
        height: 50px;
        margin-top: -20px;
        margin-bottom: 7px;
        border-radius: 8px;
    }
}
</style>
  