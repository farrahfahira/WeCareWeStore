// Ambil elemen form dan tombol "Tambah Barang"
const form = document.querySelector('form');
const tambahBarangBtn = document.querySelector('.btn-info');

// Ambil elemen tabel
const tabel = document.querySelector('.tabel-barang');

// Tambahkan event listener pada tombol "Tambah Barang"
tambahBarangBtn.addEventListener('click', function() {

  // Buat elemen baru untuk tabel dan isi dengan data dari form
  const tr = document.createElement('tr');
  const tdKat = document.createElement('td');
  const tdNama = document.createElement('td');
  const tdJumlah = document.createElement('td');
  const tdAlamat = document.createElement('td');
  const tdKet = document.createElement('td');

  tdKat.textContent = form.Kat.value;
  tdNama.textContent = form.nama.value;
  tdJumlah.textContent = form.jumlah.value;
  tdAlamat.textContent = form.alamat.value;
  tdKet.textContent = form.ket.value;

  tr.appendChild(tdKat);
  tr.appendChild(tdNama);
  tr.appendChild(tdJumlah);
  tr.appendChild(tdAlamat);
  tr.appendChild(tdKet);

  // Tambahkan baris data ke tabel
  tabel.appendChild(tr);

  // Reset form untuk mengosongkan isian
  form.reset();
});

// Di dalam file gudangbarang.js atau di tempat yang sesuai
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah aksi default pengiriman formulir

  // Lakukan pengalihan ke URL yang diinginkan
  window.location.href = 'https://wa.me/qr/KXQLSUH3OFHYE1';
});