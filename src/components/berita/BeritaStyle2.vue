<template>
    <div class="berita-style-2 mb-3" style="min-height:100%">
        <div class="top">
            <img :src="data.cover" alt="">
            <span class="label-blue-rgb px-3 font-13">{{data.kategori}}</span>
        </div>
        <div class="bottom mt-3">
            <h6 class="font-weight-bold">{{data.judul}}</h6>
            <p class="my-1 color-red font-13">{{data.tgl}}</p>
            <p class="font-14 color-darkBlue" v-html="data.konten+'...'"></p>
        </div>
    </div>
</template>
<script>
export default {
    name : "BeritaStyle2",
    props : ['data'],
}
</script>

<style scoped>
@media (max-width: 768px) {
    p{
        height: auto;
    }

    .bottom >>> p p {
        height: auto;
    }
}
</style>