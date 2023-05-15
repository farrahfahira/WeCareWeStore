// Import library Express
const express = require('express');
const app = express();

// Import library body-parser untuk mengakses data yang dikirim melalui form
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Import library mysql2 untuk menghubungkan ke database MySQL
const mysql = require('mysql2');

// Konfigurasi koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'belajar',
});

// Route untuk meng-handle request POST dari form
app.post('/', (req, res) => {
  // Ambil data dari form
  const nama = req.body.nama;
  const email = req.body.email;
  const nohp = req.body.nohp;
  const alamat = req.body.alamat;
  const kodepos = req.body.kodepos;
  const password = req.body.password;

  // Query untuk menyimpan data ke database
  const sql = 'INSERT INTO users (nama, email, nohp, alamat, kodepos, password) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [nama, email, nohp, alamat, kodepos, password], (err, result) => {
    if (err) throw err;
    console.log('Data berhasil disimpan');
    res.redirect('/success.edge'); // Redirect ke halaman sukses
  });
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});

