<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section id="section-layanan" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <img src="http://www.bprjatim.co.id/img/page/KUSUMA_2018-11-01_05_07_30.jpg" class="img-fluid" alt="">
                        <h1 class="font-weight-bold mt-5">KUSUMA</h1>
                        <p>Kusuma adalah Kredit Untuk Semua Usaha Masyarakat.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="detail" class="py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        <ul class="link-content nav-tabs nav">
                            <li><a href="#penerima" data-toggle="tab" class="active">Penerima</a></li>
                            <li><a href="#tujuan" data-toggle="tab">Tujuan Fasilitas</a></li>
                            <li><a href="#plafond" data-toggle="tab">Plafond</a></li>
                            <li><a href="#sukubunga" data-toggle="tab">Suku Bunga</a></li>
                            <li><a href="#jangka" data-toggle="tab">Jangka Waktu</a></li>
                            <li><a href="#persyaratan" data-toggle="tab">Persyaratan</a></li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content box-white">
                            <div id="penerima" class="tab-pane fade in show active">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                            <div id="tujuan" class="tab-pane fade">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                            <div id="plafond" class="tab-pane fade">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                            <div id="sukubunga" class="tab-pane fade">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                            <div id="jangka" class="tab-pane fade">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                            <div id="persyaratan" class="tab-pane fade">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium architecto laboriosam recusandae veritatis repudiandae veniam exercitationem temporibus deleniti iste atque quidem voluptatem ea minima natus corrupti eligendi, ipsum asperiores?
                            </div>
                        </div>
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
    name : "bisnis",
    components : {Header,Footer}
}
</script>
<style scoped>
    #section-layanan img{
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    .link-content{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        border-bottom: none
    }
    .link-content li{
        margin-bottom: 20px;
    }
    .link-content li a.active{
        font-weight: bold;
        color : var(--blue);
    }
    .link-content li a{
        color : var(--darkBlue);
    }
</style>