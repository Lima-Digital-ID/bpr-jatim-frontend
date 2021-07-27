<template>
    <div>
        <div class="container">
            <div class="row mt-4 shadow-sm">
                <div class="col-md-12">
                    <h1 class="text-center">Pinjaman Modal</h1>
                    <strong>Syarat Pinjaman Modal</strong>
                     <hr>
                </div>
                <div class="col-md-12">
                        <div class="form-group">
                            <label class="fieldlabels">Jenis Tempat Tinggal: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> Rumah Pribadi</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">Kos</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">Kontrakan</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">Apartemen</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Lain-lain</label>
                            </div>
                        </div>
                        
                        <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran NPWP</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran KTP Suami</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran KTP Istri</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">NIB</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Akta Notaris</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran Surat Nikah</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran BPKB</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">Lampiran Domisili Usaha</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">Surat Domisili </label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">NPWP Usaha</label>
                                <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-sm-12 col-md-12 mb-4">
                            <button class="btn btn-danger w-100">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>