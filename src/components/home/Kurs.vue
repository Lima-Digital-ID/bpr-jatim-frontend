<template>
    <section id="kurs-section" class="py-5">
        <div class="container custom">
            <div class="row">
                <div class="col">
                    <div class="row align-items-center">
                        <div class="col">
                            <div class="nav nav-tabs custom-nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-kurs-tab" data-toggle="tab" href="#nav-kurs" role="tab" aria-controls="nav-kurs" aria-selected="true"> <span class="fa fa-coins mr-2"></span> {{$t('kursBankUmkm')}}</a>
                                <a class="nav-item nav-link" id="nav-kalkulator-tab" data-toggle="tab" href="#nav-kalkulator" role="tab" aria-controls="nav-kalkulator" aria-selected="false"><span class="fa fa-calculator mr-2"></span> {{$t('kalkulator')}}</a>
                            </div>
                        </div>
                        <div class="d-none d-lg-block col text-right">
                            <p>{{$t('updateTerakhir')}} {{this.lastUpdate}}</p>
                        </div>
                    </div>
                    <div class="tab-content custom-tab-content" id="nav-tabContent">
                    <div class="tab-pane  px-4 pt-4 fade show active" id="nav-kurs" role="tabpanel" aria-labelledby="nav-kurs-tab">
                        <div class="list-kurs d-flex justify-content-start">

                            <div v-for="(data,index) in kurs" :key="data.nama" class="box-kurs mb-4">
                                <h5 class="font-weight-bold color-blue">{{data.nama}}</h5>
                                <hr class="my-3">
                                <div class="kurs-info mb-2">
                                    <div class="font-weight-bold">{{$t('jual')}}</div>
                                    <div>{{rupiah(data.harga_jual)}} <span class="ml-2 fa" :class="infoKurs('jual',index)"></span> </div>
                                </div>
                                <div class="kurs-info">
                                    <div class=" font-weight-bold">{{$t('beli')}}</div>
                                    <div>{{rupiah(data.harga_beli)}} <span class="ml-2 fa" :class="infoKurs('beli',index)"></span> </div>
                                </div>
                                <div class="kurs-info">
                                    <button class="btn btn-primary btn-sm mt-2 btn-block" data-toggle="modal" @click="getDetail(index)" data-target="#modal-detail">Cek</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- modal -->
                    <div class="modal fade" id="modal-detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title font-weight-bold" id="namaUsaha"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="container custom">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <img src="" style="border-radius : 14px" id='fotoUsaha' class="img-fluid" alt="">
                                            </div>
                                            <div class="col-md-7">
                                                <!-- <p class="font-weight-bold color-red mb-1">{{$t('deskripsi')}}</p>
                                                <p id="deskripsi"></p>
                                                <p class="font-weight-bold color-red mb-1">{{$t('pemilik')}}</p>
                                                <p id="pemilik"></p>
                                                <p class="font-weight-bold color-red mb-1">{{$t('kota')}}</p>
                                                <p id="kota"></p>
                                                <p class="font-weight-bold color-red mb-1">{{$t('alamat')}}</p>
                                                <p id="alamat"></p>
                                                <p class="font-weight-bold color-red mb-1">{{$t('noTelp')}}</p>
                                                <p id="noHp"></p> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <!-- /modal -->
                    <div class="tab-pane fade" id="nav-kalkulator" role="tabpanel" aria-labelledby="nav-kalkulator-tab">
                        <div class="p-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">{{$t('jenisKurs')}}</label>
                                    <select name="" id="jenis-kurs" class="form-control" @change="setMataUangNull">
                                        <option value="jual">{{$t('jual')}}</option>
                                        <option value="beli">{{$t('beli')}}</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">{{$t('mataUang')}}</label>
                                    <select name="" v-model="selected" id="mata-uang" class="form-control" @change="setNominalNull">
                                        <option value="">--{{$t('pilihMataUang')}}--</option>
                                        <option :data-jual="data.harga_jual" :data-beli="data.harga_beli"  v-for="data in kurs" :key="data.nama" :value="data.id">{{data.nama}}</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Nominal</label>
                                    <input type="number" id="nominal" class="form-control" @keyup="getOutputCalc">
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Output Rupiah</label>
                                    <input type="text" id="output" class="form-control" style="background:#f6f8fd" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="d-sm-block d-lg-none mt-3 font-13 font-weight-bold">
                        <p>*{{$t('updateTerakhir')}} {{this.lastUpdate}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .fa-minus{
        color : #d6dde9;
    }
</style>

<script>
import {myFunction} from '@/helper/myFunction'

export default {
    name : 'Kurs',
    data(){
        return{
            kurs : [],
            lastUpdate : '',
            selected : ''
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-kurs-home')
        .then(res => {
            this.kurs = res.data.data
            this.lastUpdate =  res.data.lastUpdate
        })
        .catch(err => console.log(err))
    },
    methods: {
        rupiah(nominal){
            return myFunction.rupiah(nominal)
        },
        infoKurs(tipe,index){
            const data = this.kurs[index]
            const field = tipe=='jual' ? data.ket_jual : data.ket_beli
            let classFa = ''
            if(field=='turun'){
                classFa = 'fa-caret-down color-red'
            }
            else if(field=='naik'){
                classFa = 'fa-caret-up color-green'
            }
            else{
                classFa = 'fa-minus color-grey'
            }

            return classFa
        },
        setMataUangNull(){
            this.selected = ''
            document.getElementById('nominal').value = ''
            document.getElementById('output').value = ''
        },
        setNominalNull: function(event){
            if(event.target.value==''){
                document.getElementById('nominal').value = ''
                document.getElementById('output').value = ''
            }
            else{
                this.getOutputCalc()
            }
        },
        getOutputCalc(){
            const jenisKurs = document.getElementById('jenis-kurs').value
            const mataUang = document.getElementById('mata-uang')
            const nominal = document.getElementById('nominal').value
            const nominalMataUang = jenisKurs=='beli' ? mataUang.options[mataUang.selectedIndex].getAttribute('data-beli') : mataUang.options[mataUang.selectedIndex].getAttribute('data-jual')
            const output = nominal * nominalMataUang
            document.getElementById('output').value = myFunction.rupiah(output)
        }
    },
}
</script>
