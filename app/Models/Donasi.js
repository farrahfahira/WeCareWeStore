"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Donasi extends Model {
  static get fillable() {
    return ["judul", "deskripsi"];
  }
}

module.exports = Donasi;
