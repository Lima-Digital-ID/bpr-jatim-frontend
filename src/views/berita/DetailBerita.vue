<template>
    <div>
        <Header class-nav="transparent-black"/>        
        <section class="mt-navbar pb-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold mt-5">Judul Berita</h1>
                        <span class="label-blue-rgb px-3 py-1 font-13">Bisnis</span>
                        <div class="mt-3 d-flex font-14 justify-content-between">
                            <p class="color-red">27 Juli 2020 17:00</p>
                            <div class="d-flex">
                                <p class="mr-3">
                                    <span class="fa fa-user"></span> Admin
                                </p>
                                <p>
                                    <span class="fa fa-eye"></span> 100x
                                </p>
                            </div>
                        </div>
                        <div class="box-white no-hover">
                            <img src="http://www.bprjatim.co.id/img/berita/87_2021-06-16_11:44:59.jpg" class="img-fluid mb-4" alt="">
                            <p class="color-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor. Natus temporibus minima aperiam deserunt? Quod, voluptatem animi. Corrupti atque ducimus nostrum autem ullam beatae nemo fuga explicabo minima incidunt!</p>
                            <p class="color-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor. Natus temporibus minima aperiam deserunt? Quod, voluptatem animi. Corrupti atque ducimus nostrum autem ullam beatae nemo fuga explicabo minima incidunt!</p>
                            <p class="color-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor. Natus temporibus minima aperiam deserunt? Quod, voluptatem animi. Corrupti atque ducimus nostrum autem ullam beatae nemo fuga explicabo minima incidunt!</p>
                            <p class="color-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor. Natus temporibus minima aperiam deserunt? Quod, voluptatem animi. Corrupti atque ducimus nostrum autem ullam beatae nemo fuga explicabo minima incidunt!</p>
                            <p class="color-dark2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor. Natus temporibus minima aperiam deserunt? Quod, voluptatem animi. Corrupti atque ducimus nostrum autem ullam beatae nemo fuga explicabo minima incidunt!</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-5">
                    <div class="col-md-6 text-center">
                        <h3 class="font-weight-bold">Berita Lainnya</h3>
                    </div>
                </div>
                <BeritaStyle2/>
                <div class="row mt-3">
                    <div class="col text-center">
                        <a href="" class="btn btn-primary px-4 py-2">Lebih Banyak Berita</a>
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
import BeritaStyle2 from '@/components/berita/BeritaStyle2'
export default {
    name : "detailBerita",
    components : {Header,Footer,BeritaStyle2}
}
</script>