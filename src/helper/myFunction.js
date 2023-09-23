export const myFunction = {
  scrollTo: function(target) {
    let offsetTarget = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: offsetTarget - 92,
      left: 0,
      behavior: "smooth",
    });
  },
  rupiahEstimasi: function(number) {
    let bilangan = number;

    let reverse = bilangan
      .toString()
      .split("")
      .reverse()
      .join("");
    let ribuan = reverse.match(/\d{1,3}/g);
    let ribuanReturn = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");

    return ribuanReturn;
  },
  rupiah: function(number, prefix) {
    var bilangan = number.toString().replace(/[^,\d]/g, "");
    var split = bilangan.split(",");
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;

    return prefix == undefined ? rupiah : prefix + " " + rupiah;
  },
  tglIndo: function(string) {
    const bulanIndo = [
      "",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const tanggal = string.split("-")[2];
    const bulan = string.split("-")[1];
    const tahun = string.split("-")[0];

    return tanggal + " " + bulanIndo[Math.abs(bulan)] + " " + tahun;
  },
};

export const rupiah = (number, prefix) => {
  var bilangan = number.toString().replace(/[^,\d]/g, "");
  var split = bilangan.split(",");
  var sisa = split[0].length % 3;
  var rupiah = split[0].substr(0, sisa);
  var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;

  return prefix == undefined ? rupiah : prefix + " " + rupiah;
};
