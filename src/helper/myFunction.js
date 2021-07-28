export const myFunction = {
    scrollTo: function(target){
        let offsetTarget = document.querySelector(target).offsetTop
        window.scrollTo({
            top: offsetTarget-92,
            left: 0,
            behavior: 'smooth'
        });        
    },
    rupiah: function(number){
        let bilangan = number;
                
        let	reverse = bilangan.toString().split('').reverse().join('')
        let ribuan 	= reverse.match(/\d{1,3}/g);
        let ribuanReturn	= ribuan.join('.').split('').reverse().join('');    

        return ribuanReturn
    },
     tglIndo: function(string) {
        const bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September' , 'Oktober', 'November', 'Desember'];
    
        const tanggal = string.split("-")[2];
        const bulan = string.split("-")[1];
        const tahun = string.split("-")[0];
    
        return tanggal + " " + bulanIndo[Math.abs(bulan)] + " " + tahun;
    }    
}