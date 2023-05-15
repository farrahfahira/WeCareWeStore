"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const categories = use("App/Models/Category");

class DonasiSchema extends Schema {
  up() {
    this.create("donasis", (table) => {
      table.increments();
      table
        .integer("category_id", 10)
        .notNullable()
        .unique()
        .unsigned()
        .index()
        .references("id")
        .inTable("categories");
      table.string("judul", 100).notNullable();
      table.string("slug", 100).notNullable().unique();
      table.binary("img");
      table.text("deskripsi", 250).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("donasis");
  }
}

module.exports = DonasiSchema;
