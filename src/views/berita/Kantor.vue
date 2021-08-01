<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar py-5">
            <div class="container custom">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold">Jaringan Cabang dan <span class="color-blue">Kantor Kas</span></h1>
                        <p>Daftar Kantor Cabang dan Kantor Kas Bank UMKM Jawa Timur</p>
                        <div class="mt-4 nav nav-tabs custom-nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-cabang-tab" data-toggle="tab" href="#nav-cabang" role="tab" aria-controls="nav-cabang" aria-selected="true"> <span class="fa fa-building mr-2"></span> Kantor Cabang</a>
                            <a class="nav-item nav-link" id="nav-kas-tab" data-toggle="tab" href="#nav-kas" role="tab" aria-controls="nav-kas" aria-selected="false"><span class="fa fa-warehouse mr-2"></span> Kantor Kas</a>
                        </div>
                    <div class="tab-content custom-tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active p-4" id="nav-cabang" role="tabpanel" aria-labelledby="nav-cabang-tab">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Nama Kantor</td>
                                        <td>Alamat</td>
                                        <td>No Telp</td>
                                        <td>Kode Area</td>
                                        <td>Fax</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data,index) in cabang" :key="data.id">
                                        <td>{{index+=1}}</td>
                                        <td>Kantor Cabang {{data.nama_kota}}</td>
                                        <td>{{data.alamat}}</td>
                                        <td>{{data.telp}}</td>
                                        <td>{{data.kode_area}}</td>
                                        <td>{{data.fax}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade p-4" id="nav-kas" role="tabpanel" aria-labelledby="nav-kas-tab">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Jaringan Kantor</td>
                                        <td>Jenis</td>
                                        <td>Alamat</td>
                                        <td>Kode Area</td>
                                        <td>No Telp</td>
                                        <td>Fax</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data,index) in kas" :key="data.id">
                                        <td>{{index+=1}}</td>
                                        <td>{{data.jaringan_kantor}}</td>
                                        <td>{{data.jenis}}</td>
                                        <td>{{data.alamat}}</td>
                                        <td>{{data.kode_area}}</td>
                                        <td>{{data.telepon}}</td>
                                        <td>{{data.fax}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
    name : "Kantor",
    components:{Header,Footer},
    data() {
        return {
            kas : [],
            cabang : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-jaringan-kantor')
        .then(res => {
            this.kas = res.data.data
            this.cabang = res.data.kota
        })
        .catch(err => console.log(err))
    },
}
</script>
<style  scoped>
    .table{
        background: white;
        border-radius: 8px;
    }
    .table thead td:first-child{
        border-top-left-radius: 8px;
    }
    .table thead td:last-child{
        border-top-right-radius: 8px;
    }
    .table td, .table th{
        padding : 1rem;
    }
    .table tbody{
        color : var(--darkBlue2)
    }
    .table thead{
        font-weight: bold;
        background: var(--blue);
        color : white;
    }
    .table-hover tbody tr:hover{
        background: rgba(246,248,253,0.8);
    }
</style>
    