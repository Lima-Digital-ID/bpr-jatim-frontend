<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar pb-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <h1 class="font-weight-bold mt-5 text-center">{{this.karier.judul}}</h1>
                        <div class="box-white">
                            {{this.karier.konten}}
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
    name : "Karier",
    components:{Header,Footer},
    data() {
        return {
            karier : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-karier')
        .then(res => {
            this.karier = res.data.data
        })
        .catch(err => console.log(err))
    },
}
</script>