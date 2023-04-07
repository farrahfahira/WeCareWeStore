"use strict";

const { get } = require("@adonisjs/lucid/src/Factory");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const donasi_cards = [
  {
    img: "/img/kapolri-jenguk-bocah-penderita-tumor-tulang_169.jpeg",
    judul:
      "Menderita Tumor Sejak Masih Dalam Usia Kandungan, Adik Caca Terus Semangat",
    slug: "menderita-tumor-sejak-masih-dalam-kandungan-adik-caca-terus-semangat",
    deskripsi:
      "Caca adalah seorang anak yang mengidap tumor sejak dalam kandungan. Kondisinya menghadirkan banyak tantangan dan pengorbanan bagi keluarganya. Namun, Caca tetap kuat dan bersemangat dalam menghadapi kondisinya yang sulit. Dengan mendukung kampanye galang dana ini, kita dapat membantu Caca dan keluarganya untuk mendapatkan perawatan yang dibutuhkan dan membangkitkan semangatnya agar ia terus berjuang melawan tumor.",
  },
  {
    img: "/img/kursi-roda.jpg",
    judul:
      "Bantu Ibu Ani Untuk Kembali Semangat, Kanker Bukan Akhir dari Segalanya",
    slug: "bantu-ibu-ani-untuk-kembali-semangat-kanker-bukan-akhir-dari-segalanya",
    deskripsi:
      "Ibu Ani adalah seorang ibu yang sedang berjuang melawan kanker. Kanker telah memberikan banyak tantangan dalam hidupnya, baik dari segi fisik maupun mental. Ibu Ani mengalami kelelahan, mual, dan banyak gejala lainnya yang muncul akibat kanker. Namun, meskipun dihadapkan dengan kondisi yang sulit, Ibu Ani tetap bersemangat dan percaya bahwa kanker bukanlah akhir dari segalanya. Melalui kampanye galang dana ini, kita dapat membantu Ibu Ani untuk mendapatkan perawatan yang dibutuhkannya dan memberikan dukungan agar semangatnya tetap terjaga dalam melawan kanker.",
  },
];

Route.get("/", async ({ view, response }) => {
  return view.render("pages/beranda", {
    title: "Beranda",
  });
});

Route.get("/donasi", async ({ view, response }) => {
  return view.render("pages/donasi", {
    title: "Donasi",
    cards: donasi_cards,
  });
});

Route.get("/donasi/:slug", async ({ view, params }) => {
  const donasi = donasi_cards.find((card) => card.slug === params.slug);

  if (!donasi) {
    return view.render("errors/404");
  }

  return view.render("pages/deskripsi-donasi", {
    title: donasi.judul,
    judul: donasi.judul,
    img: donasi.img,
    deskripsi: donasi.deskripsi,
    donasi,
  });
});

Route.get("/gudangbarang", async ({ view, response }) => {
  return view.render("pages/gudangbarang", {
    title: "Gudang Barang",
  });
});
