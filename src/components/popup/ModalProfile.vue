<template>
  <!-- jika modal tidak keluar atau tidak tampil mungkin karena penamaan data-target modal tidak sesuai dengan target modal id attribute data-target harus berisi awalan #modaltarget -->
  <div
    class="modal fade"
    :id="target"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <img :src="img" class="img-fluid border p-1" :alt="alt" />
            </div>
            <div class="col-md-8">
              <h4>Biodata</h4>
              <ul>
                <li>
                  {{ bio }}
                </li>
              </ul>
              <!-- <h4>Riwayat Pendidikan</h4>
                                    <ul>
                                        <li>S1 Ekonomi - Universitas Airlangga Surabaya</li>
                                        <li>S2 Manajemen - Universitas Airlangga Surabaya</li>
                                    </ul>         
                                <h4>Riwayat Pekerjaan</h4>
                                    <ul>
                                        <li>Pemimpin Divisi Perencanaan Strategis dan Manajemen Kinerja - PT Bank Jatim (Oktober 2017 - Agustus 2018)</li>
                                        <li>Pengawas Yayasan Kesejahteraan Pegawai Bank Jatim - Yayasan Kesejahteraan Pegawai Bank Jatim (2016 - Agustus 2018)</li>
                                        <li>Pemimpin Divisi Audit Internal - PT Bank Jatim (November 2014 - Oktober 2017)</li>
                                        <li>Pgs. Pemimpin Divisi Audit Internal - PT Bank Jatim (Februari 2014 - November 2014) </li>
                                        <li>Pemimpin Sub Divisi Special & Assurance Audit - PT Bank Jatim (2013 - Februari 2014)</li>
                                        <li>Pemimpin Sub Divisi Operasional & Finance Audit - PT Bank Jatim (2012 - 2013) </li>
                                        <li>Anggota Senior Komite Pemantau Risiko - PT Bank Jatim (2011 - 2012)
Anggota Senior Komite Audit - PT Bank Jatim (2007 - 2011)</li>
                                        <li>Anggota Komite Audit - PT Bank Jatim (2004 - 2007)</li>
                                        <li>Staf Ahli Dewan Komisaris - PT Bank Jatim (1999 - 2009)</li>
                                        <li>Dosen Fakultas Ekonomi - Univesitas 45 Surabaya (1998 - 2000)</li>
                                        <li>Anggota Dewan Audit - PT Bank Jatim (1998 - 1999)</li>
                                        <li>Pelaksana Harian Tim Likuidasi cab. Manyar K. Surabaya - PT Sejahtera Bank Umum (1997 - 1998)</li>
                                        <li>Officer Auditor Biro Audit .. Kontrol - PT Sejahtera Bank Umum(1992 - 1997)</li>
                                        <li>Yunior Auditor - Kantor Akuntan Publik Drs. S.Supoyo & Rekan Surabaya (1990 - 1991)</li>
                                    </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModalProfile",
    props: ["img", "alt", "bio", "target"],
  };
</script>

<style></style>
