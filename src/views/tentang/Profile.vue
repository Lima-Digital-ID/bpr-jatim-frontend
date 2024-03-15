<template>
  <div>
    <Header class-nav="transparent-white" />
    <section class="hero-profile d-flex align-items-center">
      <div class="container custom d-flex align-items-center">
        <div class="row align-items-center">
          <div class="col-md-7">
            <h1 class="font-weight-bold mb-4 color-white">
              Profil Bank UMKM <br />
              <span class="color-blue">Jawa Timur</span>
            </h1>
            <p class="font-weight-light mb-4 color-white">{{ $t("profil") }}</p>
            <a
              href="#"
              @click="scrollTo('#sejarah')"
              class="btn btn-circle-primary px-4 py-2"
              >{{ $t("selengkapnya") }}</a
            >
            <a href="" class="color-white ml-4"
              ><span class="fa fa-play"></span> {{ $t("tontonVideo") }}</a
            >
          </div>
        </div>
      </div>
    </section>
    <section id="sejarah" class="py-5">
      <div class="container custom">
        <div class="row mt-5 mb-4">
          <div class="col-md-6">
            <h3 class="font-weight-bold color-blue">
              {{ $t("sejarah") }} Bank UMKM
            </h3>
            <p>{{ $t("textSejarah") }}</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="img-cover img-sejarah"
              height="450px"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-md-7 font-weight-light col-sejarah">
            <p class="color-dark2">
              <span class="info">1</span>
              {{ $t("sejarah1") }} <a href="">Lebih Banyak</a>
            </p>
            <p class="color-dark2">
              <span class="info">2</span>
              {{ $t("sejarah2") }}
            </p>
            <p class="color-dark2">
              <span class="info">3</span>
              {{ $t("sejarah3") }}
            </p>
            <p class="color-dark2">
              <span class="info">4</span>
              {{ $t("sejarah4") }} <a href="">Lebih Banyak</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="" class="py-5">
      <div class="container custom">
        <div class="row">
          <div class="col-md-6">
            <h3 class="font-weight-bold color-blue">
              {{ $t("visiMisi") }} Bank UMKM
            </h3>
            <p>{{ $t("textVisiMisi") }}</p>
          </div>
        </div>
        <div class="row mt-4 align-items-center">
          <div class="col-md-7">
            <div class="bg-visimisi mb-3">
              <div class="row py-3 align-items-center">
                <div class="col-2 text-center pr-0">
                  <span class="fa fa-university fa-3x"></span>
                </div>
                <div class="col-10">
                  <h5 class="font-weight-bold mb-1">{{ $t("visi") }}</h5>
                  <p class="mb-0 font-weight-light">
                    {{ $t("textVisi") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-visimisi mb-3">
              <div class="row py-3 align-items-center">
                <div class="col-2 text-center pr-0">
                  <span class="fa fa-store fa-3x"></span>
                </div>
                <div class="col-10">
                  <h5 class="font-weight-bold mb-1">{{ $t("misi") }}</h5>
                  <p class="mb-0 font-weight-light">
                    {{ $t("textMisi") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-visimisi mb-3">
              <div class="row py-3 align-items-center">
                <div class="col-2 text-center pr-0">
                  <span class="fa fa-handshake fa-3x"></span>
                </div>
                <div class="col-10">
                  <h5 class="font-weight-bold mb-1">Moto</h5>
                  <p class="mb-0 font-weight-light">
                    {{ $t("textMoto") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
              class="img-cover img-visimisi"
              height="450px"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="peranan" class="py-5">
      <div class="container custom">
        <div class="row justify-content-center">
          <div class="col text-center">
            <h3 class="font-weight-bold color-white">Peranan</h3>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <div class="peranan p-4">
              <span class="color-blue fa-3x fa fa-people-carry"></span>
              <h4 class="mt-3 font-weight-bold">PRO POOR</h4>
              <p class="font-weight-light">{{ $t("textPeranan1") }}</p>
            </div>
          </div>

          <div class="col">
            <div class="peranan p-4">
              <span class="color-blue fa-3x fa fa-hands-helping"></span>
              <h4 class="mt-3 font-weight-bold">PRO JOB</h4>
              <p class="font-weight-light">{{ $t("textPeranan2") }}</p>
            </div>
          </div>
          <div class="col">
            <div class="peranan p-4">
              <span class="color-blue fa-3x fa fa-object-group"></span>
              <h4 class="mt-3 font-weight-bold">PRO GROWTH</h4>
              <p class="font-weight-light">{{ $t("textPeranan3") }}</p>
            </div>
          </div>
          <div class="col">
            <div class="peranan p-4">
              <span class="color-blue fa-3x fa fa-restroom"></span>
              <h4 class="mt-3 font-weight-bold">PRO GENDER</h4>
              <p class="font-weight-light">{{ $t("textPeranan4") }}</p>
            </div>
          </div>
          <div class="col">
            <div class="peranan p-4">
              <span class="color-blue fa-3x fa fa-signature"></span>
              <h4 class="mt-3 font-weight-bold">PRO BUSINESS</h4>
              <p class="font-weight-light">{{ $t("textPeranan5") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="struktur" class="py-5">
      <div class="container custom">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <h4 class="font-weight-bold color-blue">
              {{ $t("strukturOrganisasi") }}
            </h4>
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
          <div class="col-md-7">
            <!-- <div class="img-struktur">
              <img
                src="http://www.bprjatim.co.id/img/struktur/Struktur%20BPR_2018-11-01%2008_19_47.webp"
                class="img-fluid"
                alt=""
                srcset=""
              />
            </div> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-center mx-auto mt-5">
        <!-- Komisaris -->
        <div class="col-md-7 col-lg-6">
          <div class="text-center">
            <h2 style="font-weight: bold;" class="fw-bold text-primary">
              {{ $t("jajaranKomisaris") }}
            </h2>
          </div>
          <br /><br />
          <!-- parents direktur -->
          <div class="d-flex justify-content-center mb-5">
            <div
              class="col-lg-3 col-md-7 col-7 text-center"
              data-toggle="modal"
              data-target="#modalKomisaris1"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Ibu-Ina.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Komisaris Utama</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>President Commisioner</i>
              </p>
              <h6 class="font-weight-bold">
                Ina Dewayanti SE.Ak
              </h6>
              <!-- modal 1 -->
              <modal-profile
                target="modalKomisaris1"
                alt="Komisaris Utama Bank Umkm"
                :img="$imgProfile('Ibu-Ina.webp')"
                bio="Lahir pada tanggal 18 Juni 1966 di Situbondo Jawa Timur. Menjabat sebagai Komisaris Utama Bank BPR Jatim sejak 2023. Sebelumnya berkarir di Manulife Indonesia sebagai Business Director 2020-2022, OCBC NISP 2010-2019 dengan jabatan terakhir sebagai Corporate Funding Business Head."
              />
            </div>
          </div>

          <!-- child komisaris -->
          <div
            class="d-lg-flex row justify-content-center"
            style="margin-top: 5.2rem;"
          >
            <div
              class="col-lg-3 col-md-6 col-7 text-center"
              data-toggle="modal"
              data-target="#modalKomisaris2"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Ibu-Kartika.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Komisaris</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>Commisioner</i>
              </p>
              <h6 class="font-weight-bold">
                Dr.Hj.Kartika Hidayanti M.M. M.HP
              </h6>
              <!-- modal 2 -->
              <modal-profile
                target="modalKomisaris2"
                alt="Komisaris Bank Umkm"
                :img="$imgProfile('Ibu-Kartika.webp')"
                bio="Lahir pada tanggal 16 Mei 1967 di Lamongan Jawa Timur. Menjabat sebagai Komisaris Bank BPR Jatim sejak 2023. Sebelumnya sebgai Wakil Bupati Kabupaten Lamongan 2016-2021"
              />
            </div>
            <div
              class="col-lg-3 col-md-6  col-7 text-center"
              data-toggle="modal"
              data-target="#modalKomisaris3"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Bpk-Purbo.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Komisaris</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>Commisioner</i>
              </p>
              <h6 class="font-weight-bold">
                Ir.Purboyo Sinugroho M.M
              </h6>
              <!-- modal 3 -->
              <modal-profile
                target="modalKomisaris3"
                alt="Komisaris Bank Umkm"
                :img="$imgProfile('Bpk-Purbo.webp')"
                bio="Lahir pada tanggal 5 februari 1964 di Mataram Nusa Tenggara Barat. Menjabat sebagai Komisaris Bank BPR Jatim sejak 2023. Sebelumnya berkarir di Dana Pensiun Bank Jatim sebagai Direktur Keuangan 2022, Bank Jatim 1993-2021 dengan jabatan terakhir sebagai Pemimpin Divisi Penyelamatan Penyelesaian Kredit."
              />
            </div>
            <div
              class="col-lg-3 col-md-6  col-7 text-center"
              data-toggle="modal"
              data-target="#modalKomisaris4"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Bpk-Dwi-Ariadi.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Komisaris</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>Commisioner</i>
              </p>
              <h6 class="font-weight-bold">
                Dwi Ariady Kusuma M.PSDM
              </h6>
              <!-- modal 4 -->
              <modal-profile
                target="modalKomisaris4"
                alt="Direktur Bank Umkm"
                :img="$imgProfile('Bpk-Dwi-Ariadi.webp')"
                bio="Lahir pada tanggal 18 Juni 1985 di Bangkalan Jawa Timur. Menjabat sebagai Komisaris Bank BPR Jatim sejak 2023. Sebelumnya sebagai Koodinator bidang media dan kemitraan strategis Pemerintah Provinsi Jawa Timur 2019-2022."
              />
            </div>
          </div>
        </div>
        <!-- Direktur -->
        <div class="col-md-7 mt-8 col-lg-6">
          <div class="text-center">
            <h2 style="font-weight: bold;" class="fw-bold text-primary">
              {{ $t("jajaranDireksi") }}
            </h2>
          </div>
          <br />
          <!-- parents direktur -->
          <div class="d-lg-flex row justify-content-center mb-5">
            <div
              class="col-lg-3 col-md-6 col-7 text-center"
              data-toggle="modal"
              data-target="#modalDirektur1"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Direktur-Utama.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Direktur Utama</div>
              </div>
              <p class="font-14 color-grey mb-1"><i>President Director</i></p>
              <p class="font-weight-bold " style="font-size: 15px;">
                Drs. Yudhi Wahyu Maharani, Ak., MM.
              </p>
              <!-- modal 5 -->
              <modal-profile
                target="modalDirektur1"
                alt="Direktur Utama Bank Umkm"
                :img="$imgProfile('Direktur-Utama.webp')"
                bio="Lahir pada tanggal 31 Maret 1967 di Magetan. Menjabat Direktur Utama Bank BPR Jatim sejak September 2018. Sebelumnya, berkarir di PT. Bank Jatim Tbk, sejak 1998 sampai dengan 2018 dan jabatan terakhir sebagai Pemimpin Divisi Perencanaan Strategis dan Manajemen Kinerja"
              />
            </div>
          </div>
          <!-- child direktur -->
          <div class="d-lg-flex row justify-content-center">
            <div
              class="col-lg-3 col-md-6  col-7 text-center"
              data-toggle="modal"
              data-target="#modalDirektur2"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Direktur-Pemasaran.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Direktur Pemasaran</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>Marketing Director</i>
              </p>
              <h6 class="font-weight-bold">
                Irwan Eka Wijaya Arsyad, ST.,MM.
              </h6>
              <!-- modal 6 -->
              <modal-profile
                target="modalDirektur2"
                alt="Direktur Bank Umkm"
                :img="$imgProfile('Direktur-Pemasaran.webp')"
                bio="Lahir pada tanggal 24 Agustus 1975 di Ambon. Menjabat Direktur Pemasaran Bank BPR Jatim sejak Juni 2022. Sebelumnya, berkarir di BRI Syariah, PT Bank DKI Jakarta dan PT. Bank Jatim Tbk. Sejak 2013 sampai dengan 2022 dan jabatan terakhir sebagai Kepala Cabang di PT. Bank Jatim Tbk."
              />
            </div>
            <div
              class="col-lg-3 col-md-6  col-7 text-center"
              data-toggle="modal"
              data-target="#modalDirektur3"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Direktur-Kepatuhan.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Direktur Kepatuhan</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>Compliance Director</i>
              </p>
              <h6 class="font-weight-bold">
                Ir. Mohamad Amin
              </h6>
              <!-- modal 7 -->
              <modal-profile
                target="modalDirektur3"
                alt="Direktu Bank Umkm"
                :img="$imgProfile('Direktur-Kepatuhan.webp')"
                bio="Lahir pada tanggal 04 Agustus 1968 di Kediri. Menjabat Direktur Kepatuhan Bank BPR Jatim sejak Juni 2022. Sebelumnya, berkarir di Ditjen Migas, Nusa Bank management BUMN PT. Surveyor Indonesia, Direktur di Oil & Gas Service Company, Pengurus PWNU Jatim Bidang Pengembangan Ekonomi Umat"
              />
            </div>
            <div
              class="col-lg-3 col-md-6 col-7 text-center"
              data-toggle="modal"
              data-target="#modalDirektur4"
            >
              <div class="img-manajemen mb-2">
                <img
                  src="../../assets/Direktur-Umum-Keuangan.webp"
                  class="img-fluid border p-1"
                  alt=""
                />
                <div class="title">Direktur Umum & Keuangan</div>
              </div>
              <p class="font-14 color-grey mb-1">
                <i>General & Finance Director</i>
              </p>
              <h6 class="font-weight-bold">
                Agung Soeprihatmanto, SE.
              </h6>
              <modal-profile
                target="modalDirektur4"
                alt="Direktur Bank Umkm"
                :img="$imgProfile('Direktur-Umum-Keuangan.webp')"
                bio="Lahir pada tanggal 30 Agustus 1977 di Surabaya. Menjabat Direktur Umum & Keuangan Bank BPR Jatim sejak Agustus 2022. Sebelumnya, berkarir di PT. Bank DKI Jakarta sejak 2018 - 2022 menjabat sebagai Micro Area Head & Retail Manager, Bank BPD Banten sejak 2012 - 2018 menjabat sebagai Pemimpin Cabang dan Manager Penyelamatan & Penyelesaian Kredit Bermasalah."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ajukan">
      <div class="left">
        <div class="content">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <h5 class="color-darkBlue font-weight-bold mb-1">
                    Kantor Pusat
                  </h5>
                  <p class="font-weight-light">
                    Jalan Ciliwung Nomor 11, Surabaya 60241, Indonesia
                  </p>
                  <h5 class="color-darkBlue font-weight-bold mb-1">Faximili</h5>
                  <p class="font-weight-light">031-5681037</p>
                </div>
                <div class="col-md-6">
                  <h5 class="color-darkBlue font-weight-bold mb-1">Telepon</h5>
                  <p class="font-weight-light">
                    031-5677844, 031-5688542, 031-5688545
                  </p>
                  <h5 class="color-darkBlue font-weight-bold mb-1">Email</h5>
                  <p class="font-weight-light">info@bprjatim.co.id</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h5 class="color-darkBlue font-weight-bold mb-1">Pemilik</h5>
              <p class="font-weight-light">
                Pemerintah Provinsi Jawa Timur <br />
                Pemerintah Kota/Kabupaten se-Jawa Timur <br />
                Dana Pensiun Pegawai Bank Jatim
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <h5 class="color-darkBlue font-weight-bold mb-1">Perizinan</h5>
              <p class="font-weight-light">
                Akta notaris Kosidi Wirjohardjo,SH, notaris di Surabaya nomor 72
                tanggal 21 Desember 2000 dan Akta nomor 14 tanggal 21 Agustus
                2001 Persetujuan dari Menteri Kehakiman dan Hak Asasi Manusia
                Republik Indonesia nomor C-1580.HT.01.01.TH.2001 tanggal 5
                Desember 2001 Surat izin operasional dari Bank Indonesia nomor
                3/13/KEP.DGS/2001 tanggal 5 Oktober 2001.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right text-center d-flex">
        <div class="row align-items-center">
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">1</div>
              <h6 class="font-weight-bold color-white">Kantor Pusat</h6>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">32</div>
              <h6 class="font-weight-bold color-white">Kantor Cabang</h6>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">119</div>
              <h6 class="font-weight-bold color-white">Kantor Kas</h6>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">4</div>
              <h6 class="font-weight-bold color-white">Payment Point</h6>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">35</div>
              <h6 class="font-weight-bold color-white">ATM</h6>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-3 text-center">
            <div class="border">
              <div class="count-kantor">32</div>
              <h6 class="font-weight-bold color-white">Mobil Kas</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";
  import { myFunction } from "@/helper/myFunction";
  import ModalProfile from "../../components/popup/ModalProfile.vue";

  export default {
    name: "Profile",
    components: { Header, Footer, ModalProfile },

    ModalProfilemethods: {
      scrollTo(target) {
        myFunction.scrollTo(target);
      },
    },
  };
</script>
<style scoped>
  #sejarah {
    background: var(--softGrey);
  }
  .bg-visimisi {
    background: white;
    border-radius: 14px;
    border: 1px solid var(--softGrey);
  }
  .bg-visimisi .fa {
    color: var(--darkBlue);
  }
  .bg-visimisi p {
    color: var(--darkBlue2);
  }
  .bg-visimisi h5 {
    color: var(--blue);
  }
  #peranan {
    background: url("https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  #peranan::before,
  #identitas .col-bg::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(47, 59, 85, 0.6);
  }
  #identitas .col-bg::before {
    background: rgba(0, 127, 231, 0.7);
  }
  .peranan {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    text-align: center;
  }
  .img-manajemen,
  .img-struktur {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 14px;
  }
  .img-manajemen .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
    left: 0;
    background: var(--blue);
    color: white;
    padding: 0.5rem 1rem;
  }
  #ajukan .content {
    width: 80%;
  }
  #ajukan .right {
    background: url("https://images.unsplash.com/photo-1594260042357-d914dfc7a79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80");
    background-repeat: no-repeat;
    background-size: cover;
  }
  #ajukan .right .row {
    width: 80%;
    margin: auto;
  }
  .count-kantor {
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
  .col-sejarah p {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 0px;
    padding-bottom: 2rem;
  }
  .col-sejarah p::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    padding: 1px;
    background: var(--blue);
    opacity: 0.2;
  }
  .col-sejarah p .info {
    position: absolute;
    left: 0;
    background: var(--blue);
    color: var(--softGrey);
    padding: 3px 10px;
    font-weight: bold;
    font-size: 13px;
    border-radius: 100%;
    transform: translateX(-50%);
  }
  .img-visimisi {
    border-bottom-left-radius: 50px;
  }
  .img-sejarah {
    border-bottom-right-radius: 50px;
  }
  @media only screen and (max-width: 780px) {
    .mt-8 {
      margin-top: 10rem;
    }
  }
</style>
