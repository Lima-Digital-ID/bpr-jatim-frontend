<template>
    <div>
        <Header class-nav="transparent-black"/>      
        <section id="promo-section" class="d-flex align-items-center py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col">
                        <h1 class="font-weight-bold">Promo <span class="color-blue">Bank UMKM</span></h1>
                        <p>Dapatkan promo menarik dari Bank UMKM Jawa Timur</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <div class="search-hero p-0">
                            <input type="text" class="pl-3 search-hero" placeholder="Cari Berita Disini..." autofocus="true">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="promo" class="py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-3">
                        <a href="">
                            <img src="@/assets/images/promo/1.png" class="img-fluid" alt="">
                            <h5 class="font-weight-bold color-red mt-2">Promo 1</h5>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <img src="@/assets/images/promo/2.png" class="img-fluid" alt="">
                            <h5 class="font-weight-bold color-red mt-2">Promo 2</h5>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <img src="@/assets/images/promo/3.png" class="img-fluid" alt="">
                            <h5 class="font-weight-bold color-red mt-2">Promo 3</h5>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="">
                            <img src="@/assets/images/promo/4.png" class="img-fluid" alt="">
                            <h5 class="font-weight-bold color-red mt-2">Promo 4</h5>
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
    name : 'Promo',
    components : {Header,Footer}
}
</script>

<style scoped>
    #promo-section{
        background: var(--softGrey);
        min-height: 50vh;
        margin-top : 92px;
    }
    .search-hero input, .search-hero span, .search-hero input::placeholder{
        color : var(--grey) !important;
    }
</style>