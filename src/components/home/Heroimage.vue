<template>
    <section id="heroImage">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <Header :nav-transition="navTransition" class-nav=""/>
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(data, index) in jumbotron" :key="data.id" :class="{'active': index === 0}">
                    <img class="d-block img-cover" :src="data.image" srcset="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
</template>

<script>
import Header from '@/components/common/Header';

export default {
    name: "Heroimage",
    components: { Header },
    data() {
        return {
            jumbotron: []
        };
    },
    watch: {
        $route() {
            this.getData();
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.axios
                .get(this.$serverURL + "api/jumbotron")
                .then(res => {
                this.jumbotron = res.data.data;
            })
                .catch(err => console.log(err));
        },
    },
};
</script>

<style>
    .carousel-inner {
        margin-top: 90px;
        align-items: center;
    }

    .img-cover {
        max-height: 720px !important;
        width: 100% !important;
    }

    @media (max-width: 768px) {
        .img-cover {
            width: 100%;
            height: auto !important;
            object-fit: cover;
        }
    }
</style>