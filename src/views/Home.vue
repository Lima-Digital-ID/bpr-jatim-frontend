<template>
  <div>
    <Hero/>
    <Kurs/>
    <section id="berita-section" class="py-5">
        <div class="container custom">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="font-weight-bold">Berita Terbaru</h4>
                    <p>Kumpulan informasi berita terbaru seputar Bank BPR Jatim dalam semangatnya
                        mengembangkan UMKM di Jawa Timur</p>
                </div>
            </div>
            <BeritaStyle1/>
            <BeritaStyle2/>
            <div class="row mt-5">
                <div class="col text-center">
                    <a href="" class="btn btn-primary px-4 py-2">Lebih Banyak Berita</a>
                </div>
            </div>
        </div>
    </section>
    <BannerApp/>
    <BannerPinjaman/>
    <Footer/>
  </div>
</template>

<script>
import Hero from '@/components/home/Hero'
import Kurs from '@/components/home/Kurs'
import BeritaStyle1 from '@/components/berita/BeritaStyle1'
import BeritaStyle2 from '@/components/berita/BeritaStyle2'
import BannerApp from '@/components/app/BannerApp'
import BannerPinjaman from '@/components/app/BannerPinjaman'
import Footer from '@/components/common/Footer'

export default {
  name: 'Home',
  components: {
    Hero,Footer,Kurs,BeritaStyle1,BeritaStyle2,BannerApp,BannerPinjaman
  },
}
</script>
