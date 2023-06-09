"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  donasi() {
    return this.hasMany("App/Models/Donasi");
  }
}

module.exports = Category;
