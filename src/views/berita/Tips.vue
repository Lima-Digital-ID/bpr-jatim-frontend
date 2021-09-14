<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar pb-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold mt-5 text-center">{{this.tips.judul_tips_keamanan}}</h1>
                        <div class="row">
                            <div class="box-white mt-4 polaroid d-flex justify-content-around">
                                    <div class="col-md-4 p-top">
                                        <img src="@/assets/images/tips/tipsATM.png" alt="" class="clip-path-tes">
                                        <br> <br> <br>
                                        
                                        <img src="@/assets/images/tips/Wishtleblower.png" alt="" class="clip-path-tes ">
                                    </div>
                                
                                    <div class="col-md-4">
                                        <img src="@/assets/images/tips/phising.png" alt="" class="clip-path-tes ">
                                        <br> <br>
                                        <img src="@/assets/images/tips/virus.png" style="margin-top:20px;" alt="" class="clip-path-tes">
                                    </div>
                                    <div class="col-md-4 p-top">
                                        <img src="@/assets/images/tips/tipspengamananpinATM.png" alt="" class="clip-path-tes ">
                                        <br> <br> <br>
                                        <img src="@/assets/images/tips/tipslain.png" alt="" class="clip-path-tes">
                                    </div>
                            </div>
                        </div>
                        <!-- <div class="box-white mt-4" v-html="this.tips.konten_tips_keamanan">
                        </div> -->
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
    name : "Tips",
    components:{Header,Footer},
    data() {
        return {
            tips : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-tips-info')
        .then(res => {
            // console.log(res);
            this.tips = res.data.data
        })
        .catch(err => console.log(err))
    },
}
</script>