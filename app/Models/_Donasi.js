"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Donasi extends Model {
  static donasi_cards = [
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

  static get fillable() {
    return ["judul", "deskripsi"];
  }

  static all(params) {
    return Donasi.donasi_cards;
  }

  static find(slug) {
    const donasiCard = Donasi.donasi_cards.find(
      (donasi) => donasi.slug === slug
    );

    if (!donasiCard) {
      // jika donasi tidak ditemukan, tampilkan halaman 404
      return null;
    }

    return {
      judul: donasiCard.judul,
      img: donasiCard.img,
      deskripsi: donasiCard.deskripsi,
    };
  }
}

module.exports = Donasi;
