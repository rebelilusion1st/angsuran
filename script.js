// mengambil semua element
const nama = document.getElementById('nama');
let jmlp = document.getElementById('jmlp');
let tenor = document.getElementById('tenor');
let bunga = document.getElementById('bunga');
let angsuran = document.getElementById('angsuran');
let btn = document.getElementById('tampil');

function hitungAngsuran() {
    let hasil;
    hasil = (jmlp.value + (jmlp.value * (bunga.value/100) * tenor.value)) / tenor.value;
    return angsuran.value = hasil;
}

btn.addEventListener('click', hitungAngsuran);