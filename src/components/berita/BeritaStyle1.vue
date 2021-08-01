<template>
    <div class="berita-style-1" :class="addClass">
        <img :src="data.cover" alt="">
        <div class="layer">
            <div class="content">
                <span class="label-blue-rgb px-3 py-1 font-13">{{data.kategori}}</span>
                <div class="bottom">
                    <p class="my-1 color-red font-13">{{data.tgl}}</p>
                    <h5 class="font-weight-bold  mb-1">{{data.judul}}</h5>
                    <p class="font-13 font-weight-light">{{data.konten}} ...</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "BeritaStyle1",
    props : ['data','addClass'],
}
</script>