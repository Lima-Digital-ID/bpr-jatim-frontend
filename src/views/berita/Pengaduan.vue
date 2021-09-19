<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold text-center">Pengaduan <span class="color-blue">Nasabah</span></h1>
                        <div class="box-white p-4 mt-4">
                            <form id="formPengaduan"  v-on:submit.prevent="submitPengaduan()">
                                <label for="">Cabang</label>
                                <select v-model="fields.id_kota" id="" class="form-control">
                                    <option value="">---Pilih Kantor Cabang---</option>
                                    <option :value="data.id" v-for="data in cabang" :key="data.id">Kantor Cabang {{data.nama_kota}}</option>
                                </select>
                                <br>
                                <label for="">Nama Nasabah</label>
                                <input type="text" v-model="fields.nama" class="form-control">
                                <br>
                                <label for="">Tempat Tanggal  Lahir</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.tempat_lahir" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="date" v-model="fields.tgl_lahir" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="">Jenis Kelamin</label>
                                <select v-model="fields.jenis_kelamin" id="" class="form-control">
                                    <option value="Laki-Laki">Laki Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <br>
                                <label for="">Jenis & Nomor Identitas</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.jenis_identitas" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.nomor_identitas" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="">Alamat</label>
                                <input type="text" v-model="fields.alamat" class="form-control">
                                <br>
                                <label for="">No Telp / No HP / No Fax</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.no_telp" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.no_hp" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.no_fax" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="">No Rekening</label>
                                <input type="text" v-model="fields.no_rekening" class="form-control">
                                <br>
                                <label for="" class="color-blue my-3"> <u>Perwakilan Nasabah</u></label>
                                <br>
                                <label for="">Nama Nasabah</label>
                                <input type="text" v-model="fields.nama_perwakilan" class="form-control">
                                <br>
                                <label for="">Tempat Tanggal  Lahir</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.tempat_lahir_perwakilan" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="date" v-model="fields.tgl_lahir_perwakilan" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="">Jenis Kelamin</label>
                                <select v-model="fields.jenis_kelamin_perwakilan" id="" class="form-control">
                                    <option value="Laki-Laki">Laki Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <br>
                                <label for="">Jenis & Nomor Identitas</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.jenis_identitas_perwakilan" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.nomor_identitas_perwakilan" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="">Alamat</label>
                                <input type="text" v-model="fields.alamat_perwakilan" class="form-control">
                                <br>
                                <label for="">No Telp / No HP / No Fax</label>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" v-model="fields.no_telp_perwakilan" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.no_hp_perwakilan" class="form-control">
                                    </div>
                                    <div class="col">
                                        <input type="text" v-model="fields.no_fax_perwakilan" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <label for="" class="color-blue my-3"> <u>Jenis Transaksi</u></label>
                                <br>
                                <label for="">Jenis Rekening</label>
                                <select v-model="fields.jenis_rekening" id="" class="form-control">
                                    <option>Tabungan</option>
                                    <option>Deposito</option>
                                    <option>ATM</option>
                                    <option>Kredit</option>
                                    <option>Lainnya</option>
                                </select>
                                <br>
                                <label for="">Detail Pengaduan</label>
                                <textarea v-model="fields.detail_pengaduan" id="" class="form-control" rows="7"></textarea>
                                <br>
                                <div v-if="messageSubmit!=''" class="alert font-weight-bold" :class="[successSubmit ? 'alert-success' : 'alert-danger']">{{messageSubmit}}</div>
                                <button type="submit" class="btn btn-primary mr-2"><span class="fa fa-save"></span> Submit</button>
                                <button type="reset" class="btn btn-secondary"><span class="fa fa-times"></span> Reset</button>
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
import Footer from '@/components/common/Footer'

export default {
    name : "Kantor",
    components:{Header,Footer},
    data() {
        return {
            cabang : [],
            isSubmit : false,
            successSubmit : false,
            messageSubmit : '',
            fields : {
                id_kota : '',
                nama: '',
                tempat_lahir: '',
                tgl_lahir: '',
                jenis_kelamin: 'Laki-Laki',
                jenis_identitas: '',
                nomor_identitas: '',
                alamat: '',
                no_telp: '',
                no_hp: '',
                no_fax: '',
                no_rekening: '',
                nama_perwakilan: '',
                tempat_lahir_perwakilan: '',
                tgl_lahir_perwakilan: '',
                jenis_kelamin_perwakilan: 'Laki-Laki',
                jenis_identitas_perwakilan: '',
                nomor_identitas_perwakilan: '',
                alamat_perwakilan: '',
                no_telp_perwakilan: '',
                no_hp_perwakilan: '',
                no_fax_perwakilan: '',
                jenis_rekening: 'Tabungan',
                detail_pengaduan: '',
            }

        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-jaringan-kantor')
        .then(res => {
            this.cabang = res.data.kota
        })
        .catch(err => console.log(err))
    },
    methods: {
        submitPengaduan(){
            this.axios
            .post(this.$serverURL+'api/add-pengaduan-nasabah',this.fields)
            .then(res => {
                this.isSubmit = true
                if(res.data.message=='berhasil'){
                    this.messageSubmit = 'Pengaduan Berhasil';
                    Object.keys(this.fields).forEach(key => {
                        if(key!='jenis_kelamin' && key!='jenis_kelamin_perwakilan' && key!='jenis_rekening'){
                            this.fields[key] = ''
                        }
                    })
                    this.successSubmit = true
                }
                else{
                    this.successSubmit = false
                    this.messageSubmit = 'Pengaduan Gagal';
                }
                console.log(this.messageSubmit)
            })
            .catch(err => {
                    this.successSubmit = false
                    this.messageSubmit = 'Pengaduan Gagal';
                console.log(this.messageSubmit)
                console.log(err)
            })
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