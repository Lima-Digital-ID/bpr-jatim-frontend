<template>
    <nav class="navbar navbar-expand-lg navbar-top fixed-top py-3">
        <div class="container custom">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/common/logo.png" width="250" alt="" srcset="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Tentang</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Produk & Layanan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">UMKM Binaan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Berita</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name : 'Header'
    }
</script>