<template>
    <div>
        <Header class-nav="transparent-black"/>
        <section class="mt-navbar py-5">
            <div class="container custom">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold text-center">Tata Cara Pengaduan <span class="color-blue">Konsumen</span></h1>
                        <div class="box-white mt-4 mb-4">
                            <label for="">Cara Pengisian Form Pengaduan Konsumen:</label>
                            <ol>
                                <li>Setiap nasabah dapat melakukan pengaduan kepada Bank disebabkan oleh adanya kerugian dan/ atau potensi kerugian material pada nasabah yang diduga karena kesalahan atau kelalaian pihak Bank</li>
                                <li>Pengaduan dapat disampaikan secara lisan atau tertulis ke Kantor Bank terkait atau melalui <b>Hotline (031) 5677844</b> atau website di <a href="https://bankumkm.id">bankumkm.id</a></li>
                                <ol type="a">
                                    <li><b>Pengaduan Lisan</b></li>
                                        <ol type="i">
                                            <li>Pengaduan disampaikan melalui telepon atau datang ke Cabang tatap muka dengan pejabat/ pegawai penyelenggara.</li>
                                            <li>Pengaduan harus dilengkapi dengan informasi identitas Konsumen antara lain: nama; alamat; telepon yang dapat dihubungi; serta deskripsi singkat pengaduan.</li>
                                        </ol>
                                    <li><b>Pengaduan secara tertulis</b></li>
                                        <ol type="i">
                                            <li>Pengaduan disampaikan melalui sarana/ media seperti surat ke Cabang atau kantor pusat, email ke <a href="mailto:info@bprjatim.co.id">info@bprjatim.co.id</a> atau  di <a href="">bankumkm.id/pengaduan</a></li>
                                            <li>Pengaduan transaksi keuangan harus dilengkapi dengan fotocopy identitas Konsumen dan dokumen pendukung lainnya seperti:</li>
                                            <ul>
                                                <li>Jenis jasa sistem pembayaran yang digunakan.</li>
                                                <li>No Kartu/ rekening, transaksi/ setoran dan/ atau bukti transaksi lainnya/ sales draft, dsb.</li>
                                                <li>Menulis Kronologi kejadiaan:</li>
                                                <ul>
                                                    <li>tanggal dilakukan transaksi/ terjadinya peristiwa</li>
                                                    <li>permasalahan yang diadukan</li>
                                                </ul>
                                            </ul>
                                        </ol>
                                </ol>
                                <li>Cara Pengisian Form Pengaduan Nasabah melalui Website:</li>
                                <ol type="a">
                                    <li>Pilih salah satu cabang tempat pengaduan</li>
                                    <li>Bila nasabah mengisi sendiri, silahkan isi seluruh kolom pada bagian nasabah. Bila nasabah meminta bantuan pihak lain untuk mengisi formulir pengaduan, maka pihak lain tersebut dapat mengisi pada bagian perwakilan nasabah.</li>
                                    <li>Isi seluruh kolom isian yang tertera pada bagian (baik nasabah maupun perwakilan nasabah sesuai poin 2) dengan benar dan lengkap</li>
                                    <li>Ketik uraian pengaduan yang ingin disampaikan</li>
                                    <li>Klik submit</li>
                                </ol>
                            </ol>
                        </div>
                        <h1 class="font-weight-bold text-center">Pengaduan <span class="color-blue">Konsumen</span></h1>
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
                                <!-- <div v-if="messageSubmit!=''" class="alert font-weight-bold" :class="[successSubmit ? 'alert-success' : 'alert-danger']">{{messageSubmit}}</div> -->
                                <button type="reset" class="btn btn-secondary mr-3"><span class="fa fa-times"></span> Reset</button>
                                <button type="submit" class="btn btn-primary" @click="submitPengaduan()"><span class="fa fa-save"></span> Submit</button>
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
import Swal from 'sweetalert2';

export default {
    name : "Kantor",
    components:{Header,Footer},
    data() {
        return {
            showModal: false,
            cabang : [],
            isSubmit : false,
            isSubmitting: false,
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
            },

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
        async submitPengaduan() {
            if (this.isSubmitting) {
                return;
            }

            this.isSubmitting = true;
            this.isSubmit = true;

            try {
                const response = await this.axios
                .post(this.$serverURL+'api/add-pengaduan-nasabah',this.fields)
                    if(response.data.status == 201){
                        this.successSubmit = true
                        Object.keys(this.fields).forEach(key => {
                            if(key!='jenis_kelamin' && key!='jenis_kelamin_perwakilan' && key!='jenis_rekening'){
                                this.fields[key] = ''
                            }
                        })

                        Swal.fire(
                            "Pengaduan Berhasil Di Simpan",
                            "Terima Kasih, pengaduan anda akan segera ditindak lanjuti.",
                            "success"
                        );
                    }
            } catch (error) {
                if (error.response.data.status == 422) {
                    this.successSubmit = false;
                    Swal.fire(
                        "Pengaduan Gagal Di Simpan",
                        "Mohon Pastikan Semua Data Terisi",
                        "error"
                    );
                } else {
                    this.successSubmit = false;
                    Swal.fire(
                        "Terjadi Kegagalan Sistem",
                        "Mohon Hubungi Pihak Bank Terkait",
                        "error"
                    );
                }
            } finally {
                this.isSubmitting = false;
            }
        },
    }
}
</script>
<style scoped>
    label{
        font-weight: bold  !important;
        font-size: 1.1rem;
    }
</style>