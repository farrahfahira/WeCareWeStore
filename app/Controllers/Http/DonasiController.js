"use strict";

// const Donasi = require("../../Models/Donasi");
const Donasi = use("App/Models/Donasi");

class DonasiController {
  async index({ view, response }) {
    const cards = await Donasi.all();

    return view.render("pages/donasi", {
      title: "Donasi",
      cards: cards.toJSON(),
    });
  }

  async showDetilDonasi({ view, params }) {
    const detilDonasi = await Donasi.findBy("slug", params.slug);

    if (!detilDonasi) {
      return view.render("errors.404");
    }

    return view.render("pages/deskripsi-donasi", {
      title: detilDonasi.judul,
      donasi: detilDonasi.toJSON(),
    });
  }
}

module.exports = DonasiController;
