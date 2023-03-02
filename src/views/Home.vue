<template>
  <div>
    <Hero/>
    <Kurs/>
    <line-chart :data="chartData"></line-chart>
    <section id="berita-section" class="pb-5">
        <div class="container custom">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="font-weight-bold">{{$t('beritaTerbaru')}}</h3>
                    <p>{{$t('textBeritaTerbaru')}}</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                  <div v-if="beritaSlide.length>0">
                    <carousel class="owl-berita" :nav="false" :loop="true" :margin="10" :dots="true" :responsive="{0:{items:1},600:{items:2},1000:{items:2}}">
                      <div class="item mb-3" v-for="data in beritaSlide" :key="data.id">
                        <router-link :to="'/berita/'+data.slug">
                          <BeritaStyle1 :data="data"/>
                        </router-link>
                      </div>
                    </carousel>
                  </div>
                </div>
            </div>
           <div class="row mt-3">
              <div class="col-md-3" v-for="data in beritaBox" :key="data.id">
                <router-link :to="'/berita/'+data.slug">
                  <BeritaStyle2 :data="data"/>
                </router-link>
              </div>
            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <router-link to="/berita" class="btn btn-primary px-4 py-2">{{$t('btnLebihBanyakBerita')}}</router-link>
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
import carousel from 'vue-owl-carousel'

export default {
  name: 'Home',
  components: {
    Hero,
    Footer,
    Kurs,
    BeritaStyle1,
    BeritaStyle2,
    BannerApp,
    BannerPinjaman,
    carousel
  },
  data() {
    return {
      beritaSlide : [],
      beritaBox : [],
    }
  },
  
  mounted() {
      this.axios
      .get(this.$serverURL+'api/get-berita-home')
      .then(res => {
        this.beritaSlide = res.data.data['slide']
        this.beritaBox = res.data.data['box']
      })
      .catch(err => console.log(err))
  },
}
</script>
