<template lang="">
  <div>
      <Navbar/>
      
      <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 id="heading">Biodata Diri</h2>
                <p>Lengkapi data diri anda</p>
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>KTP</strong></li>
                        <li id="personal"><strong>Bank</strong></li>
                        <li id="payment"><strong>Pekerjaan</strong></li>
                        <li id="confirm"><strong>Kontak</strong></li>
                    </ul>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> <br> <!-- fieldsets -->
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Biodata diri:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 1 - 4</h2>
                                </div>
                            </div>
                             <div class="row">
                               <div class="col-md-6">
                                 <input type="file">
                                 <label>Foto Ktp</label>
                               </div>
                               <div class="col-md-6">
                                 <input type="file">
                                 <label>Foto Memegang Ktp</label>
                               </div>
                             </div>
                             <hr>
                             <label>Nama Lengkap: *</label>
                             <input type="text" name="text" class="form-control" placeholder="" /> 

                             <label>NIK: *</label>
                             <input type="number" name="text" class="form-control" placeholder="" /> 

                             <label class="">Provinsi: *</label> 
                              <select class="form-control">
                                <option selected readonly disabled>Pilih provinsi</option>
                              </select>

                             <label class="">Kabupaten: *</label> 
                              <select class="form-control">
                                <option selected readonly disabled>Pilih kabupaten</option>
                              </select>

                             <label class="">Kecamatan: *</label> 
                              <select class="form-control">
                                <option selected readonly disabled>Pilih kecamatan</option>
                              </select>

                             <label class="">Kantor Cabang: *</label> 
                              <select class="form-control">
                                <option selected readonly disabled>Pilih Kantor Cabang</option>
                              </select>

                             <label class="">Tempat lahir: *</label> 
                             <input type="text" name="pwd" placeholder="" /> 

                             <label class="">Tanggal lahir: *</label> 
                             <input type="date" name="pwd" placeholder="" /> 
                             
                             <label class="">Alamat: *</label> 
                             <textarea class="form-control" name="alamat"></textarea>
                        </div> 
                        <input type="button" name="next" class="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Form Rekening:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 2 - 4</h2>
                                </div>
                            </div>
                            
                              <label class="fieldlabels">Nama akun bank: *</label>
                                <input type="text" name="fname" placeholder="" /> 
                              <label class="">Bank: *</label> 
                              <select class="form-control">
                                <option selected readonly disabled>Pilih Bank</option>
                              </select>
                              <label class="fieldlabels">No.Rekening: *</label> 
                                <input type="number" name="phno" placeholder="" /> 
                        </div> 
                          <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Form Pekerjaan:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 3 - 4</h2>
                                </div>
                            </div> 

                            <label class="fieldlabels">Pekerjaan: *</label>
                              <input type="text" class="form-control"/>

                            <label class="fieldlabels">Jabatan: *</label>
                              <input type="text" class="form-control"/>

                            <label class="fieldlabels">Nama perusahaan: *</label>
                              <input type="text" class="form-control"/>

                            <label class="fieldlabels">Kontak perusahaan: *</label>
                              <input type="text" class="form-control"/>

                          </div> 
                        <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Form Kontak:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 4 - 4</h2>
                                </div>
                            </div> 
                            
                            <label>Hubungan ke satu</label>
                              <select class="form-control">
                                  <option selected readonly disabled>Pilih hubungan</option>
                                  <option>Keluarga</option>
                                  <option>Saudara</option>
                                  <option>Teman</option>
                              </select>

                              <label>Nama Penjamin</label>
                                <input type="text" class="form-control">

                              <label>NIK Penjamin</label>
                                <input type="number" class="form-control">

                              <label>No.Handphone Penjamin</label>
                                <input type="number" class="form-control">

                              <label>Alamat Penjamin</label>
                                <textarea class="form-control"></textarea>

                                <hr>

                                <label>Hubungan ke dua</label>
                              <select class="form-control">
                                  <option selected readonly disabled>Pilih hubungan</option>
                                  <option>Keluarga</option>
                                  <option>Saudara</option>
                                  <option>Teman</option>
                              </select>

                              <label>Nama Penjamin</label>
                                <input type="text" class="form-control">

                              <label>NIK Penjamin</label>
                                <input type="number" class="form-control">

                              <label>No.Handphone Penjamin</label>
                                <input type="number" class="form-control">

                              <label>Alamat Penjamin</label>
                                <textarea class="form-control"></textarea>

                                <hr>

                                <label>Hubungan ke tiga</label>
                              <select class="form-control">
                                  <option selected readonly disabled>Pilih hubungan</option>
                                  <option>Keluarga</option>
                                  <option>Saudara</option>
                                  <option>Teman</option>
                              </select>

                              <label>Nama Penjamin</label>
                                <input type="text" class="form-control">

                              <label>NIK Penjamin</label>
                                <input type="number" class="form-control">

                              <label>No.Handphone Penjamin</label>
                                <input type="number" class="form-control">

                              <label>Alamat Penjamin</label>
                                <textarea class="form-control"></textarea>
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