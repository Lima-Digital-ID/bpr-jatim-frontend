<template>
    <section id="kurs-section" class="py-5">
        <div class="container custom">
            <div class="row">
                <div class="col">
                    <div class="row align-items-center">
                        <div class="col">
                            <div class="nav nav-tabs custom-nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-kurs-tab" data-toggle="tab" href="#nav-kurs" role="tab" aria-controls="nav-kurs" aria-selected="true"> <span class="fa fa-coins mr-2"></span> Kurs Bank UMKM</a>
                                <a class="nav-item nav-link" id="nav-kalkulator-tab" data-toggle="tab" href="#nav-kalkulator" role="tab" aria-controls="nav-kalkulator" aria-selected="false"><span class="fa fa-calculator mr-2"></span> Kalkulator</a>
                            </div>
                        </div>
                        <div class="d-none d-lg-block col text-right">
                            <p>Update Terakhir 12 Juli 2021 17:00</p>
                        </div>
                    </div>
                    <div class="tab-content custom-tab-content" id="nav-tabContent">
                    <div class="tab-pane  px-4 pt-4 fade show active" id="nav-kurs" role="tabpanel" aria-labelledby="nav-kurs-tab">
                        <div class="list-kurs d-flex justify-content-start">

                            <div v-for="data in kurs" :key="data.nama" class="box-kurs mb-4">
                                <h5 class="font-weight-bold color-blue">{{data.nama}}</h5>
                                <hr class="my-3">
                                <div class="kurs-info mb-2">
                                    <div class="font-weight-bold">Jual</div>
                                    <div>{{rupiah(data.harga_jual)}} <span class="ml-2 fa fa-caret-up color-green"></span> </div>
                                </div>
                                <div class="kurs-info">
                                    <div class=" font-weight-bold">Beli</div>
                                    <div>{{rupiah(data.harga_beli)}} <span class="ml-2 fa fa-caret-up color-green"></span> </div>
                                </div>
                            </div>

                        </div>
                
                    </div>
                    <div class="tab-pane fade" id="nav-kalkulator" role="tabpanel" aria-labelledby="nav-kalkulator-tab">
                        <div class="p-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Jenis Kurs</label>
                                    <select name="" id="" class="form-control">
                                        <option value="">Jual</option>
                                        <option value="">Beli</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Mata Uang</label>
                                    <select name="" id="" class="form-control">
                                        <option value="">--Pilih Mata Uang--</option>
                                        <option  v-for="data in kurs" :key="data.nama" :value="data.id">{{data.nama}}</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Nominal</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="" class="font-weight-bold">Output Rupiah</label>
                                    <input type="text" class="form-control" style="background:#f6f8fd" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="d-sm-block d-lg-none mt-3 font-13 font-weight-bold">
                        <p>*Update Terakhir 12 Juli 2021 17:00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {myFunction} from '@/helper/myFunction'

export default {
    name : 'Kurs',
    data(){
        return{
            kurs : []
        }
    },
    mounted() {
        this.axios
        .get(this.$serverURL+'api/get-kurs-home')
        .then(res => (this.kurs = res.data.data))
        .catch(err => console.log(err))
    },
    methods: {
        rupiah(nominal){
            return myFunction.rupiah(nominal)
        }
    },
}
</script>
