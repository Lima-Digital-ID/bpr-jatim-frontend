<template>
    <section id="ajukan">
        <div class="left">
            <div class="content">
                <h2 class="font-weight-bold">{{$t('bannerPinjaman.judul')}}</h2>
                <p class="font-16" v-html="$t('bannerPinjaman.desc')"></p>
                    <a href="" class="btn btn-white-blue color-blue font-weight-bold">{{$t('bannerPinjaman.btn')}}</a>
                </div>
            </div>
            <div class="right text-center">
            </div>
    </section>
</template>

<script>
export default {
    name : "BannerPinjaman"
}
</script>