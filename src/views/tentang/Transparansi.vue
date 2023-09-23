<template>
  <div>
    <Header class-nav="transparent-black" />
    <section id="hero-transparansi" class="pb-5">
      <div class="container custom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="font-weight-bold">
              Transparansi Bank UMKM
              <br />
              <span class="color-blue">Jawa Timur</span>
            </h1>
            <p class="color-dark2">{{ $t("transparansi") }}</p>
            <br />
            <a href="#" @click="scrollTo('#saham')"
              ><span class="scroll-bottom fa fa-arrow-down"></span
            ></a>
          </div>
          <div class="col-md-6 text-center">
            <div class="img-hero">
              <img
                src="@/assets/images/common/img-effect.png"
                class="img-effect"
                alt=""
              />
              <img
                src="http://www.bprjatim.co.id/img/lap_img/Hukum%20Perusahaan_2018-10-31_05_43_49.jpg"
                height="500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="saham" class="py-5">
      <div class="container custom">
        <div class="row">
          <div class="col-12">
            <div
              class="nav nav-tabs custom-nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              <a
                class="nav-item nav-link active"
                id="nav-komposisi-tab"
                data-toggle="tab"
                href="#nav-komposisi"
                role="tab"
                aria-controls="nav-komposisi"
                aria-selected="true"
              >
                <span class="fa fa-money-check-alt mr-2"></span> Komposisi
                Saham</a
              >
              <a
                class="nav-item nav-link"
                id="nav-persentase-tab"
                data-toggle="tab"
                href="#nav-persentase"
                role="tab"
                aria-controls="nav-persentase"
                aria-selected="false"
                ><span class="fa fa-chart-pie mr-2"></span> Persentase</a
              >
            </div>
            <div class="tab-content custom-tab-content" id="nav-tabContent">
              <div
                class="tab-pane  px-4 pt-4 fade show active"
                id="nav-komposisi"
                role="tabpanel"
                aria-labelledby="nav-komposisi-tab"
              >
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <td>Pemilik Saham / Shareowners</td>
                        <td>Lembar Saham / Shares</td>
                        <td>Nominal</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in komposisiSaham" :key="index">
                        <!-- <td>Pemerintah Propinsi Jatim</td>
                        <td>3.603.803</td>
                        <td>360.380.300</td> -->
                        <td>{{ item.pemilik_saham }}</td>
                        <td>{{ rupiah(item.lembar, "") }}</td>
                        <td>{{ rupiah(item.nominal, "") }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade p-4"
                id="nav-persentase"
                role="tabpanel"
                aria-labelledby="nav-persentase-tab"
              >
                <highcharts :options="chartOptions"></highcharts>
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
  import { Chart } from "highcharts-vue";
  import { myFunction, rupiah } from "@/helper/myFunction";
  import $axios from "@/plugins/axios";

  export default {
    name: "Transparansi",
    components: { Header, Footer, Highcharts: Chart },
    data() {
      return {
        komposisiSaham: [],
        chart: [],
        chartOptions: {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
          },
          title: {
            text: "Persentase Pemegang Saham Bank BPR Jatim",
          },
          tooltip: {
            pointFormat: "{series.name}: <b>Rp.{point.y}</b>",
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              },
            },
          },
          series: [
            {
              name: "Nominal",
              colorByPoint: true,
              data: [
                {
                  name: ``,
                  y: 2000,
                  sliced: true,
                  selected: true,
                  color: "#0770cd",
                },
                {
                  name: ``,
                  y: 0,
                  color: "#2f3b55",
                },
                {
                  name: ``,
                  y: 0,
                },
              ],
            },
          ],
        },
      };
    },
    methods: {
      scrollTo(target) {
        myFunction.scrollTo(target);
      },
      rupiah,
      async fetchThis(api_url) {
        try {
          let response = await $axios(api_url, {
            methods: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          return response.data.data;
        } catch (e) {
          console.error(e);
        }
      },
    },
    async mounted() {
      this.komposisiSaham = await this.fetchThis("get-komposisi-saham");

      let { pemprov, kota_kab, dpd } = await this.fetchThis(
        "get-persentase-saham"
      );

      this.chartOptions.series[0].data[0].name = `${pemprov.name}(${pemprov.total_lembar} Lembar)`;
      this.chartOptions.series[0].data[0].y = parseInt(pemprov.total_nominal);
      this.chartOptions.series[0].data[1].name = `${kota_kab.name}(${kota_kab.total_lembar} Lembar)`;
      this.chartOptions.series[0].data[1].y = parseInt(kota_kab.total_nominal);
      this.chartOptions.series[0].data[2].name = `${dpd.name}(${dpd.total_lembar} Lembar)`;
      this.chartOptions.series[0].data[2].y = parseInt(dpd.total_nominal);
    },
  };
</script>
<style scoped>
  #hero-transparansi {
    padding-top: 150px;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }
  #hero-transparansi::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    bottom: 0;
    right: 0;
    border-radius: 50px;
    background: var(--blue);
    opacity: 0.1;
    transform: translate(50%, 50%);
  }
  #hero-transparansi::after {
    content: "";
    position: absolute;
    width: 30%;
    right: 0;
    top: 0;
    height: 100%;
    background: var(--blue);
    opacity: 0.2;
    z-index: -1;
    border-radius: 50px 0px 0px 50px;
  }
  .scroll-bottom {
    -webkit-animation: ripple 1s linear infinite;
    animation: ripple 1s linear infinite;
    background: var(--blue);
    color: white;
    padding: 0.9rem 1rem;
    border-radius: 100%;
  }
  .img-hero {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .img-effect {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100px;
    opacity: 0.5;
    transform: translate(-75%, -25%);
  }
  .img-hero img:not(.img-effect) {
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }
  .table {
    background: white;
    border-radius: 8px;
  }
  .table thead td:first-child {
    border-top-left-radius: 8px;
  }
  .table thead td:last-child {
    border-top-right-radius: 8px;
  }
  .table td,
  .table th {
    padding: 1rem;
  }
  .table tbody {
    color: var(--darkBlue2);
  }
  .table thead {
    font-weight: bold;
    background: var(--blue);
    color: white;
  }
  .table-hover tbody tr:hover {
    background: rgba(246, 248, 253, 0.8);
  }
</style>
