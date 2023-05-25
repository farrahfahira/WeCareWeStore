"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Donasi extends Model {
  static get fillable() {
    return ["judul", "deskripsi"];
  }

  category() {
    return this.belongsTo("App/Models/Category");
  }
}

module.exports = Donasi;
