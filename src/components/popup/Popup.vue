<template>
    <div class="popup">
        <button id="close">&times;</button>
        <div class="card">
            <h2 class="text-center">Promo Menarik</h2>
            <div id="myCarousel" class="carousel slide mt-4" data-ride="carousel">
                <ol class="carousel-indicators mt-3">
                    <li  v-for="(data, index) in promo" :key="data.id" data-target="#myCarousel" :data-slide-to="index" :class="{'active': index === 0}"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(data, index) in promo" :key="data.id" :class="{'active': index === 0}">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="img-cover d-block w-100" :src="data.cover" srcset="">
                            </div>
                            <div class="col-md-6">
                                <h5 class="font-weight-bold color-red mt-3" id="max-length">{{data.judulFull}}</h5>
                                <p class="mb-0 font-14 color-dark2 font-weight-light">{{data.konten}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "popup",
    data() {
        return {
            promo : []
        }
    },
    watch: {
        $route(){
            this.getData()
        }
    },
    mounted() {
        this.getData();
        document.querySelector("#close").addEventListener("click", () => {
            this.close();
        });
        setTimeout(() => {
            this.open();
        }, 
        1000);
    },
    methods: {
        getData(){
            this.axios
            .get(this.$serverURL+'api/get-promo')
            .then(res => {
                this.promo = res.data.promo.data
            })
            .catch(err => console.log(err))
        },
        open() {
            document.querySelector(".popup").style.display = "block";
        },
        close() {
            document.querySelector(".popup").style.display = "none";
        },
    }
};
</script>

<style scoped>
    .img-cover{
        height: 400px !important;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        .carousel-item .col-md-6 p {
            display: none;
        }

        #max-length {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 500px; /* adjust as needed */
        }

        .carousel-indicators {
            bottom: -20px;
        }
    }
</style>
