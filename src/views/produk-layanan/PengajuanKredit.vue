<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold text-center">Pengajuan <span class="color-blue">Kredit</span></h1>
                        <div class="box-white p-4 mt-4">
                            <form id="formPengaduan"  v-on:submit.prevent="submitPengajuan()">
                                <div class="form-group">
                                    <label for="">Pinjaman</label>
                                    <input type="text" v-model="fields.nominal" class="form-control" id="nominalPinjaman" @keyup="getEstimasi" @change="toRupiah" placeholder="Nominal">
                                </div>    
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Tenor</label>
                                            <select name="" id="tenor" v-model="fields.tenor" @change="getEstimasi" class="form-control">
                                                <option value="">---Tenor---</option>
                                                <option :value="data.tenor" v-for="data in tenor" :key="data.id">{{data.tenor}} {{$t('tahun')}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Estimasi Angsuran /bulan (bunga {{bunga}}%)</label>
                                            <input type="text" class="form-control" id="estimasi" placeholder="Rp 0">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Nama Lengkap</label>
                                    <input type="text" v-model="fields.nama" class="form-control" placeholder="John Doe">
                                </div>  
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Alamat</label>
                                            <input type="text" v-model="fields.alamat" class="form-control" placeholder="Jl. Ciliwung No. 11">
                                        </div>  
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Cabang</label>
                                            <select v-model="fields.kota" id="" class="form-control">
                                                <option value="">---Pilih Kota---</option>
                                                <option :value="data.id" v-for="data in kota" :key="data.id">{{data.nama_kota}}</option>
                                            </select>
                                        </div> 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Email</label>
                                            <input type="email" v-model="fields.email" class="form-control" placeholder="johndoe@gmail.com">
                                        </div>  
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="">Telp / Hp</label>
                                            <input type="number" v-model="fields.telp" class="form-control" placeholder="081234567891">
                                        </div> 
                                    </div>
                                </div>
                                <div v-if="messageSubmit!=''" class="alert font-weight-bold" :class="[successSubmit ? 'alert-success' : 'alert-danger']">{{messageSubmit}}</div>
                                <button type="reset" class="btn btn-secondary mr-3"><span class="fa fa-times"></span> Reset</button>
                                <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Submit</button>
                            </form>
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
import Footer from '@/components/common/Footer';
import {myFunction} from '@/helper/myFunction';

export default {
    name : "PengajuanKredit",
    components:{Header,Footer},
    data() {
        return {
            tenor : [],
            kota : [],
            bunga : '',
            isSubmit : false,
            successSubmit : false,
            messageSubmit : '',
            fields : {
                tenor: '',
                nominal: '',
                nama: '',
                telp: '',
                email: '',
                alamat: '',
                kota: '',
            }

        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-tenor-home')
        .then(res => {
            this.tenor = res.data.data
        })
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-jaringan-kantor')
        .then(res => {
            this.kota = res.data.kota
        })
        .catch(err => console.log(err))

        this.axios
        .get(this.$serverURL+'api/get-bunga-home')
        .then(res => {
            this.bunga = res.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        submitPengajuan(){
            this.axios
            .post(this.$serverURL+'api/post-pengajuan-kredit',this.fields)
            .then(res => {
                this.isSubmit = true
                if(res.data.message=='success.'){
                    this.messageSubmit = 'Pengajuan Berhasil';
                    this.successSubmit = true
                }
                else{
                    this.successSubmit = false
                    this.messageSubmit = 'Pengajuan Gagal';
                }
                console.log(this.messageSubmit)
            })
            .catch(err => {
                    this.successSubmit = false
                    this.messageSubmit = 'Pengajuan Gagal';
                console.log(this.messageSubmit)
                console.log(err)
            })
        },
        toRupiah() {
            let input = document.getElementById("nominalPinjaman");
            let value = input.value;

            let numericValue = value.toString().replace(/[^0-9]/g, "");

            let rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(numericValue);
            input.value = rupiah;
            this.fields.numericValue = numericValue;
        },
        getEstimasi(){
            const nominal = document.getElementById("nominalPinjaman").value.replace(/\D/g, '')
            const tenor = document.getElementById('tenor').value
            
            if (nominal == 0 || tenor == '') {
                let estimasi = document.getElementById('estimasi')
                estimasi.value = "Rp" + 0
            } else if (nominal!='' && tenor!='') {
                const perBulan = nominal / (tenor * 12)
                const _bunga = nominal * this.bunga / 100
                const ttlPerBulan = perBulan + _bunga
                console.log(ttlPerBulan)

                let estimasi = document.getElementById('estimasi');
                estimasi.value = "Rp " + myFunction.rupiah(ttlPerBulan.toFixed(2))
            }
        }
    }

}
</script>
<style scoped>
    label{
        font-weight: bold  !important;
        font-size: 1.1rem;
    }
</style>