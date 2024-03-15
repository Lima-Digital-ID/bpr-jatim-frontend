<template>
  <div>
    <Header class-nav="transparent-black" />
    <section class="mt-navbar pb-5">
      <div class="container custom">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1 class="font-weight-bold mt-5 text-left">
              Lowongan staff Bank UMKM Jawa Timur
            </h1>
            <!-- <div class="box-white mt-4" v-html="this.karier.konten">
                        </div> -->
            <div class="mt-3 d-flex font-14 justify-content-between">
              <p class="color-red">15 Jan 2024 08:52</p>
              <div class="d-flex">
                <!-- <p class="mr-3"><span class="fa fa-user"></span> Admin</p>
                <p>
                  <span class="fa fa-eye"></span>
                  {{ this.detail.telah_dilihat }}x
                </p> -->
              </div>
            </div>
            <div class="mt-2 box-white d-flex justify-content-center">
              <div class="text-center">
                <img
                  src="@/assets/images/karir/karir-min.jpg"
                  class="img-thumbnail mt-4"
                  width="600"
                  alt="karier"
                />
              </div>
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

  export default {
    name: "Karier",
    components: { Header, Footer },
    data() {
      return {
        karier: [],
      };
    },
    mounted() {
      this.axios
        .get(this.$serverURL + "api/get-karier")
        .then((res) => {
          this.karier = res.data.data;
        })
        .catch((err) => console.log(err));
    },
  };
</script>
