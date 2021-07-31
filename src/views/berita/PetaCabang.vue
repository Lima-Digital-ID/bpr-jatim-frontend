<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar pb-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold mt-5 text-center">{{this.peta.judul}}</h1>
                        <div class="box-white mt-4" v-html="this.peta.konten">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>        
    </div>
</template>

<script>
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer'

export default {
    name : "PetaCabang",
    components:{Header,Footer},
    data() {
        return {
            peta : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-peta-cabang')
        .then(res => {
            this.peta = res.data.data
        })
        .catch(err => console.log(err))
    },
}
</script>
