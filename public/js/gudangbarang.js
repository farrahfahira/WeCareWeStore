// Ambil elemen form dan tombol "Tambah Barang"
const form = document.querySelector('form');
const tambahBarangBtn = document.querySelector('.btn-info');

// Ambil elemen tabel
const tabel = document.querySelector('.tabel-barang');

// Tambahkan event listener pada tombol "Tambah Barang"
tambahBarangBtn.addEventListener('click', function() {

  // Buat elemen baru untuk tabel dan isi dengan data dari form
  const tr = document.createElement('tr');
  const tdNama = document.createElement('td');
  const tdJumlah = document.createElement('td');
  const tdAlamat = document.createElement('td');
  const tdKet = document.createElement('td');

  tdNama.textContent = form.nama.value;
  tdJumlah.textContent = form.jumlah.value;
  tdAlamat.textContent = form.alamat.value;
  tdKet.textContent = form.ket.value;

  tr.appendChild(tdNama);
  tr.appendChild(tdJumlah);
  tr.appendChild(tdAlamat);
  tr.appendChild(tdKet);

  // Tambahkan baris data ke tabel
  tabel.appendChild(tr);

  // Reset form untuk mengosongkan isian
  form.reset();
});
