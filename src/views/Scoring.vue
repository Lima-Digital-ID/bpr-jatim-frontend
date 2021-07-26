<template>
  <div>
      <Navbar/>
      
      <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 id="heading">Scoring</h2>
                <!-- <p>Skor ini akan menilai ekonomi anda</p> -->
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>1</strong></li>
                        <li id="personal"><strong>2</strong></li>
                        <li id="payment"><strong>3</strong></li>
                        <li id="confirm"><strong>4</strong></li>
                    </ul>
                    <div class="progress">``
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> <br> <!-- fieldsets -->
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Analisa Character:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 1 - 4</h2>
                                </div>
                            </div>      
                            
                        <div class="form-group">
                            <label class="fieldlabels">Jenis Kelamin: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="pria" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="pria">Pria</label>
                                </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="wanita" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="wanita">Wanita</label>
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Status Perkawinan: *</label>
                                <div class="custom-control custom-radio">
                                <input type="radio" id="belumMenikah" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="belumMenikah">Belum Menikah</label>
                                </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="menikah" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="menikah">Menikah</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="jandaOrDuda" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="jandaOrDuda">Janda/Duda</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Jumlah Tanggungan: *</label>
                                <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Tidak ada tanggungan</label>
                                </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">1 Orang</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">2 Orang</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">
                                    3 sd 5 &lt; Orang</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">
                                   &lt; 5 Orang</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Pendidikan Tertanggung: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Belom Sekolah/TK</label>
                                </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">SD</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">SMP</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">SMA</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">Kuliah</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Usia Peminjam: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan"> &lt; 25 tahun</label>
                                </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> > 25 tahun s/d 35 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">> 35 tahun s/d 40 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 40 tahun s/d 55 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 55 tahun</label>
                            </div>
                        </div>

                        </div> 
                        <input type="button" name="next" class="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Analisa Capacity:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 2 - 4</h2>
                                </div>
                            </div>

                        <div class="form-group">
                            <label class="fieldlabels">Pendidikan Terakhir: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">SD</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">SMP</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">SMA</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">S1</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">S2</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Jenis Pekerjaan: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">Profesi</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">Pegawai Negeri</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">Pegawai Swasta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">Pensiunan</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Ibu Rumah Tangga</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="fieldlabels">Lama Bekerja: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">&lt; 1 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">> 1 tahun s/d 3 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 3 tahun s/d 5 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 5 tahun s/d 10 tahun</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 10 tahun</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="fieldlabels">Status Pekerjaan: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">Pegawai Tetap</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">CPNS</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">Pegawai Kontrak</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Tujuan Pinjaman: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">Biaya Pendidikan</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">Pembelian Kendaraan Bermotor</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">Pembelian Peralatan Rumah Tangga</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">Renovasi Rumah</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Kebutuhan konsumtif lain-lain</label>
                            </div>
                        </div>

                        </div> 
                          <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Analisa Repayment Capacity:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 3 - 4</h2>
                                </div>
                            </div> 
                        
                        <div class="form-group">
                            <label class="fieldlabels">Nilai Aset: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> &lt; 100 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">> 100 - 200 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 200 - 300 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 300 Juta - 500 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 500 Juta</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="fieldlabels">Penghasilan / Gaji: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> &lt; 2 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">> 2 - 3,5 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 3,5 - 5,5 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 5,5 Juta - 7 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 7 Juta</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Pengeluaran Biaya Rumah Tangga: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> &lt; 1 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">> 1 - 1,5 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 1,5 - 2 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 2 Juta - 3 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 3 Juta</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Debt to Euity Ratio: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">&lt; 250%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">200% &lt; DER &lt; 250%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">150% &lt; DER &lt; 200%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">100% &lt; DER &lt; 150%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">&lt; 100%</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">ROA (Return on Asset): *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">&lt; 1%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">1% &lt; ROA  &lt; 1,5%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">1,5% &lt; ROA &lt; 2,0%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">2% &lt; ROA &lt; 2,5%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 2,5%</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">ROE (Return on Equity): *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang">&lt; 1%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">1% &lt; ROE  &lt; 1,5%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">1,5% &lt; ROE &lt; 2,0%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">2% &lt; ROE &lt; 2,5%</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 2,5%</label>
                            </div>
                        </div>

                          </div> 
                        <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Analisa Repayment Capacity:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 4 - 4</h2>
                                </div>
                            </div> 

                            <!--  -->

                        <div class="form-group">
                            <label class="fieldlabels">Pinjaman di Bank/Lembaga Keuangan Lain: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> Tidak ada pinjaman</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang">1 Pinjaman</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">2 s/d 3 pinjaman</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">4 s/d 5 pinjaman</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 5 pinjaman</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="fieldlabels">Kondisi SLIK: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> Kolektibilitas Lancar</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang"> Kolektibilitas Dalam Perhatian Khusus</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">Kolektibilitas Kurang Lancar</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">Kolektibilitas Diragukan</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">Kolektibilitas Macet</label>
                            </div>
                        </div>
                            <!--  -->
                            
                        <div class="form-group">
                            <label class="fieldlabels">Total Angsuran Bank/Lembaga Kuangan Lain: *</label>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="1-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="1-orang"> &lt; 1,5 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="2-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="2-orang"> > 1,5 Juta - 2 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="3-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="3-orang">> 2 Juta - 2,5 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="5-orang" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="5-orang">> 2,5 Juta - 3 Juta</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="noTanggungan" name="customRadio" class="custom-control-input">
                                <label class="custom-control-label" for="noTanggungan">> 3 Juta</label>
                            </div>
                        </div>

                        </div>
                        <input type="button" name="next" class="next action-button" value="Finish" /> 
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0
}

html {
    height: 100%
}

p {
    color: grey
}

#heading {
    text-transform: uppercase;
    color: #673AB7;
    font-weight: normal
}

#msform {
    text-align: center;
    position: relative;
    margin-top: 20px
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative
}

.form-card {
    text-align: left
}

#msform fieldset:not(:first-of-type) {
    display: none
}

#msform input,
#msform textarea {
    padding: 8px 15px 8px 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    background-color: #ECEFF1;
    font-size: 16px;
    letter-spacing: 1px
}

#msform input:focus,
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #673AB7;
    outline-width: 0
}

#msform .action-button {
    width: 100px;
    background: #673AB7;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 0px 10px 5px;
    float: right
}

#msform .action-button:hover,
#msform .action-button:focus {
    background-color: #311B92
}

#msform .action-button-previous {
    width: 100px;
    background: #616161;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px 10px 0px;
    float: right
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
    background-color: #000000
}

.card {
    z-index: 0;
    border: none;
    position: relative
}

.fs-title {
    font-size: 25px;
    color: #673AB7;
    margin-bottom: 15px;
    font-weight: normal;
    text-align: left
}

.purple-text {
    color: #673AB7;
    font-weight: normal
}

.steps {
    font-size: 25px;
    color: gray;
    margin-bottom: 10px;
    font-weight: normal;
    text-align: right
}

.fieldlabels {
    color: gray;
    text-align: left
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: lightgrey
}

#progressbar .active {
    color: #673AB7
}

#progressbar li {
    list-style-type: none;
    font-size: 15px;
    width: 25%;
    float: left;
    position: relative;
    font-weight: 400
}

#progressbar #account:before {
    font-family: FontAwesome;
    content: "\f13e"
}

#progressbar #personal:before {
    font-family: FontAwesome;
    content: "\f007"
}

#progressbar #payment:before {
    font-family: FontAwesome;
    content: "\f030"
}

#progressbar #confirm:before {
    font-family: FontAwesome;
    content: "\f00c"
}

#progressbar li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    color: #ffffff;
    background: lightgray;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px
}

#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: lightgray;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: -1
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: #673AB7
}

.progress {
    height: 20px
}

.progress-bar {
    background-color: #673AB7
}

.fit-image {
    width: 100%;
    object-fit: cover
}
</style>

<script>

import Navbar from '@/views/partials/Navbar.vue';

export default {
  name:'Personal-data',
  components: Navbar
}

</script>

<script>
$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});
</script>