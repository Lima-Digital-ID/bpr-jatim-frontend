<template>
    <div>
        <Header class-nav="transparent-black" />
        <section id="bantuan-section" class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                <div class="col-md-7 text-center">
                    <h1 class="font-weight-bold">{{$t('nav.bantuan')}}</h1>
                    <p>{{$t('nav.textBantuan')}}</p>
                </div>
                </div>
            </div>
            <div class="box-white">
                <div v-for="(data, index) in bantuan" :key="data.id">
                    <div class="accordion-header" @click="toggleAccordion(index)">
                        {{ data.nama_kategori }}
                        <span class="accordion-icon"></span>
                    </div>
                    <div class="accordion-content" :class="{ 'is-active': data.active }">
                        <div v-if="data.detail">
                            <div v-for="detail in data.detail" :key="detail.id">
                                <h6 style="font-weight: 700;">{{ detail.pertanyaan}}</h6>
                                <p v-html="detail.jawaban"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div> 
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
    name: "Bantuan",
    components: { Header, Footer },
    data() {
        return {
            bantuan: [],
            detailData: {},
        };
    },
    watch: {
        $route() {
        this.getData();
        },
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
        this.axios
            .get(this.$serverURL + 'api/get-kategori-faq')
            .then((res) => {
            this.bantuan = res.data.data.map((item) => ({
                ...item,
                active: false,
                keterangan: "",
            }));
            console.log(this.bantuan);
            })
            .catch((err) => console.log(err));
        },
        toggleAccordion(index) {
            this.bantuan = this.bantuan.map((item, i) =>
                i === index ? { ...item, active: !item.active, detail: null } : { ...item, active: false, detail: null }
            );
            if (this.bantuan[index].active) {
                const id = this.bantuan[index].id;
                this.axios
                    .get(this.$serverURL + `api/get-items-faq/${id}`)
                    .then((res) => {
                        this.bantuan[index].detail = res.data.data;
                    })
                    .catch((err) => console.log(err));
            }
        },
    },
};
</script>


<style scoped>
    .box-white {
        margin-top: 5%;
        margin-bottom: 5%;
        margin-left: 15%;
        margin-right: 15%;
    }

    .accordion-header {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #ffffff;
        border-bottom: 1px solid #a3a3a3;
    }

    .accordion-icon {
        width: 10px;
        height: 10px;
        border-top: 2px solid #777;
        border-right: 2px solid #777;
        transform: rotate(135deg);
        transition: transform 0.3s ease-in-out;
    }

    .accordion-icon.is-active {
        transform: rotate(225deg);
    }

    .accordion-content {
        display: none;
        padding: 1rem;
        border-bottom: 1px solid #e5e5e5;
    }

    .accordion-content.is-active {
        display: block;
    }
</style>
